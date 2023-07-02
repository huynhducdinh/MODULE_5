import {Link} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import React, {useEffect, useState} from "react";
import * as contractService from '../serive/ContractSrevice'
import * as customerList from "../serive/CustomerService";
import * as serviceList from "../serive/Service";
import Swal from "sweetalert2";


export function ListContract() {
    const [contract, setContract] = useState([])
    const [customer, setCustomer] = useState([])
    const [service, setService] = useState([])
    const findAllContract = async () => {
        const result = await contractService.findAll();
        setContract(result)

    }
    const deleteContractId = async (id) => {
        await contractService.deleteContract(id)
        Swal.fire({
            icon: "success",
            title: "Xoá thành công",
            timer: "2000"
        })
        findAllContract()
    }
    const listCustomer = async () => {
        const res = await customerList.findAllCustomer();
        setCustomer(res)
    }
    const listService = async () => {
        const res = await serviceList.findAllService();
        setService(res)
    }
    useEffect(() => {
        listCustomer();
        listService();
        findAllContract();

    }, [])

    const deleteRentalContract = async (id, numberService) => {
        Swal.fire({
            icon: "warning",
            title: `Bạn có muốn xoá mã <span>${numberService}</span> của hợp đồng này không ?`,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonColor: "#867676",
            confirmButtonColor: "#d33"
        })
            .then((res) => {
                if (res.isConfirmed) {
                    deleteContractId(id)
                }
            })

    }
    return (
        <>
            <NavAdmin/>
            <nav
                className="navbar navbar-light "
                style={{position: "sticky", top: 0, left: 0, right: 0}}
            >
                <div className="container-fluid">
                    <div style={{display: "flex", margin: 8, position: "relative"}}>
                        <div>
                            <Link to="/createRentalContract" className="btn btn-success"
                                  style={{height: "6vh", fontSize: "1.2em"}}>Thêm mới hợp đồng</Link>
                        </div>
                    </div>

                    <form className="d-flex">
                        <input
                            style={{width: "15vw"}}
                            className="form-control me-2"
                            type="search"
                            name="name"
                            placeholder="Tim kiếm"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary" type="submit"
                                style={{width: "6vw", height: "6vh", fontSize: "1.2em"}}>
                            Search
                        </button>
                    </form>
                </div>
            </nav>

            <h1 className="text-center  " style={{color: "black"}}>
                Danh sách hợp đồng
            </h1>
            <table className="table  table-hover text-center">
                <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>Tên khách hàng</th>
                    <th>Tên dịch vụ</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng tiền</th>
                    <th colSpan={2}>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                {contract.map((list) => (
                    <tr key={list.id}>
                        <td>HD-{list.id}</td>
                        <td>{customer.find(customer => customer.id === list.customerId)?.name}</td>
                        <td>{service.find(service => service.id == list.serviceId)?.name}</td>
                        <td>{list.startDay}</td>
                        <td>{list.endDay}</td>
                        <td>{list.deposit}</td>
                        <td>{service.find(service => service.id == list.serviceId)?.rentalCosts}</td>

                        <td>
                            <Link to={`/updateContract/${list.id}`} className="btn btn-info"
                                  style={{fontSize: "1.2em", color: "white"}}>
                                Sửa
                            </Link>
                            <a
                                className="btn btn-danger"
                                style={{marginLeft: "5%", width: 70, fontSize: "1.2em", color: "white"}}
                                onClick={() => deleteRentalContract(list.id, list.numberService)}
                            >
                                Xoá
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>


            </table>
            {/*phân trang*/}
            <nav aria-label=" Page navigation example d-flex justify-content-center ">
                <ul className="pagination d-flex justify-content-center ">
                    <li className="page-item ">
                        <a className="page-link" href="#">
                            <i className="fa-solid fa-arrow-left"/>
                        </a>
                    </li>
                    <li className="page-item ">
                        <a className="page-link " href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            4
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            5
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            6
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            <i className="fa-solid fa-arrow-right"/>
                        </a>
                    </li>
                </ul>
            </nav>
            {/*modal*/}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5
                                className="modal-title"
                                id="exampleModalLabel"
                                style={{color: "#0c4128", fontSize: "1.4em"}}
                            >
                                Xoá
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Huỷ
                            </button>
                            <button type="button" className="btn btn-primary">
                                Xoá
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}