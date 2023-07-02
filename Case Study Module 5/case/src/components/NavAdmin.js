import {Link, NavLink} from "react-router-dom";
import React from "react";

export function NavAdmin() {
    return (
        <>
            <div className="sticky-wrapper"
                 style={{position: "sticky", width: "100%", zIndex: 100, top: 0}}>
                <div className="header-nav js-header-nav ">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                                <ul
                                    id="menu-furama-vi"
                                    className="menu navbar-nav js-main-menu"
                                    style={{ width: "80%", marginLeft:"5%"}}
                                >
                                    <li id="nav-menu-item-5006"
                                        className="nav-item menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                        <div className=" d-flex align-items-center bestel-logo">
                                            <NavLink to={`/`} className="header-logo">
                                                <img
                                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                                                    alt="logo "
                                                    className="img-fluid"
                                                    width={42}
                                                    height={50}
                                                />
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"10%"}}
                                    >
                                        <NavLink to={`/`}
                                                 className="nav-link main-menu-link"
                                        >
                                            TRANG CHỦ
                                        </NavLink>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"1%"}}
                                    >
                                        <NavLink to={`/listCustomer`}
                                              className="nav-link main-menu-link"
                                        >
                                           KHÁCH HÀNG
                                        </NavLink>
                                    </li>
                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"1%"}}
                                    >
                                        <NavLink to={`/listFacilityService`}
                                                 className="nav-link main-menu-link"
                                        >
                                            DỊCH VỤ
                                        </NavLink>
                                    </li>

                                    <li
                                        id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                                        style={{marginLeft:"1%"}}
                                    >
                                        <NavLink to={`/listRentalContract`}
                                              className="nav-link main-menu-link"
                                        >
                                            HỢP ĐỒNG
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )

}