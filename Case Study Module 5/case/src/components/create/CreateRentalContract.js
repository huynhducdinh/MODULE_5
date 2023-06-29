
import {NavAdmin} from "../NavAdmin";

export function CreateRentalContract() {
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
                                <h2 style={{ color: "black" }}>Thêm mới hợp đồng thuê</h2>
                            </div>
                            <form>
                                <div className="mt-4 ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name=""
                                        placeholder="Số hợp đồng"
                                    />
                                </div>
                                <div className="mt-4 ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        name="birthday"
                                        placeholder="Ngày bắt đầu"
                                    />
                                </div>
                                <div className=" mt-4  ">
                                    <div className=" form-group">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            placeholder="Ngày kết thúc"

                                        />
                                    </div>
                                    <div className="  mt-4 ">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name=""
                                            placeholder="Số tiền cọc trước"
                                        />
                                    </div>
                                </div>
                                <div className=" mt-4  ">
                                    <div className=" form-group">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            placeholder="Tổng số tiền thanh toán."
                                        />
                                    </div>
                                </div>
                                <div className="text-center m-auto">
                                    <button type="submit" className=" btn btn-success ">
                                        <b className="text-center">THÊM MỚI HỢP ĐỒNG THUÊ</b>
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