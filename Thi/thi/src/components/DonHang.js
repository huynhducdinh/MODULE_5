import {useEffect, useState} from "react";
import * as donHangService from '../service/DonHangService'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import Swal from "sweetalert2";

export function DonHang() {
    const [donHang, setDonHang] = useState([])
    const [sanPham, setSanPham] = useState([])

    const getAllDonHang = async () => {
        const res = await donHangService.findAllDonHang()
        console.log(res)
        setDonHang(res)
    }
    const deleteOrders =async (id) => {
        await donHangService.deleteOrder(id)
        Swal.fire({
            icon:'success',
            timer:"1000",
            title:"Xoá"
        })
        getAllDonHang()
    }
    const getAllSanPham = async () => {
        const res = await donHangService.findAllSanPham()
        setSanPham(res)
    }

    useEffect(() => {
        getAllDonHang()
        getAllSanPham()

    }, [])
    return (
        <>
            <nav className="navbar navbar-light bg-light " style={{position: "sticky", top: 0, left: 0, right: 0}}>
                <div className="container-fluid">
                    <div style={{display: "flex", margin: "0%", position: "relative"}}>
                        <div>
                            <Link to="/create" className="btn btn-outline-success"
                                  style={{height: "6vh", fontSize: "1.2em"}}> Thêm mới</Link>
                        </div>
                    </div>
                    <h1 className="text-center">THỐNG KÊ ĐƠN HÀNG</h1>
                    <div className="d-flex">
                        <Formik initialValues={{
                            idSanPham: '',
                            ngayMua: ''
                        }}
                                onSubmit={async (values) => {
                                    const res = await donHangService.searchDonHang(values.idSanPham, values.ngayMua)
                                    setDonHang(res)
                                }}>
                            <Form className="d-flex">
                                <Field
                                    style={{width: "15vw"}}
                                    className="form-control me-2"
                                    type="date"
                                    name="ngayMua"
                                    placeholder="Tim kiếm"
                                    aria-label="Search"
                                />
                                <Field
                                    style={{width: "15vw"}}
                                    className="form-control me-2"
                                    name="idSanPham"
                                    as="select"
                                    >
                                    <option value={""}>--Chon loai--</option>
                                    {sanPham.map((list,index)=>(
                                        <option key={index} value={list.idSanPham}>{list.tenSanPham}</option>
                                    ))}
                                </Field>
                                <button className="btn btn-outline-primary" type="submit"
                                        style={{width: "4vw", height: "6vh", fontSize: "1.2em"}}>
                                    <i className="fa-solid fa-magnifying-glass r"></i>
                                </button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </nav>
            <table className="table table-hover table-striped"
                   style={{marginTop: "3%", width: "80%", marginLeft: "10%", border: "1px solid black"}}
            >
                <thead>
                <tr>
                    <th className="text-center" style={{fontSize: "1.2em"}}>STT</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Mã đơn hàng</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Tên sản phẩm</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Giá(USD)</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Loại sản phẩm</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Ngày mua</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Số lượng</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Tổng tiền(USD)</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Chức năng</th>

                </tr>
                </thead>
                <tbody>
                {donHang.map((list, index) => (
                    <tr key={index}>
                        <td className="text-center">{list.id}</td>
                        <td className="text-center">{list.codeOrder}</td>
                        <td className="text-center">{list.product.nameProduct}</td>
                        <td className="text-center">{list.product.price}</td>
                        <td className="text-center">{list.product.type}</td>
                        {/*<td className="text-center">{sanPham.find((sanPham) => (sanPham.idSanPham === list.idSanPham))?.tenSanPham}</td>*/}
                        {/*<td className="text-center">{sanPham.find((sanPham) => (sanPham.idSanPham === list.idSanPham))?.giaTien}</td>*/}
                        {/*<td className="text-center">{loaiSanPham.find((l) => (l.idLoai === list.idLoai))?.tenloai}</td>*/}
                        <td className="text-center">{list.purchaseDate}</td>
                        <td className="text-center">{list.quantity}</td>
                        <td className="text-center">{list.totals}</td>
                        <td className="text-center" colSpan="">
                            <Link onClick={()=>deleteOrders(list.id)} className="btn btn-outline-danger"
                               style=
                                   {{margin: "2%"}}
                            ><i className="fa-solid fa-trash"></i></Link>
                            <a href="" className="btn btn-outline-warning"
                               style={{margin: "2%"}}
                            ><i className="fa-solid fa-pen-to-square"></i></a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )

}