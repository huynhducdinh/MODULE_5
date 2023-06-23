import {Link} from "react-router-dom";

export function ListAdmin(){
    return(
        <>
            <nav
                className="navbar navbar-expand-lg "
                data-bs-theme="light"
                style={{
                    backgroundColor: "#046056",
                    height: 75,
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    width: "100%"
                }}
            >
                <div className="sticky-wrapper" style={{ marginLeft: "15%" }}>
                    <div className="header-nav js-header-nav sticky">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg">
                                <div className="navbar-collapse">
                                    <ul
                                        id="menu-furama-vi"
                                        className="menu navbar-nav w-100 js-main-menu j"
                                    >
                                        <li
                                            id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <Link to="/" className="nav-link main-menu-link">
                                                TRANG CHỦ
                                            </Link>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="customer.html" className="nav-link main-menu-link">
                                                KHÁCH HÀNG
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5008"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="" className="nav-link main-menu-link">
                                                NHÂN VIÊN
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a
                                                href="listHopDong.html"
                                                className="nav-link main-menu-link"
                                            >
                                                HỢP ĐỒNG THUÊ
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5013"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <div className="dropdown">
                                                <a className="dropbtn nav-link main-menu-link">THÊM MỚI</a>
                                                <div className="dropdown-content">
                                                    <a href="createDichvu.html">Thêm mới dịch vụ</a>
                                                    <a href="create-customer.html">Thêm mới khách hàng</a>
                                                    <a href="#">Thêm mới nhân viên</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <form className="d-flex " style={{ marginLeft: 300 }}>
                                        <input
                                            className="form-control mr-2"
                                            type="search"
                                            placeholder="Tìm kiếm"
                                            style={{ width: 220, marginLeft: "5%" }}
                                            aria-label="Search"
                                        />
                                        <button
                                            className="btn btn-info"
                                            type="submit"
                                            style={{ fontSize: "1.2em" }}
                                        >
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
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
                        <a
                            href="/update-customer.html"
                            className="btn btn-info"
                            style={{ fontSize: "1.2em" }}
                        >
                            Sửa
                        </a>
                        <a
                            href=""
                            className="btn btn-danger"
                            style={{ marginLeft: "5%", width: 70, fontSize: "1.2em" }}
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
                        <a
                            href="/update-customer.html"
                            className="btn btn-info"
                            style={{ fontSize: "1.2em" }}
                        >
                            Sửa
                        </a>
                        <a
                            href=""
                            className="btn btn-danger"
                            style={{ marginLeft: "5%", width: 70, fontSize: "1.2em" }}
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