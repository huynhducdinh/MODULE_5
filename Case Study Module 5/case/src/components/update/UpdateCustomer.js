
import {NavAdmin} from "../NavAdmin";

export  function UpdateCustomer() {
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
                        <h2 style={{ color: "black" }}>Chỉnh sửa danh sách khách hàng</h2>
                    </div>
                    <form>
                        <div className="mt-4 ">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Tên khách hàng"
                            />
                        </div>
                        <div className="mt-4 ">
                            <select
                                name="need"
                                className="form-control"
                                required="required"
                                data-error=""
                            >
                                <option value="" selected="" disabled="">
                                    --Chọn loại khách hàng--
                                </option>
                                <option>Diamond</option>
                                <option>Platinium</option>
                                <option>Gold</option>
                                <option>Silver</option>
                                <option>Member</option>
                            </select>
                        </div>
                        <div className="mt-4 ">
                            <input
                                type="date"
                                className="form-control"
                                id=""
                                name="birthday"
                                placeholder="Ngày tháng năm sinh"
                                min="1920-01-01"
                            />
                        </div>
                        <div className="mt-4 ">
                            <select
                                name="need"
                                className="form-control"
                                required="required"
                                data-error="Please specify your need."
                            >
                                <option value="" selected="" disabled="">
                                    --Chọn giới tính--
                                </option>
                                <option>Nam</option>
                                <option>Nữ</option>
                            </select>
                        </div>
                        <div className="row mt-4  ">
                            <div className="col-md-6 form-group">
                                <input
                                    type="text"
                                    name=""
                                    className="form-control"
                                    placeholder="Số CMND"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name=""
                                    placeholder="Số điện thoại"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="row mt-4  ">
                            <div className="col-md-6 form-group">
                                <input
                                    type="text"
                                    name=""
                                    className="form-control"
                                    placeholder="Email"
                                    required=""
                                />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input
                                    type="email"
                                    className="form-control"
                                    name=""
                                    placeholder="Địa chỉ"
                                    required=""
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