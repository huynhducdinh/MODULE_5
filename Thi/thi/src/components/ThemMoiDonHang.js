import {useEffect, useState} from "react";
import * as donHangService from "../service/DonHangService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from 'yup'


export function ThemMoiDonHang() {
    const [sanPham, setSanPham] = useState([])
    const navigate = useNavigate()

    const findSanPham = async () => {
        const result = await donHangService.findAllSanPham()
        setSanPham(result)

    }
    const getProduct =async (id) =>{

        for (let i = 0; i < sanPham.length; i++) {
            if(sanPham[index].id == id){
                setSanPham(sanPham[i])
            }

        }

    }


    useEffect(() => {
        findSanPham()

    }, [])

    return (
        <>
            <div className="row height d-flex justify-content-center align-items-center" style={{zIndex: -1}}>
                <div className="col-md-6">
                    <div className="card px-5 py-4" style={{marginTop: "20%"}}>
                        <div style={{textAlign: "center"}}>
                            <h2 style={{color: "black"}}>Thêm mới đơn hàng</h2>
                        </div>
                        <Formik initialValues={{
                            code_order: '',
                            purchase_date: '',
                            quantity: '',
                            sanPham: '',
                            total: ''
                        }}
                                validationSchema={Yup.object({
                                    code_order: Yup.number()
                                        .required('Không được để trống'),
                                    sanPham: Yup.number()
                                        .required('Không được để trống'),
                                    purchase_date: Yup.date().max(new Date(), 'Không được chọn ngày tương lai')
                                        .required('Không được để trống'),
                                    quantity: Yup.number()
                                        .required('Không được để trống')
                                        .min(0, 'Số lượng lớn hơn 1'),
                                })}

                                onSubmit={async (values) => {
                                    const save = async () => {
                                        await donHangService.saveDonHang({
                                            ...values,
                                            sanPham: sanPham,
                                            code_order: values?.code_order,
                                            purchase_date: values?.purchase_date,
                                            quantity: values?.quantity,
                                            total: values?.quantity * sanPham.price
                                            // product_id: +values.id,
                                            // tongTien: +(sanPham.find((sanPham) => +sanPham.id === +values.id)?.price) * +values.quantity
                                        })
                                        Swal.fire({
                                            icon: "success",
                                            title: "Thêm mới thành công",
                                            timer: "2000"
                                        })
                                        navigate("/")
                                    }
                                    save()
                                }}>
                            <Form>
                                <div className="mt-5 ">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="code_order"
                                        placeholder="Nhập mã đơn hàng"
                                    />
                                    <ErrorMessage name="code_order" component="span" className="error"/>
                                </div>
                                <div className="mt-4 ">
                                    <Field
                                        name="sanPham"
                                        type="number"
                                        className="form-control"
                                        data-error="Please specify your need."
                                        as="select"
                                        onClick={(values)=>getProduct(values.target.value)}
                                    >

                                        <option value={0}>--Chọn sản phẩm--</option>
                                        {sanPham.map((list, index) => (
                                            <option key={index}
                                                    value={list.id}>{list.nameProduct}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="sanPham" component="span" className="error"/>
                                </div>

                                <div className="mt-4 ">
                                    <Field
                                        type="date"
                                        className="form-control"
                                        name="purchase_date"
                                        placeholder="Nhập ngày mua"
                                    />
                                    <ErrorMessage name="purchase_date" component="span" className="error"/>
                                </div>
                                <div className="mt-4 ">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="quantity"
                                        placeholder="Nhập số lượng"
                                    />
                                    <ErrorMessage name="quantity" component="span" className="error"/>
                                </div>
                                {/*<div className="mt-4 ">*/}
                                {/*    <Field*/}
                                {/*        type="number"*/}
                                {/*        className="form-control"*/}
                                {/*        name="tongTien"*/}
                                {/*        placeholder="Nhập tỏ tièn"*/}
                                {/*    />*/}
                                {/*    <ErrorMessage name="soLuong" component="span" className="error"/>*/}
                                {/*</div>*/}

                                <div className="text-center m-auto mt-3">
                                    <button type="submit" className=" btn btn-success ">
                                        <b className="text-center">Thêm mới</b>
                                    </button>
                                </div>
                            </Form></Formik>
                    </div>
                </div>
            </div>
        </>
    )

}