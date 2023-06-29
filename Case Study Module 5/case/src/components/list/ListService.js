import {Component, useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import * as serviceService from '../serive/Service';
import Swal from "sweetalert2";


export function ListService() {
    const [service, setService] = useState([]);
    const [typeService, setTypeService] = useState([]);

    const findAllService = async () => {
        const result = await serviceService.findAll();
        setService(result);

    }
    const findAllTypeService = async () => {
        const res = await serviceService.findAllType()
        setTypeService(res)

    }
    useEffect(() => {
        findAllService();
        findAllTypeService();
    },[])
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

    const handlePageClick = () => {

    }
    return (
        <>
            <NavAdmin/>
            <h2 className="text-center mt-2 " style={{color: "black"}}>
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
                    <th colSpan={2}>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                {service.map((listService) =>
                    <tr key={listService.id}>
                        <td>{listService.id}</td>
                        <td>{listService.name}</td>
                        <td>{typeService.find(typeService=>typeService.id===listService.typeServiceId)?.nameTypeService}</td>
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
            {/*<ReactPaginate*/}
            {/*    breakLabel="..."*/}
            {/*    nextLabel="next >"*/}
            {/*    onPageChange={handlePageClick}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    pageCount={20}*/}
            {/*    previousLabel="< previous"*/}
            {/*    pageClassName="page-item"*/}
            {/*    pageLinkClassName="page-link"*/}
            {/*    previousClassName="page-item"*/}
            {/*    previousLinkClassName="page-link"*/}
            {/*    nextClassName="page-item"*/}
            {/*    nextLinkClassName="page-link"*/}
            {/*    breakClassName="page-item"*/}
            {/*    breakLinkClassName="page-link"*/}
            {/*    containerClassName="pagination"*/}
            {/*    activeClassName="active"*/}
            {/*    renderOnZeroPageCount={null}*/}
            {/*/>*/}
            {/*phân trang*/}
            <nav aria-label=" Page navigation example d-flex justify-content-center ">
                <ul className="pagination d-flex justify-content-center ">
                    <li className="page-item ">
                        <a className="page-link" href="case/src/components#">
                            <i className="fa-solid fa-arrow-left"/>
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
                            <i className="fa-solid fa-arrow-right"/>
                        </a>
                    </li>
                </ul>
            </nav>
            {/*modal*/}

        </>
    )

}