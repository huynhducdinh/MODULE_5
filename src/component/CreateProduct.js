import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {createProduct, getAllTypeProduct} from "../service/ProductService";
import * as yup from "yup"
import {useNavigate} from "react-router";
import {toast} from "react-toastify";
import {NavLink} from "react-router-dom";

export function CreateProduct() {
    const navigate = useNavigate()
    const [listTypeProducts, setListTypeProduct] = useState([])

    const displayListTypeProduct = async () => {
        const res = await getAllTypeProduct()
        setListTypeProduct(res)
    }
    useEffect(() =>{
        displayListTypeProduct()
    } , [])
    return (
        <>
            <Formik
                initialValues={
                    {
                        codeProduct: "",
                        name: "",
                        price: "",
                        amount: "",
                        date: "",
                        description: "",
                        category: 1
                    }
                }
                // validationSchema={yup.object(
                //     {
                //         codeProduct : yup.string().required("Không được để trống").matches(/^(PROD)-[0-9]{4}$/ , "Mời nhập đúng định dạng PROD-XXXX"),
                //         name : yup.string().required("Không được để trống"),
                //         price : yup.number().required("Không được để trống"),
                //         amount : yup.number().required("Không được để trống").min(1 , "Mời nhập số lớn hơn 0"),
                //         date : yup.string().required("Vui lòng chọn"),
                //         description : yup.string().required("Không được để trống")
                //     }
                // )
                //
                // }
                onSubmit={(values => {
                    values.category = + values.category
                    const create = async () => {
                        await createProduct(values)
                    }
                    create()
                    toast("Thêm thành công")
                    navigate("/")
                })}
            >
                <Form>
                    <div className="container">
                        <h1>Thêm sản phẩm</h1>
                        <div className="form-group">
                            <label htmlFor="">Mã sản phẩm</label>
                            <Field type="text"
                                   className="form-control" name="codeProduct" id="" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                                   <ErrorMessage name="codeProduct" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="1">Tên sản phẩm</label>
                            <Field type="text"
                                   className="form-control" name="name" id="1" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                            <ErrorMessage name="name" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="2">Thể loại</label>
                            <Field as="select"
                                   className="form-control" name="category" id="2" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề">
                                {
                                    listTypeProducts?.map((value =>
                                        <option value={value.id}>{value.nameCategory}</option>
                                    ))
                                }
                            </Field>
                        </div>
                        <div className="form-group">
                            <label htmlFor="3">Giá</label>
                            <Field type="number"
                                   className="form-control" name="price" id="3" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                            <ErrorMessage name="price" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="3">Số lượng</label>
                            <Field type="number"
                                   className="form-control" name="amount" id="3" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                            <ErrorMessage name="amount" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="3">Ngày nhập sản phẩm</label>
                            <Field type="date"
                                   className="form-control" name="date" id="3" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                            <ErrorMessage name="date" component="span" className="text-danger"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="3">Mô tả sản phẩm</label>
                            <Field as="textarea"
                                   className="form-control" name="description" id="3" aria-describedby="helpId"
                                   placeholder="Mời nhập tiêu đề"/>
                            <ErrorMessage name="description" component="span" className="text-danger"/>
                        </div>
                        <div style={{marginTop : "10px"}}>
                            <button type="submit" className="btn btn-secondary me-2">Thêm mới</button>
                            <NavLink to="/" className="btn btn-secondary  ">Quay lại</NavLink>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}