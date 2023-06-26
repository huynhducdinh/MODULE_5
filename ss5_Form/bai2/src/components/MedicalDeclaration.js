import {ErrorMessage, Field, Form, Formik} from "formik";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import {Comment, FallingLines, FidgetSpinner, ThreeDots} from "react-loader-spinner";


export function MedicalDeclration() {
    return (
        <>
            <Formik initialValues={
                {
                    name: 'Huỳnh Đức Định',
                    cmnd: '206379735',
                    birth: '2002',
                    gender: '0',
                    nationality: 'Việt Nam',
                    workingCompany: '',
                    workingParts: '',
                    healthInsuranceCard: [],
                    province: 'Quảng Nam',
                    district: 'Đại Lộc',
                    commune: 'TT Ái Nghĩa',
                    apartmentNumber: '10',
                    email: 'heeyeon@gmail.com',
                    phone: '0555777666',
                    symptom:['Sốt','Ho'],
                    contact:'',



                }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Không được để trống'),
                        cmnd: Yup.number()
                            .required('Không được để trống'),
                        birth: Yup.number()
                            .required('Không được để trống')
                            .min(1900, 'Năm sinh phải lớn hơn năm 1900'),
                        nationality: Yup.string()
                            .required('Không được để trống'),
                        email: Yup.string()
                            .required('Không được để trống')
                            .matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Nhập đúng định dạng Email(vd adc098@gmail.com)"),
                        phone: Yup.number()
                            .required('Không được để trống'),
                        apartmentNumber: Yup.string()
                            .required('Không được để trống'),
                        commune: Yup.string()
                            .required('Không được để trống'),
                        district: Yup.string()
                            .required('Không được để trống'),
                        province: Yup.string()
                            .required('Không được để trống'),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                                toast.success('Thành coong')
                                setSubmitting(false)
                            }, 1000
                        )
                    }}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <div className="col-md-6 " style={{marginTop: "5%", marginLeft: "25%"}}>
                                <div className="card px-5 py-4">
                                    <div style={{textAlign: "center"}}>
                                        <h2 style={{color: "black"}}>Medical Declaration</h2>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Họ tên</label>
                                        <Field type="text" className="form-control"
                                               name="name"
                                        />
                                        <ErrorMessage name="name" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Số hộ chiếu/CMND</label>
                                        <Field type="text" className="form-control"
                                               name="cmnd"
                                        />
                                        <ErrorMessage name="cmnd" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Năm sinh</label>
                                        <Field type="text" className="form-control"
                                               name="birth"
                                        />
                                        <ErrorMessage name="birth" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3 ">
                                        <label className="form-label">Giới tính&ensp;</label>
                                        <div className="form-check form-check-inline">
                                            <label className="form-label">Nam</label>
                                            <Field type="radio" className="form-check-input"
                                                   value="0"
                                                   name="gender"
                                            />
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <label className="form-label">Nữ</label>
                                            <Field type="radio" className="form-check-input"
                                                   value="1"
                                                   name="gender"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quốc tịch</label>
                                        <Field type="text" className="form-control"
                                               name="nationality"
                                        />
                                        <ErrorMessage name="nationality" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Công ty làm việc</label>
                                        <Field type="text" className="form-control"
                                               name="workingCompany"
                                        />
                                        <ErrorMessage name="workingCompany" component='span'
                                                      className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Bộ phận làm việc</label>
                                        <Field type="text" className="form-control"
                                               name="workingParts"
                                        />
                                        <ErrorMessage name="workingParts" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3 ">
                                        <label className="form-label">Có thẻ bảo hiểm y tế</label>
                                        <Field type="checkbox" className="form-check-input " style={{marginTop:"0.8%",marginLeft:"1%"}}
                                               value="Có"
                                               name="healthInsuranceCard"
                                        />
                                    </div>
                                    <h3>Địa chỉ liên lạc tại Việt Nam</h3>
                                    <div className="mb-3">
                                        <label className="form-label">Tỉnh Thành</label>
                                        <Field type="text" className="form-control"
                                               name="province"
                                        />
                                        <ErrorMessage name="province" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quận/Huyện</label>
                                        <Field type="text" className="form-control"
                                               name="district"
                                        />
                                        <ErrorMessage name="district" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phường/xã</label>
                                        <Field type="text" className="form-control"
                                               name="commune"
                                        />
                                        <ErrorMessage name="commune" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Số nhà, phố, tổ dân phố /thôn /đội</label>
                                        <Field type="text" className="form-control"
                                               name="apartmentNumber"
                                        />
                                        <ErrorMessage name="apartmentNumber" component='span'
                                                      className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Điện thoại</label>
                                        <Field type="number" className="form-control"
                                               name="phone"
                                        />
                                        <ErrorMessage name="phone" component='span' className="error-mess"/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <Field type="text" className="form-control"
                                               name="email"
                                        />
                                        <ErrorMessage name="email" component='span' className="error-mess"/>
                                    </div>

                                    <div className="mb-3">
                                        <h4>Trong vòng 14 ngày qua Anh/chị có đến quốc gia vùng lãnh thỗ nào(có thể đi
                                            qua
                                            nhiều quốc gia)</h4>
                                        <Field type="text" className="form-control" as="textarea"
                                               name="move"
                                        />
                                    </div>
                                    <h4>Trong vòng 14 ngày qua Anh/chị có xuất hiện triệu chứng nào sau đây không?</h4>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Sốt"
                                               name="symptom"
                                        />
                                        <label className="form-check">Sốt</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Ho"
                                               name="symptom"
                                        />
                                        <label className="form-check">Ho</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Khó thở"
                                               name="symptom"
                                        />
                                        <label className="form-check">Khó thở</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Viêm phổi"
                                               name="symptom"
                                        />
                                        <label className="form-check">Viêm phổi</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Đau họng"
                                               name="symptom"
                                        />
                                        <label className="form-check">Đau họng</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Mệt mỏi"
                                               name="symptom"
                                        />
                                        <label className="form-check">Mệt mỏi</label>
                                    </div>
                                    <h4>Trong vòng 14 ngày qua Anh/chị có tiếp xúc với?</h4>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                                               name="contact"
                                        />
                                        <label className="form-check">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Người từ nước có bệnh COVID-19"
                                               name="contact"
                                        />
                                        <label className="form-check">Người từ nước có bệnh COVID-19</label>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <Field type="checkbox" className="form-check-input"
                                               value="Người có biểu hiện (số, ho, khó thở, viêm phổi)"
                                               name="contact"
                                        />
                                        <label className="form-check">Người có biểu hiện (số, ho, khó thở, viêm phổi)</label>
                                    </div>
                                    {isSubmitting ?
                                        <ThreeDots
                                            visible={true}
                                        />
                                        :
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    }

                                </div>
                            </div>
                        </Form>

                    )
                }
            </Formik>
        </>
    )

}