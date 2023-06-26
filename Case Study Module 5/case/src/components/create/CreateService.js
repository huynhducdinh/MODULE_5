import {NavAdmin} from "../NavAdmin";


export function CreateService() {

    return (
        <>
            {/*<NavAdmin/>*/}
            {/*<Formik initialValues={{*/}
            {/*    id: '',*/}
            {/*    name: '',*/}
            {/*    usableArea: '',*/}
            {/*    rentalCosts: '',*/}
            {/*    people: '',*/}
            {/*    type: '',*/}
            {/*    otherUtilities: '',*/}
            {/*    roomStandard: '',*/}
            {/*    numberFloors: '',*/}
            {/*    poolArea: '',*/}
            {/*    FreeserviceIncluded: ''*/}
            {/*}}*/}

            {/*        onSubmit={(values, {setSubmitting}) => {*/}
            {/*            setTimeout(() => {*/}
            {/*                setSubmitting(false)*/}

            {/*            })*/}
            {/*        }}*/}
            {/*>*/}
            <NavAdmin/>
                <div className="container mt-5 mb-5 ">
                    <div
                        className="row height d-flex justify-content-center align-items-center"
                        style={{zIndex: -1}}
                    >
                        <div className="col-md-6">
                            <div className="card px-5 py-4">
                                <div style={{textAlign: "center"}}>
                                    <h2 style={{color: "black"}}>Thêm mới dịch vụ</h2>
                                </div>
                                <form>
                                    <div className="row mt-2  ">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name=""
                                                className="form-control"
                                                placeholder="Tên dịch vụ"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Diện tích sử dụng"

                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-2  ">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name=""
                                                className="form-control"
                                                placeholder="Chi phí thuê"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Số người tối đa"

                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2 inputs">
                                        <select
                                            name="t"
                                            className="form-control"
                                            data-error="Please specify your need."
                                        >
                                            <option value="" selected="" disabled="">
                                                --Loại hình cho thuê--
                                            </option>
                                            <option>Year</option>
                                            <option>Month</option>
                                            <option>Day</option>
                                            <option>Hour</option>
                                        </select>
                                    </div>
                                    <div className="mt-4 ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Mô tả các tiện ích khác"
                                        />
                                    </div>
                                    <div className="row mt-2  ">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name=""
                                                className="form-control"
                                                placeholder="Tiêu chuẩn phòng"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Số tầng"

                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-2  ">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                name=""
                                                className="form-control"
                                                placeholder="Diện tích hồ bơi"

                                            />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name=""
                                                placeholder="Dịch vụ miễn phí đi kèm"

                                            />
                                        </div>
                                    </div>
                                    <div className="text-center m-auto">
                                        <button type="submit" className=" btn btn-success ">
                                            <b className="text-center">THÊM MỚI</b>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</Formik>*/}


        </>
    )

}