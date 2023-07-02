import {NavAdmin} from "../NavAdmin";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as customerService from '../serive/CustomerService';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const param = useParams();
    const [customer, setCustomer] = useState();
    const [typeCustomer, setType] = useState([]);

    useEffect(()=>{
        const getById = async () => {
            const res = await customerService.findById(param.id);
            setCustomer(res);
            console.log(res)
        }
        getById()
    },[param.id])

    useEffect(() => {
        const typeCustomer =async () => {
            const res=await customerService.findAllTypeCustomer();
            console.log(res)
            setType(res);
        }
        typeCustomer();
    },[])
    if (!customer){
        return null
    }
    return (
        <>
            <NavAdmin/>
            <Formik initialValues={{
                id:customer ?.id,
                name: customer ?.name,
                typeId: customer ?.typeId,
                birthday: customer ?.birthday,
                gender: customer ?.gender,
                cmnd: customer ?.cmnd,
                phone: customer ?.phone,
                email: customer ?.email,
                address: customer ?.address
            }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .required('Không được để trống')
                            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Phải đúng định dạng tên, vd (Huynh Van A)'),
                        typeId: Yup.number()
                            .required('Không được để trống')
                            .min(1),
                        birthday: Yup.date()
                            .required('Không được để trống'),
                        gender: Yup.string()
                            .required('Không được để trống'),
                        cmnd: Yup.string()
                            .required('Không được để trống')
                            .matches( /^\d{9}$/,'Chứng minh nhân nhân đủ 9 số'),
                        phone: Yup.string()
                            .required('Không được để trống')
                            .matches(/^((\+84)|0)[0-9]{9}$/,'Số điện thoại bắt buộc 10 số bắt đầu bằng 0'),
                        email: Yup.string()
                            .required('Không được để trống')
                            .matches(/^[a-zA-Z0-9+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Nhập đúng định dạng Email(vd adc098@gmail.com)"),
                        address:Yup.string()
                            .required('Không được để trống')
                    })}
                    onSubmit={ async (values,{setSubmitting})=>{
                    const updateCustomer = async () => {
                        setSubmitting(false)
                        await customerService.updateCustomer({...values, typeId: +values.typeId});
                        console.log(values)
                        Swal.fire({
                            icon:"success",
                            title:"Chỉnh sửa thành công",
                            timer:"2000"
                        })
                        navigate("/listCustomer")
                    }
                    updateCustomer()
                    }}>

                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Thêm mới danh sách khách hàng</h2>
                                </div>
                                <Form>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Tên khách hàng"
                                        />
                                        <ErrorMessage name="name" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <span/>
                                        <Field
                                            name="typeId"
                                            className="form-control"
                                            as="select"
                                        >
                                            {typeCustomer.map((list) => (
                                                <option key={list.id} value={list.id}>
                                                    {list.nameType}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="typeId" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="date"
                                            className="form-control"
                                            id=""
                                            name="birthday"
                                            placeholder="Ngày tháng năm sinh"
                                            min="1920-01-01"
                                        />
                                        <ErrorMessage name="birthday" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            name="gender"
                                            className="form-control"

                                            data-error="Please specify your need."
                                            as="select"
                                        >
                                            <option value="">
                                                --Chọn giới tính--
                                            </option>
                                            <option value="0">Nam</option>
                                            <option value="1">Nữ</option>
                                        </Field>
                                        <ErrorMessage name="gender" component="span" className="error-r"/>
                                    </div>
                                    <div className="row mt-4  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="number"
                                                name="cmnd"
                                                className="form-control"
                                                placeholder="Số CMND (có 9 số 0)"
                                            />
                                            <ErrorMessage name="cmnd" component="span" className="error-r"/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="number"
                                                className="form-control"
                                                name="phone"
                                                placeholder="Số điện thoại(có 10 số) "
                                            />
                                            <ErrorMessage name="phone" component="span" className="error-r"/>
                                        </div>
                                    </div>
                                    <div className="row mt-3  ">
                                        <div className="col-md-6 form-group">
                                            <Field
                                                type="text"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email (vd adc098@gmail.com)"
                                            />
                                            <ErrorMessage name="email" component="span" className="error-r"/>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="Địa chỉ"
                                            />
                                            <ErrorMessage name="address" component="span" className="error-r"/>
                                        </div>
                                    </div>
                                    <div className="text-center m-auto">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">THÊM MỚI KHÁCH HÀNG</b>
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