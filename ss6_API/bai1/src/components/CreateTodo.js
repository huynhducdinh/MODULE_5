import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik,} from "formik";
import * as Yup from 'yup'
import axios from "axios";
import {toast} from "react-toastify";
import Swal from 'sweetalert2';
import * as todoListService from "../service/ToDoService";

export function CreateTodo() {
    const navigate = useNavigate()

    return (
        <>

            <Link to="/" className="btn-secondary btn mt-2 m-4">Quay Lại</Link>
            <Formik initialValues={{
                title: ''
            }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Không được để trống')
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await todoListService.save(values);
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfully',
                                text: 'Successful editing!',
                                confirmButtonText: 'Oke',
                                timer: 2000,
                            });
                            navigate("/")
                        }
                        create()
                    }}
            >
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Thêm mới </h2>
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

                                    <div className="text-center m-auto mt-2">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">THÊM MỚI</b>
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