
import {NavAdmin} from "../NavAdmin";


export  function UpdateService() {

    return(
        <>
            <NavAdmin/>
            <div className="container mt-5 mb-5 ">
                <div
                    className="row height d-flex justify-content-center align-items-center"
                    style={{ zIndex: -1 }}
                >
                    <div className="col-md-6">
                        <div className="card px-5 py-4">
                            <div style={{ textAlign: "center" }}>
                                <h2 style={{ color: "black" }}>Chỉnh sửa dịch vụ</h2>
                            </div>
                            <form>
                                <div className="row mt-2  ">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Tên dịch vụ"

                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="a"
                                            placeholder="Diện tích sử dụng"

                                        />
                                    </div>
                                </div>
                                <div className="row mt-2  ">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="b"
                                            className="form-control"
                                            placeholder="Chi phí thuê"

                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="c"
                                            placeholder="Số người tối đa"

                                        />
                                    </div>
                                </div>
                                <div className="mt-2 inputs">
                                    <select
                                        name="d"
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

                                        name="e"
                                        placeholder="Mô tả các tiện ích khác"
                                    />
                                </div>
                                <div className="row mt-2  ">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="f"
                                            className="form-control"
                                            placeholder="Tiêu chuẩn phòng"

                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="g"
                                            placeholder="Số tầng"

                                        />
                                    </div>
                                </div>
                                <div className="row mt-2  ">
                                    <div className="col-md-6 form-group">
                                        <input
                                            type="text"
                                            name="h"
                                            className="form-control"
                                            placeholder="Diện tích hồ bơi"

                                        />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="f"
                                            placeholder="Dịch vụ miễn phí đi kèm"

                                        />
                                    </div>
                                </div>
                                <div className="text-center m-auto">
                                    <button type="submit" className=" btn btn-success ">
                                        <b className="text-center">CHỈNH SỬA</b>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}