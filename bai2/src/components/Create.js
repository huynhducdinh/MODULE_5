import {useEffect, useState} from "react";
import * as productService from "../services/ProductService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from 'yup';

export function Create() {
    const [typeProduct, setProductType] = useState([])
    const n = useNavigate()
    const findAllType = async () => {
        const res = await productService.findAllType()
        console.log(res)
        setProductType(res)

    }
    useEffect(() => {
        findAllType()
    }, [])
    return (<>
            <div
                className="row height d-flex justify-content-center align-items-center"
                style={{zIndex: -1}}
            >
                <div className="col-md-6">
                    <div className="card px-5 py-4" style={{marginTop: "20%"}}>
                        <div style={{textAlign: "center"}}>
                            <h2 style={{color: "black"}}>Thêm mới</h2>
                        </div>
                        <Formik initialValues={{
                            name: '',
                            price: '',
                            typeId: ''
                        }}
                                validationSchema={yup.object({
                                    name: yup.string()
                                        .required("ko")

                                })}
                                onSubmit={async (values) => {
                                    const createProduct = async () => {
                                        await productService.save({...values, typeId: +values.typeId})
                                        Swal.fire({
                                            icon: "success",
                                            title: "Thêm mới thành công",
                                            timer: "2000"
                                        })
                                        n("/")
                                    }
                                    createProduct()
                                }
                                }>
                            <Form>
                                <div className="mt-5 ">
                                    <Field
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Tên"
                                    />
                                    <ErrorMessage name="name" component="span" className="error"/>
                                </div>
                                <div className="mt-1 ">
                                    <Field
                                        type="number"
                                        className="form-control"
                                        name="price"
                                        placeholder="GIÁ"
                                    />
                                </div>
                                <div className="mt-4 ">
                                    <Field
                                        name="typeId"
                                        type="number"
                                        className="form-control"
                                        data-error="Please specify your need."
                                        as="select"
                                    >
                                        <option value="-1">--Chọn Loại--</option>
                                        {typeProduct.map((list, index) => (
                                            <option key={index} value={list.typeId}>{list.nameType}</option>
                                        ))}
                                    </Field>
                                </div>
                                <div className="text-center m-auto mt-3">
                                    <button type="submit" className=" btn btn-success ">
                                        <b className="text-center">...</b>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}
