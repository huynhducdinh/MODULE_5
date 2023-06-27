import {ErrorMessage, Field, Form, Formik} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as Yup from "yup";
import * as bookService from "../services/BookService";
import Swal from "sweetalert2";
import {update, updateBook} from "../services/BookService";


export function UpdateBook() {
    const navigate = useNavigate()
    const param = useParams();
    const [book, setBook] = useState();
    useEffect(() => {
        const findById = async () => {
            const result = await bookService.getById(param.id)
            console.log(result)
            setBook(result)
        }
        findById()
    }, [])
    // Kết xuất có điều kiện
    if (!book) {
        return null
    }
    return (
        <>
            <Link to="/" className="btn btn-secondary m-3">Back</Link>
            <Formik initialValues={{
                id: book.id,
                title: book.title,
                quantity: book.quantity
            }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required("Không được để trống"),
                        quantity: Yup.number()
                            .required("Không được để trống")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false)
                        const update = async () => {
                            await bookService.updateBook(values)
                            console.log(update)
                            Swal.fire({
                                icon: "success",
                                title: "Chỉnh sửa thành công",
                                confirmButtonText: "OK",
                                timer: "2000"
                            });
                            navigate("/")
                        }
                        update()
                    }}>
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>UPDATE BOOK </h2>
                                </div>
                                <Form>
                                    <div className="mt-4 " hidden>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="id"
                                            placeholder="Id"
                                        />
                                        <ErrorMessage name="title" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="title"
                                            name="title"
                                            placeholder="Title"
                                        />
                                        <ErrorMessage name="title" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="quantity"
                                            name="quantity"
                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage name="quantity" component="span" className="error-r"/>

                                    </div>

                                    <div className="text-center m-auto mt-2">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">UPDATE</b>
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>

    )

}