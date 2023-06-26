import {Link} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";

export function ListCustomer(){
    return(
        <>
            <NavAdmin/>
            <h2 className="text-center mt-2 " style={{ color: "black" }}>
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
                <tr>
                    <td>1</td>
                    <td>Huỳnh Đức Định</td>
                    <td>09-08-2002</td>
                    <td>Nam</td>
                    <td>206379735</td>
                    <td>0999888555</td>
                    <td>heeyeon0982002@gmail.com</td>
                    <td>Diamond</td>
                    <td>
                        <Link to="/updateCustomer/:id"

                              className="btn btn-info"
                              style={{ fontSize: "1.2em",color:"white" }}
                        >
                            Sửa
                        </Link>
                        <a
                            className="btn btn-danger"
                            style={{ marginLeft: "5%", width: 70, fontSize: "1.2em",color:"white" }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Xoá
                        </a>
                    </td>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>Huỳnh Đức Định</td>
                    <td>09-08-2002</td>
                    <td>Nam</td>
                    <td>206379735</td>
                    <td>0999888555</td>
                    <td>heeyeon0982002@gmail.com</td>
                    <td>Platinium</td>
                    <td>
                        <Link to="/updateCustomer/:id"

                            className="btn btn-info"
                            style={{ fontSize: "1.2em",color:"white" }}
                        >
                            Sửa
                        </Link>
                        <a
                            href="case/src/components"
                            className="btn btn-danger"
                            style={{ marginLeft: "5%", width: 70, fontSize: "1.2em",color:"white" }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Xoá
                        </a>
                    </td>
                </tr>
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