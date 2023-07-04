import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import * as productService from "../services/ProductService";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export function Update() {
    const [product, setProduct] = useState()
    const [typeProduct, setProductType] = useState([])
    const n = useNavigate()
    const params = useParams()
    useEffect(() => {
        const getById = async () => {
            const res = await productService.findById(params.id)
            console.log(res)
            setProduct(res)
        }
        getById()
    }, [params.id])

    const findAllType = async () => {
        const res = await productService.findAllType()
        console.log(res)
        setProductType(res)

    }
    useEffect(() => {
        findAllType()
    }, [])

    if (!product) {
        return null
    }
    return (
        <>
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
                            id: product?.id,
                            name: product?.name,
                            price: product?.price,
                            typeId: product?.typeId
                        }}
                                validationSchema={yup.object({
                                    name: yup.string()
                                        .required("ko")

                                })}
                                onSubmit={async (values) => {
                                    const edit = async () => {
                                        await productService.updateProduct({...values, typeId: +values.typeId})
                                        Swal.fire({
                                            icon: "success",
                                            timer: "2000",
                                            title: "Chỉnh sữa"
                                        })
                                        n("/")
                                    }
                                    edit()
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