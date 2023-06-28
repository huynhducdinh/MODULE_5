import {NavAdmin} from "../NavAdmin";
import {Field, Formik, Form, ErrorMessage} from "formik";
import {useNavigate,} from "react-router-dom";
import Swal from "sweetalert2";
import * as serviceService from '../serive/Service';
import {useEffect, useState} from "react";
import * as Yup from 'yup';

export function CreateService() {
    const navigate = useNavigate();
    const [type, setType]=useState([]);
    useEffect( () => {
        const findAllType = async () => {
        const res = await serviceService.findAllType();
        setType(res)
        }
        findAllType()
    },[])

    return (
        <>
            <NavAdmin/>
            <Formik initialValues={{
                type: '',
                name: '',
                acreage: '',
                rentalCosts: '',
                maximumNumberPeople: '',
                typeRental: '',
                descriptionOtherUtilities: '',
                roomStandard: '',
                numberFloors: '',
                poolArea: '',
                freeServiceIncluded: '',
                image:''
            }}
                   validationSchema={Yup.object({
                       type:Yup.string()
                           .required('Không được để trống'),
                       name:Yup.string()
                           .required('Không được để trống'),
                       acreage:Yup.number()
                           .required('Không được để trống'),
                       rentalCosts:Yup.number()
                           .required('Không được để trống'),
                       maximumNumberPeople:Yup.number()
                           .required('Không được để trống'),
                       typeRental:Yup.string()
                           .required('Không được để trống')
                   })}
                    onSubmit={ (values, {setSubmitting}) => {
                        const create = async () => {
                            setSubmitting(false)
                            await serviceService.save(values)
                            Swal.fire({
                                icon:"success",
                                title:"Thêm mới thành công",
                                timer:"2000"
                            })
                            navigate("/listFacilityService")
                        }
                        create();
                    }}
            >

                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"

                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Thêm mới dịch vụ</h2>
                                </div>
                                <Form>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            as="select"
                                            name="type"
                                            className="form-control"
                                            data-error="Please specify your need."
                                        >
                                            {type.map((listType)=>(
                                                <option key={listType.id} value={listType.name}>{listType.name}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="type" component="span" className="error-r"/>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Tên dịch vụ"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r"/>

                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="acreage"
                                            placeholder="Diện tích sử dụng"
                                        />
                                        <ErrorMessage name="acreage" component="span" className="error-r"/>
                                    </div>

                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="text"
                                                name="rentalCosts"
                                                className="form-control"
                                                placeholder="Chi phí thuê"
                                            />
                                            <ErrorMessage name="rentalCosts" component="span" className="error-r"/>

                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="maximumNumberPeople"
                                                placeholder="Số người tối đa"
                                            />
                                            <ErrorMessage name="maximumNumberPeople" component="span" className="error-r"/>

                                        </div>
                                    </div>
                                    <div className="mt-4 inputs">
                                        <Field
                                            name="typeRental"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option value="" >
                                                --Loại hình cho thuê--
                                            </option>
                                            <option value="Year">Year</option>
                                            <option value="Month" >Month</option>
                                            <option value="Day">Day</option>
                                            <option value="Hour">Hour</option>
                                        </Field>
                                        <ErrorMessage name="typeRental" component="span" className="error-r"/>

                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"

                                            name="descriptionOtherUtilities"
                                            placeholder="Mô tả các tiện ích khác(Villa,House)"
                                        />
                                    </div>
                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="text"
                                                name="roomStandard"
                                                className="form-control"
                                                placeholder="Tiêu chuẩn phòng(Villa,House)"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="numberFloors"
                                                placeholder="Số tầng(Villa,House)"

                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="text"
                                                name="poolArea"
                                                className="form-control"
                                                placeholder="Diện tích hồ bơi(Villa)"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="freeServiceIncluded"
                                                placeholder="Dịch vụ miễn phí đi kèm(Room)"

                                            />
                                        </div>
                                    </div>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="image"
                                            placeholder="Link Hình ảnh"

                                        />
                                    </div>
                                    <div className="text-center m-auto mt-4">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">THÊM MỚI DỊCH VỤ</b>
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