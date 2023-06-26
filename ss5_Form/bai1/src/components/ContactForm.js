import 'bootstrap/dist/css/bootstrap.min.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import {Comment, FallingLines, FidgetSpinner, ThreeDots} from "react-loader-spinner";


export function ContactForm() {
    return (
        <>
            <Formik initialValues={{
                name: "",
                email: "",
                phone: "",
                message: ""
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Không được để trống'),
                        email: Yup.string()
                            .required("Không được để trống")
                            .matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Nhập đúng định dạng Email(vd adc098@gmail.com)"),
                        phone: Yup.number()
                            .required("Không được để trống")

                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            toast.success("Add contact successfully !!!")
                        }, 1000)
                    }}

            >
                {
                    ({isSubmitting}) => (
                        <div className="col-md-6 " style={{marginTop: "5%", marginLeft: "25%"}}>
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Contact Form</h2>
                                </div>
                                <Form>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email"

                                        />
                                        <ErrorMessage name="email" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4">
                                        <Field
                                            type="text"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Phone"
                                        />
                                        <ErrorMessage name="phone" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="message"
                                            as="textarea"
                                            placeholder="Message"
                                        />
                                    </div>
                                    {
                                        isSubmitting ?
                                            <ThreeDots
                                                visible={true}
                                            />
                                            : <div className="text-center m-auto mt-4">
                                                <button type="submit" className=" btn btn-success ">
                                                    <b className="text-center">Submit</b>
                                                </button>
                                            </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    )
                }
            </Formik>

        </>
    )

}