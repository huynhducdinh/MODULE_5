import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useEffect, useState} from "react";


export function Card() {
    return (
        <>
            <div className="container bg-white">
                <div className="row">
                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5
                                    style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG SUITE HƯỚNG
                                    BIỂN</h5>
                                <p className=""
                                   style={{marginLeft: "5%", marginTop: "1%"}}
                                >Diện tích phòng: 84.8 m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn"
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5
                                    style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG STUDIO
                                    SUITE HƯỚNG BIỂN</h5>
                                <p className=""
                                   style={{marginLeft: "5%", marginTop: "1%"}}
                                >Diện tích phòng: 40.1
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Xoá</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG DELUXE
                                    HƯỚNG BIỂN</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 43.7
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG SUPERIOR
                                    HƯỚNG HỒ</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 40.1
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>

                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG SUPERIOR
                                    HƯỚNG VƯỜN</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 40.1
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>

                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Garden-Deluxe-5-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG DELUXE
                                    HƯỚNG VƯỜN</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 43.7
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">PHÒNG
                                    PRESIDENTIAL SUITE</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 130
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">BIỆT THỰ HƯỚNG
                                    BIỂN CÓ HỒ BƠI RIÊNG</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 900
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger"
                                   style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                        <div className="product card">
                            <img className="img-fluid "
                                 src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas-F-370x239.jpg"
                                 alt=""/>
                            <div className="text-center">
                                <h5 style={{fontWeight: "bold", marginTop: "-4%", color: "black"}}
                                    className="title pt-4 pb-1">BIỆT THỰ HƯỚNG
                                    VƯỜN CÓ HỒ BƠI RIÊNG</h5>
                                <p className="" style={{marginLeft: "5%", marginTop: "1%"}}>Diện tích phòng: 320
                                    m <sup>2</sup></p></div>
                            <div className="d-flex justify-content-center"
                                 style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                <a href="edit.html" className="btn  "
                                   style={{
                                       backgroundColor: "#046056",
                                       borderTop: "#046056",
                                       color: "white",
                                       marginLeft: "-5%",
                                       width: "100px"
                                   }}>Sửa</a>
                                <a href="" className="btn btn-danger" style={{marginLeft: "5%", width: "100px"}}
                                   data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label=" Page navigation example d-flex justify-content-center ">
                <ul className="pagination d-flex justify-content-center ">
                    <li className="page-item "><a className="page-link" href="#"><i className="fa-solid fa-arrow-left"></i></a>
                    </li>
                    <li className="page-item "><a className="page-link " href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i className="fa-solid fa-arrow-right"></i></a>
                    </li>
                </ul>
            </nav>
</>
            )
            }