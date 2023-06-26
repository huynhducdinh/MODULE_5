import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
import React from "react";
import {Card} from "./Card";
import {Footer} from "./Footer";

export function HeaderFurama() {
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
                                                GIỚI THIỆU
                                            </Link>
                                        </li>
                                        <li
                                            id="nav-menu-item-5007"
                                            className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="customer.html" className="nav-link main-menu-link">
                                                LOẠI PHÒNG
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5008"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a href="" className="nav-link main-menu-link">
                                             ẨM THỰC
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
                                              HỘI NGH VÀ SỰ KIỆN
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
                                              SPA
                                            </a>
                                        </li>
                                        <li
                                            id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <a
                                                href=""
                                                className="nav-link main-menu-link"
                                            >
                                              ƯU ĐÃI
                                            </a>
                                        </li>

                                        <li
                                            id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                            <Link to="/listCustomer"

                                                className="nav-link main-menu-link"
                                            >
                                               ADMIN
                                            </Link>
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
            <header style={{zIndex :"-1"}}>
                <div id="indicators" className="carousel " data-ride="carousel" >
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active img">
                            <img className="img"
                                src="https://btnmt.1cdn.vn/2020/05/30/lln_pv_04_resortnhinvila.jpg" border="none" width="100%" height={500}
                                alt="new"
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h3 className="display-4 h3-form" >LOẠI PHÒNG</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Card/>
            <Footer/>
        </>
    )
}