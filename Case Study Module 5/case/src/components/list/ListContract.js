import {Link} from "react-router-dom";
import {NavAdmin} from "../NavAdmin";
import '@fortawesome/fontawesome-free/css/all.min.css';

export  function ListContract() {
    return(
        <>
            <NavAdmin/>
            <h2 className="text-center mt-2 " style={{ color: "black" }}>
                Danh sách hợp đồng
            </h2>
            <table className="table  table-hover text-center">
                <thead className="table-light">
                <tr>
                    <th>Id</th>
                    <th>Tên khách hàng</th>
                    <th>Số hợp đồng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                    <th colSpan={2}>Chức Năng</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Huỳnh Đức Định</td>
                    <td>0001</td>
                    <td>09-08-2023</td>
                    <td>10-09-2023</td>
                    <td>500.000</td>
                    <td>2.000.000</td>
                    <td>
                        <Link to="/"  className="btn btn-info"  style={{ fontSize: "1.2em",color:"white" }}>
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
                    <td>0002</td>
                    <td>09-08-2023</td>
                    <td>10-09-2023</td>
                    <td>500.000</td>
                    <td>2.000.000</td>
                    <td>
                        <a href="" className="btn btn-info" style={{ fontSize: "1.2em",color:"white" }}>
                            Sửa
                        </a>
                        <a
                            href=""
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
                        <a className="page-link" href="#">
                            <i className="fa-solid fa-arrow-left" />
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