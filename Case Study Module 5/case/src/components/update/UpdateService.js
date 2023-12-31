import {NavAdmin} from "../NavAdmin";
import * as serviceService from "../serive/Service";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";


export function UpdateService() {
    const [service, setService] = useState();
    const [type, setType] = useState();
    const [typeService, setTypeService] = useState([]);
    const param = useParams();
    const navigate = useNavigate();


    useEffect(()=>{
        const getById = async () => {
            const res = await serviceService.findById(param.id)
            console.log(res)
            console.log(res.typeServiceId)
            setService(res)
            setType(res.typeServiceId)

        }
        getById()
    }, [param.id])


    useEffect(() => {
        const findAllTypeService = async () => {
            const res = await serviceService.findAllType();
            setTypeService(res)

        }
        findAllTypeService()
    },[])

    if (!service&& !type) {
        return null
    }
    return (
        <>
            <NavAdmin/>
            <Formik initialValues={{
                id: service ?.id,
                typeServiceId: service ?.typeServiceId,
                name: service ?.name,
                acreage: service ?.rentalCosts,
                rentalCosts: service ?.rentalCosts,
                maximumNumberPeople:service ?.maximumNumberPeople,
                typeRental: service ?.typeRental,
                descriptionOtherUtilities: service ?.descriptionOtherUtilities,
                roomStandard: service ?.roomStandard,
                numberFloors: service ?.numberFloors,
                poolArea: service ?.poolArea,
                freeServiceIncluded: service ?.freeServiceIncluded,
                image: service ?.image
            }}
                    validationSchema={Yup.object({
                        // typeServiceId:Yup.number()
                        //     .required('Không được để trống'),
                        // name:Yup.string()
                        //     .required('Không được để trống')
                        //     .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,'Không được là số'),
                        // acreage:Yup.number()
                        //     .required('Không được để trống')
                        //     .min(0,'Lớn hơn 0'),
                        // rentalCosts:Yup.number()
                        //     .required('Không được để trống'),
                        // maximumNumberPeople:Yup.number()
                        //     .required('Không được để trống')
                        //     .min(0,'Lớn hơn 0'),
                        // typeRental:Yup.string()
                        //     .required('Không được để trống'),
                        // descriptionOtherUtilities:Yup.string()
                        //     .required('Không được để trống'),
                        // roomStandard:Yup.string()
                        //     .required('Không được để trống'),
                        // numberFloors:Yup.number()
                        //     .required('Không được để trống')
                        //     .min(0,'Lớn hơn 0'),
                        // poolArea:Yup.number()
                        //     .required('Không được để trống')
                        //     .min(0,'Lớn hơn 0'),
                        // freeServiceIncluded:Yup.string()
                        //     .required('Không được để trống'),
                        // image:Yup.string()
                        //     .required('Không được để trống')
                    })}
                    onSubmit={ async (values, {setSubmitting}) => {
                        const updateServices = async () => {
                            setSubmitting(false)
                            await serviceService.updateService({...values,typeServiceId:+values.typeServiceId})
                            console.log(updateServices)
                            Swal.fire({
                                icon: "success",
                                title: "Chỉnh sửa thành công",
                                timer: "2000"
                            })
                            navigate("/listFacilityService")
                        }
                        updateServices()
                    }}>
                <div className="container mt-5 mb-5 ">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Chỉnh sửa dịch vụ</h2>
                                </div>
                                <Form>
                                    <div className=" mt-4 inputs">
                                        <Field
                                            onClick={(e) => setType(e.target.value)}
                                            as="select"
                                            name="typeServiceId"
                                            className="form-control"
                                        >
                                            {typeService.map((listType) => (
                                                <option key={listType.id} value={listType.id}>{listType.nameTypeService}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="typeServiceId" component="span" className="error-r"/>
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
                                            type="number"
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
                                            <ErrorMessage name="maximumNumberPeople" component="span"
                                                          className="error-r"/>

                                        </div>
                                    </div>
                                    <div className="mt-2 inputs">
                                        <Field
                                            name="typeRental"
                                            className="form-control"
                                            as="select"
                                        >
                                            <option value="">
                                                --Loại hình cho thuê--
                                            </option>
                                            <option value="Year">Year</option>
                                            <option value="Month">Month</option>
                                            <option value="Day">Day</option>
                                            <option value="Hour">Hour</option>
                                        </Field>
                                        <ErrorMessage name="typeRental" component="span" className="error-r"/>

                                    </div>
                                    {type !== 2 ?
                                        <div className="mt-4 ">
                                            <Field
                                                type="text"
                                                className="form-control"

                                                name="descriptionOtherUtilities"
                                                placeholder="Mô tả các tiện ích khác(Villa,House)"
                                            />
                                            <ErrorMessage name="descriptionOtherUtilities" component="span"
                                                          className="error-r"/>
                                        </div>
                                        : ''
                                    }
                                    <div className="row mt-4 ">
                                        {type !== 2 ?
                                            <div className="col-md-6 form-group">
                                                <Field
                                                    type="text"
                                                    name="roomStandard"
                                                    className="form-control"
                                                    placeholder="Tiêu chuẩn phòng(Villa,House)"
                                                />
                                                <ErrorMessage name="roomStandard" component="span" className="error-r"/>
                                            </div>
                                            : ''
                                        }
                                        {type !== 2 ?
                                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                                <Field
                                                    type="number"
                                                    className="form-control"
                                                    name="numberFloors"
                                                    placeholder="Số tầng(Villa,House)"
                                                />
                                                <ErrorMessage name="numberFloors" component="span" className="error-r"/>

                                            </div>
                                            : ''
                                        }
                                    </div>
                                    <div className="row mt-2">
                                        {type === 1 ?
                                            <div className="col-md-12 form-group">
                                                <Field
                                                    type="text"
                                                    name="poolArea"
                                                    className="form-control"
                                                    placeholder="Diện tích hồ bơi"
                                                />
                                                <ErrorMessage name="poolArea" component="span" className="error-r"/>
                                            </div>
                                            : ''
                                        }
                                        {type === 2 ?
                                            <div className="col-md-12 form-group mt-2 mt-md-0">
                                                <Field
                                                    type="text"
                                                    className="form-control"
                                                    name="freeServiceIncluded"
                                                    placeholder="Dịch vụ miễn phí đi kèm"
                                                />
                                                <ErrorMessage name="freeServiceIncluded" component="span"
                                                              className="error-r"/>
                                            </div>
                                            : ''
                                        }
                                    </div>
                                    <div className=" mt-2 inputs">
                                        <Field
                                            type="text"
                                            className="form-control"
                                            name="image"
                                            placeholder="Link Hình ảnh"
                                        />
                                        <ErrorMessage name="image" component="span" className="error-r"/>

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