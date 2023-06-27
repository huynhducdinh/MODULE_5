import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import * as bookService from '../services/BookService';
import Swal from "sweetalert2";

export function CreateBook() {
    const navigate = useNavigate();
    return (
        <>
            <Link to="/" className="btn btn-secondary m-3">Back</Link>
            <Formik initialValues={{
                title: "",
                quantity: ""
            }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required("Không được để trống"),
                        quantity: Yup.number()
                            .required("Không được để trống")
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await bookService.create(values)
                            Swal.fire({
                                icon: "success",
                                title: "Thêm mới thành công",
                                confirmButtonText: "OK",
                                timer: "2000"
                            });
                            navigate("/")
                        }
                        create()
                    }}>
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>CREATE BOOK </h2>
                                </div>
                                <Form>
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
                                            id="title"
                                            name="quantity"
                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage name="quantity" component="span" className="error-r"/>

                                    </div>

                                    <div className="text-center m-auto mt-2">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">CREATE</b>
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