import React, {Component, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import * as serviceService from '../serive/Service';
import Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";
import ReactPaginate from "react-paginate";
import * as customerService from "../serive/CustomerService";
import {findAllService} from "../serive/Service";


export function ListService() {
    const [service, setService] = useState([]);
    const [typeService, setTypeService] = useState([]);
    const [pageCount, setPageCount] = useState(0)


    const findAllService = async () => {
        const result = await serviceService.findAllService();
        console.log(result)
        setService(result);

    }
    const findAllTypeService = async () => {
        const res = await serviceService.findAllType()
        setTypeService(res)

    }
    const fecthApi = async () => {
        const rs = await serviceService.findAllService( "",1)
        const pages = await serviceService.getTotalPages()
        let total = Math.ceil(pages.length / 5)
        setPageCount(total)
        setService(rs)
    }
    useEffect(() => {
        fecthApi()
        findAllService();
        findAllTypeService();

    }, [])
    const deleteServiceId = async (id) => {
        await serviceService.deleteService(id);
        Swal.fire({
            icon: "success",
            timer: "2000",
            title: "Xoá thành công"
        })
        findAllService();
    }
    const deleteServices = (id, name) => {
        Swal.fire({
            icon: "warning",
            title: `Bạn có muốn xoá tên <span>${name}</span> dịch vụ này không ?`,
            cancelButtonColor: "#948d8d",
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes",
            showCancelButton: true
        })
            .then((res) => {
                if (res.isConfirmed) {
                    deleteServiceId(id)
                }
            })
    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1
        const rs = await customerService.findAll('', currentPage)
        setService(rs)
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
                            <Link to="/createService" className="btn btn-success"
                                      style={{height: "45px", fontSize: "1.2em"}}>Thêm mới dịch vụ</Link>
                        </div>
                    </div>
                    <Formik initialValues={{
                        name: ''
                    }}
                            onSubmit={ async (values) => {
                                const searchService = async () => {
                                    const res = await serviceService.findAll(values.name)
                                    console.log(res)
                                    setService(res)
                                }
                                searchService()
                            }}>
                        <Form className="d-flex">
                            <Field
                                style={{width: "15vw"}}
                                className="form-control me-2"
                                type="text"
                                name="name"
                                placeholder="Tìm kiếm"
                            />
                            <button className="btn btn-primary" type="submit"
                                    style={{width: "6vw", height: "48px", fontSize: "1.2em"}}>
                                Search
                            </button>
                        </Form>
                    </Formik>
                </div>
            </nav>
            <h1 className="text-center " style={{color: "black"}}>
                Danh sách Dịch vụ
            </h1>
            <table className="table table-hover text-center">
                <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>Tên dịch vụ</th>
                    <th>Loại dịch vụ</th>
                    {/*<th>Hình ảnh</th>*/}
                    <th>Diện tích sử dụng(m2)</th>
                    <th>Chi phí thuê(Vnd)</th>
                    <th colSpan={2}>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                {service.map((listService) =>
                    <tr key={listService.id}>
                        <td>{listService.id}</td>
                        <td>{listService.name}</td>
                        <td>{typeService.find(typeService => typeService.id === listService.typeServiceId)?.nameTypeService}</td>
                        {/*<td>{listService.typeServiceId}</td>*/}

                        {/*<td><img style={{height: "35%",width: "35%"}} src={listService.image}/></td>*/}
                        <td>{listService.acreage}</td>
                        <td>{listService.rentalCosts}</td>


                        <td colSpan={2} className="d-flex text-center justify-content-center">
                            <Link to={`/updateService/${listService.id}`}

                                  className="btn btn-info"
                                  style={{fontSize: "1.2em", color: "white"}}
                            >
                                Sửa
                            </Link>
                            <a onClick={() => deleteServices(listService.id, listService.name)}
                               className="btn btn-danger"
                               style={{marginLeft: "5%", width: 70, fontSize: "1.2em", color: "white"}}
                            >
                                Xoá
                            </a>
                        </td>
                    </tr>
                )}


                </tbody>
            </table>
            {/*là 1 component*/}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link "
                previousClassName="page-item "
                containerClassName="pagination justify-content-center"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />



        </>
    )

}