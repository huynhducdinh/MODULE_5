import {NavAdmin} from "../NavAdmin";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import * as contractService from '../serive/ContractSrevice';
import * as serviceList from '../serive/Service';
import * as customerList from '../serive/CustomerService';
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import {updateContract} from "../serive/ContractSrevice";

export function UpdateContract() {
    const navigate = useNavigate();
    const pram = useParams()
    const [contract, setContract] = useState()
    const [customerContract, setCustomer] = useState([])
    const [serviceContract, setService] = useState([])


    useEffect(() => {
        const findByIdContract = async () => {
            const res = await contractService.findById(pram.id)
            setContract(res)
        }
        findByIdContract()
    }, [pram.id])

    const listCustomer = async () => {
        const res = await customerList.findAll();
        setCustomer(res)
    }
    const listService = async () => {
        const res = await serviceList.findAll();
        setService(res)
    }
    useEffect(() => {
        listCustomer();
        listService()
    }, [])
    if (!contract) {
        return null
    }
    return (
        <>
            <NavAdmin/>
            <Formik initialValues={{
                numberService: contract?.numberService,
                startDay: contract?.startDay,
                endDay: contract?.endDay,
                deposit: contract?.deposit,
                totalMoney: contract?.totalMoney,
                customerId: contract?.customerId,
                serviceId: contract?.serviceId

            }}
                    validationSchema={Yup.object({
                        numberService: Yup.string()
                            .required('Không được để trống')
                            .matches(/^MHD-\d+$/, 'Nhập đúng mã hợp đồng theo định dạng vd (MHD-0012)'),
                        startDay: Yup.date()
                            .required('Không được để trống'),
                        endDay: Yup.date()
                            .required('Không được để trống'),
                        deposit: Yup.number()
                            .required('Không được để trống')
                            .min(100, 'Lớn hơn 100'),
                        totalMoney: Yup.number()
                            .required('Không được để trống')
                            .min(0, 'Lớn hơn 0'),
                        customerId: Yup.string()
                            .required('Không được để trống')
                            .min(1),
                        serviceId: Yup.string()
                            .required('Không được để trống'),


                    })}
                    onSubmit={async (values) => {
                        const updateContract = async () => {
                            await contractService.updateContract({...values, customerId: +values.customerId})
                            console.log(values)
                            Swal.fire({
                                icon: "success",
                                timer: "2000",
                                title: "Chỉnh sửa thành công"
                            })
                            navigate("/listRentalContract")
                        }
                        updateContract()
                    }}>
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Thêm mới hợp đồng thuê</h2>
                                </div>
                                <Form>
                                    <div className="mt-4 ">
                                        <span/>
                                        <Field
                                            name="customerId"
                                            className="form-control"
                                            as="select"
                                        >
                                            {customerContract.map((list) => (
                                                <option key={list.id} value={list.id}>
                                                    {list.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="customerId" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <span/>
                                        <Field
                                            name="serviceId"
                                            className="form-control"
                                            as="select"

                                        >{serviceContract.map((list) => (
                                            <option key={list.id} value={list.id}>
                                                {list.name}
                                            </option>
                                        ))}
                                        </Field>
                                        <ErrorMessage name="serviceId" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="numberService"
                                            placeholder="Số hợp đồng vd (MHD-0012)"
                                        />
                                        <ErrorMessage name="numberService" component="span" className="error-r"/>
                                    </div>
                                    <div className="mt-4 ">
                                        <Field
                                            type="date"
                                            className="form-control"
                                            id=""
                                            name="startDay"
                                            placeholder="Ngày bắt đầu"
                                        />
                                        <ErrorMessage name="startDay" component="span" className="error-r"/>

                                    </div>
                                    <div className=" mt-4  ">
                                        <div className=" form-group">
                                            <Field
                                                type="date"
                                                name="endDay"
                                                className="form-control"
                                                placeholder="Ngày kết thúc"
                                            />
                                            <ErrorMessage name="endDay" component="span" className="error-r"/>

                                        </div>
                                        <div className="  mt-4 ">
                                            <Field
                                                type="number"
                                                className="form-control"
                                                name="deposit"
                                                placeholder="Số tiền cọc trước"
                                            />
                                            <ErrorMessage name="deposit" component="span"
                                                          className="error-r"/>

                                        </div>
                                    </div>
                                    <div className=" mt-4  ">
                                        <div className=" form-group">
                                            <Field
                                                type="number"
                                                name="totalMoney"
                                                className="form-control"
                                                placeholder="Tổng số tiền thanh toán"
                                            />
                                            <ErrorMessage name="totalMoney" component="span"
                                                          className="error-r"/>

                                        </div>
                                    </div>
                                    <div className="text-center m-auto">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">THÊM MỚI HỢP ĐỒNG THUÊ</b>
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