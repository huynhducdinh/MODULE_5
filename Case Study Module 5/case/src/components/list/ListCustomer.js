import {Link} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import {useEffect, useState} from "react";
import * as customerService from '../serive/CustomerService';
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

export function ListCustomer() {
    const [customer, setCustomer] = useState([])
    const [typeCustomer, setTypeCustomer] = useState([])
    const [pageCount,setPageCount] = useState(0)

    const findAllCustomer = async () => {
        const result = await customerService.findAll();
        setCustomer(result)
    }
    const typeCustomerList = async () => {
        const res = await customerService.findAllTypeCustomer()
        setTypeCustomer(res)
    }
    const fecthApi = async () => {
        const rs = await customerService.findAll('',1)
        const pages = await customerService.getTotalPages()
        let total = Math.ceil(pages.length/5)
        setPageCount(total)
        setCustomer(rs)
    }

    useEffect(() => {
        fecthApi()
        findAllCustomer()
        typeCustomerList()
    }, [])
    const deleteCustomers = async (id) => {
        await customerService.deleteCustoemr(id)
        Swal.fire({
            icon: "success",
            timer: "2000",
            title: "Xoá thành công"
        })
        findAllCustomer()

    }
    const deleteCustoemrId = async (id, name) => {
        Swal.fire({
            icon: "warning",
            title: `Bạn có muốn xoá tên <span>${name}</span> ngày không ?`,
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#8f8787"
        })
            .then((res) => {
                if (res.isConfirmed) {
                    deleteCustomers(id)
                }
            })

    }

    const handlePageClick= async(data)=> {
        let currentPage = data.selected + 1
        const rs = await customerService.findAll('', currentPage)
        setCustomer(rs)
    }

    return (
        <>
            <NavAdmin/>

            <h2 className="text-center mt-2 " style={{color: "black"}}>
                Danh sách khách hàng
            </h2>
            <table className="table  table-hover text-center">
                <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>Họ tên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Số CMND</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th>Loại khách</th>
                    <th colSpan={2}>Chức Năng</th>
                </tr>
                </thead>
                <tbody>

                {customer.map((listCustomer) => (
                    <tr key={listCustomer.id}>
                        <td>{listCustomer.id}</td>
                        <td>{listCustomer.name}</td>
                        <td>{listCustomer.birthday}</td>
                        <td>{listCustomer.gender == 0 ? 'Nam' : 'Nữ'}</td>
                        <td>{listCustomer.cmnd}</td>
                        <td>{listCustomer.phone}</td>
                        <td>{listCustomer.email}</td>
                        <td>{typeCustomer.find(typeCustomer=>typeCustomer.id===listCustomer.typeId)?.nameType}</td>
                        <td>
                            <Link to={`/updateCustomer/${listCustomer.id}`}

                                  className="btn btn-info"
                                  style={{fontSize: "1.2em", color: "white"}}
                            >
                                Sửa
                            </Link>
                            <a
                                className="btn btn-danger"
                                onClick={() => deleteCustoemrId(listCustomer.id, listCustomer.name)}
                                style={{marginLeft: "5%", width: 70, fontSize: "1.2em", color: "white"}}

                            >
                                Xoá
                            </a>
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>

            <ReactPaginate
                previousLabel= <i className="fa-solid fa-arrow-left"/>
                nextLabel= <i className="fa-solid fa-arrow-right"/>
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"

            />
        </>

    )
}