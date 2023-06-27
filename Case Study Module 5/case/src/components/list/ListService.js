import {Component, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import * as serviceService from '../serive/Service';



export  function ListService() {
    const [service, setService]=useState([]);
    useEffect(()=>{
        const findAllService = async () => {
            const  result= await serviceService.findAll();
          setService(result)
        }
        findAllService()
    })

        return(
            <>
                <NavAdmin/>
                <h2 className="text-center mt-2 " style={{ color: "black" }}>
                    Danh sách Dịch vụ
                </h2>
                <table className="table table-hover text-center">
                    <thead className="table-light">
                    <tr>
                        <th>Id</th>
                        <th>Tên dịch vụ</th>
                        <th>Loại dịch vụ</th>
                        {/*<th>Hình ảnh</th>*/}
                        <th>Diện tích sử dụng(m2)</th>
                        <th>Chi phí thuê(Vnd)</th>
                        <th>Số lượng người tối đa</th>
                        <th>Kiểu thuê </th>
                        <th colSpan={2}>Chức Năng</th>
                    </tr>
                    </thead>
                    <tbody>
                    {service.map((listService) =>
                        <tr key={listService.id}>
                            <td>{listService.id}</td>
                            <td>{listService.name}</td>
                            <td>{listService.type}</td>
                            {/*<td><img style={{height: "35%",width: "35%"}} src={listService.image}/></td>*/}
                            <td>{listService.acreage}</td>
                            <td>{listService.rentalCosts}</td>
                            <td>{listService.quantity}</td>
                            <td>{listService.rentalType}</td>

                            <td colSpan={2} className="d-flex">
                                <Link to={`/updateService/${listService.id}`}

                                      className="btn btn-info"
                                      style={{ fontSize: "1.2em",color:"white" }}
                                >
                                    Sửa
                                </Link>
                                <Link
                                   to={`/${listService.id}`}
                                    className="btn btn-danger"
                                    style={{ marginLeft: "5%", width: 70, fontSize: "1.2em",color:"white" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Xoá
                                </Link>
                            </td>
                        </tr>
                    )}


                    </tbody>
                </table>
                {/*phân trang*/}
                <nav aria-label=" Page navigation example d-flex justify-content-center ">
                    <ul className="pagination d-flex justify-content-center ">
                        <li className="page-item ">
                            <a className="page-link" href="case/src/components#">
                                <i className="fa-solid fa-arrow-left" />
                            </a>
                        </li>
                        <li className="page-item ">
                            <a className="page-link " href="case/src/components#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                4
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                5
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                6
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="case/src/components#">
                                <i className="fa-solid fa-arrow-right" />
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
                                    style={{ color: "#0c4128", fontSize: "1.4em" }}
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