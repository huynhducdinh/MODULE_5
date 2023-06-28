
import {NavAdmin} from "../NavAdmin";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as customerService from '../serive/CustomerService';
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export  function CreateCustomer(){
    const navigate=useNavigate();
    const [type, setType] =useState([]);
    useEffect(()=>{
        const findAllType = async () => {
          const  res = await customerService.findAllTypeCustomer();
          setType(res)
        }
        findAllType()
    })
    return(
<>
   <NavAdmin/>
    <Formik initialValues={{
        name:'',
        typeCustomer:'',
        birthday:'',
        gender:'',
        cmnd:'',
        phone:'',
        email:'',
        address:''
    }}
     onSubmit={(values,{setSubmitting})=>{
         const create = async () => {
             setSubmitting(false)
             await  customerService.save(values);
             Swal.fire({
                 icon:"success",
                 title:"Thêm mới thành công",
                 timer:"2000"
             })
             navigate("/listCustomer")

         }
         create()
     }}>
    <div className="container mt-5 mb-5 ">
        <div
            className="row height d-flex justify-content-center align-items-center"
            style={{ zIndex: -1 }}
        >
            <div className="col-md-6">
                <div className="card px-5 py-4">
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "black" }}>Thêm mới danh sách khách hàng</h2>
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
                        </div>
                        <div className="mt-4 ">
                            <span />
                            <Field
                                name="typeCustomer"
                                className="form-control"
                                as="select"
                            >
                                {type.map((list)=>(
                                    <option key={list.id} value={list.name}>
                                        {list.name}
                                    </option>
                                ))}
                            </Field>
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
                        </div>
                        <div className="mt-4 ">
                            <Field
                                name="gender"
                                className="form-control"

                                data-error="Please specify your need."
                                as="select"
                            >
                                <option value="" >
                                    --Chọn giới tính--
                                </option>
                                <option value="0">Nam</option>
                                <option value="1">Nữ</option>
                            </Field>
                        </div>
                        <div className="row mt-4  ">
                            <div className="col-md-6 form-group">
                                <Field
                                    type="text"
                                    name="cmnd"
                                    className="form-control"
                                    placeholder="Số CMND"

                                />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Số điện thoại"

                                />
                            </div>
                        </div>
                        <div className="row mt-3  ">
                            <div className="col-md-6 form-group">
                                <Field
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"

                                />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <Field
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="Địa chỉ"

                                />
                            </div>
                        </div>
                        <div className="text-center m-auto">
                            <button type="submit" className=" btn btn-success ">
                                <b className="text-center">THÊM MỚI</b>
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div></Formik>

</>
    )
}