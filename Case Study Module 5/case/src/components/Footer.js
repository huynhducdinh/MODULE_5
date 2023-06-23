export  function Footer(){
    return(


        <>
            <div
                className="justify-content-center text-center"
                style={{ marginTop: "4%" }}
            >
                <h1 style={{ color: "#046056" }}>DỊCH VỤ &amp; CƠ SỞ VẬT CHẤT</h1>
                <p>
                    {" "}
                    Có nhiều những gói nghỉ dưỡng phù hợp cho cả những kỳ nghỉ ngắn hay dài
                    ngày
                </p>
                <br />
            </div>
            <div className="d-flex align-items-center py-5 mh-100">
                <div className="">
                    <div id="mycarousel" className="carousel  slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            {/*<li*/}
                            {/*    data-bs-target="#mycarousel"*/}
                            {/*    data-bs-slide-to="0"*/}
                            {/*    className="active"*/}
                            {/*/>*/}
                            {/*<li data-bs-target="#mycarousel" data-bs-slide-to="1" />*/}
                            {/*<li data-bs-target="#mycarousel" data-bs-slide-to="2" />*/}
                        </ol>
                        <div className="carousel-inner justify-content-center slide carousel ">
                            <div className="carousel-item active slide carousel ">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                            <h4
                                                className="review text-center"
                                                style={{ color: "#046056" }}
                                            >
                                                DỊCH VỤ ĐÓN TIỄN SÂN BAY
                                            </h4>
                                            <div className="name d-flex align-items-center justify-content-center">
                                                <span className="fas fa-minus pe-1" />
                                            </div>
                                            <p className="job text-center" style={{ color: "black" }}>
                                                Tận hưởng những sự thoải mái, tiện lợi và hoàn hảo ngay từ
                                                những giây phút đầu tiên của kỳ nghỉ khi hạ cánh tại Sân bay
                                                Quốc tế Đà Nẵng với dịch đón tiễn sân bay chuyên nghiệp,
                                                thân thiện và sang trọng từ Khu nghỉ. Có nhiều lựa chọn phù
                                                hợp với nhu cầu di chuyển từ một người cho đến cả gia đình
                                                hay du lịch nhóm. Vui lòng liên hệ: +84 236 3847 333/ +84
                                                236 3847 888 để đặt dịch vụ.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <img
                                            src="https://furamavietnam.com/wp-content/uploads/2018/10/FRD_Airport_Staff_Service_-2.jpg"
                                            className="d-block w-100" height={400}
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                            <h4
                                                className="review text-center"
                                                style={{ color: "#046056" }}
                                            >
                                                DỊCH VỤ VĂN PHÒNG
                                            </h4>
                                            <div className="name d-flex align-items-center justify-content-center">
                                                <span className="fas fa-minus pe-1" />
                                            </div>
                                            <p className="job text-center" style={{ color: "black" }}>
                                                Nằm tại sảnh đón khách của Khu nghỉ mát Furama Resort Đà
                                                Nẵng, Trung Tâm Dịch Vụ Văn Phòng cung cấp nhiều dịch vụ và
                                                thiết bị văn phòng cũng như nhu cầu thông tin cần thiết cho
                                                Qúy khách bao gồm in ấn, quét và sao lưu tài liệu, thư tín,
                                                chuyển phát, fax cũng như nhiều dịch vụ trợ giúp khác bao
                                                gồm khu vực máy tính để bàn kết nối internet miễn phí. Gọi
                                                hội đàm, hội thảo kết nối video có thể được sắp xếp dựa trên
                                                yêu cầu.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <img
                                            src="https://furamavietnam.com/wp-content/uploads/2018/10/DSC_5851.jpg"
                                            className="d-block w-100" height={400}
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                            <h4
                                                className="review text-center"
                                                style={{ color: "#046056" }}
                                            >
                                                XE BUÝT DỊCH VỤ THEO LỊCH TRÌNH CÓ SẴN
                                            </h4>
                                            <div className="name d-flex align-items-center justify-content-center">
                                                <span className="fas fa-minus pe-1" />
                                            </div>
                                            <p className="job text-center">
                                                Khu nghỉ có dịch vụ xe đưa đón tham quan phố cổ Hội An theo
                                                lịch trình hàng ngày với xe buýt 29 chỗ thoải mái, thuận
                                                tiện và an toàn.
                                            </p>
                                            <p>Đặt dịch vụ, Vui lòng liên hệ: </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <img
                                            src="https://furamavietnam.com/wp-content/uploads/2018/10/Shuttle_Bus_Furama_Danang-1.jpg"
                                            className="d-block w-100" height={400}
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/*modal*/}
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Huỷ
                        </button>
                        <button type="button" className="btn btn-primary">
                            Xoá
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-light">
                        <h3 className="mb-1" style={{ color: "#046056" }}>
                            Hướng Dẫn Di Chuyển
                        </h3>
                        <div className="d-flex flex-column flex-md-row flex-lg-column">
                            <p>
                                Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
                                những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái
                                xe ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công nhận:
                            </p>
                            <a href="#" className="btn btn-filter-invert btn-filter">
              <span style={{ fontSize: 25, fontWeight: "bold" }}>
                Xem Trên Bản Đồ
              </span>
                            </a>
                        </div>
                        <div className="mt-3 mt-md-1 mt-lg-3" />
                        <h4 className="mb-1 mb-md-2" style={{ color: "#046056" }}>
                            Địa Điểm
                        </h4>
                        <table className="place-table">
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Cố đô Huế</td>
                                <td className="text-right">
                                    <span>2 tiếng</span>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Phố cổ Hội An</td>
                                <td className="text-right">
                                    <span>30 phút</span>
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Thánh địa Mỹ Sơn</td>
                                <td className="text-right">
                                    <span>90 phút</span>
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Động Phong Nha</td>
                                <td className="text-right">
                                    <span>3 tiếng</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-7 ml-lg-auto d-flex flex-column position-static">
                        <div className="row">
                            <div className="col-sm col-lg-5">
                                <div id="nav_menu-1" className="footer-widget4  widget_nav_menu">
                                    <div className="menu-footer-menu-vi-container">
                                        <ul id="menu-footer-menu-vi" className="menu">
                                            <li
                                                id="menu-item-6855"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6855"
                                            >
                                                <a href="https://furamavietnam.com/vi/furama-resort-danang-rack-rate/">
                                                    Giá Công Bố
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-6854"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6854"
                                            >
                                                <a href="https://furamavietnam.com/vi/lifestyle-blog/">
                                                    Lifestyle Blog
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-6856"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6856"
                                            >
                                                <a href="https://furamavietnam.com/vi/work-with-us/">
                                                    Tuyển Dụng
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-6857"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6857"
                                            >
                                                <a href="https://furamavietnam.com/vi/contact/">
                                                    Liên Hệ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="text-5" className="footer-widget4  widget_text">
                                    <div className="textwidget" />
                                </div>
                            </div>
                            <div className="col-sm mt-2 mt-sm-0">
                                <h4 style={{ color: "#046056" }}>Liên hệ </h4>
                                <ul className="icn-list">
                                    <li>
                                        <i className="icon-placeholder" />
                                        <span style={{ color: "black", fontSize: 12 }}>
                    103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son
                    District, Danang City, Vietnam
                  </span>
                                        <br
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: "black",
                                                fontSize: 12
                                            }}
                                        />
                                        <span style={{ color: "black", fontSize: 12 }}>
                    Tel.: 84-236-3847 333/888 *
                  </span>
                                        <span style={{ color: "black", fontSize: 12 }}>
                    Fax: 84-236-3847 666
                  </span>
                                        <br
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: "black",
                                                fontSize: 12
                                            }}
                                        />
                                        <span style={{ color: "black", fontSize: 12 }}>
                    Email:&nbsp;
                  </span>
                                        <a
                                            className="link"
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: "black",
                                                fontSize: 12
                                            }}
                                            href="mailto:reservation@furamavietnam.com"
                                        >
                                            reservation@furamavietnam.com
                                        </a>
                                        <span style={{ color: "black", fontSize: 12 }}>
                    &nbsp;*&nbsp;
                  </span>
                                        <a
                                            className="link"
                                            style={{
                                                margin: 0,
                                                padding: 0,
                                                color: "black",
                                                fontSize: 12
                                            }}
                                            href="https://www.furamavietnam.com/undefined/"
                                        >
                                            www.furamavietnam.com
                                        </a>
                                        <span style={{ color: "black", fontSize: 12 }}>
                    GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,
                    Sabre-GD 032771, Worldspan- GD DADFU
                  </span>
                                        <hr />
                                        <a
                                            href="https://www.facebook.com/furamaresort/"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <img
                                                style={{ width: 32, height: 32, float: "left" }}
                                                src="https://furamavietnam.com/wp-content/uploads/2019/06/incon-Facbook-1.png"
                                                alt=""
                                                width={32}
                                                height={32}
                                            />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/furama_resort_danang/?hl=vi"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <img
                                                style={{ width: 40, height: 32, float: "left" }}
                                                src="https://furamavietnam.com/wp-content/uploads/2019/06/social-ins.png"
                                                alt=""
                                                width={40}
                                                height={32}
                                            />
                                        </a>
                                        <a
                                            href="https://www.youtube.com/user/furamaresortvietnam/featured"
                                            target="_blank"
                                            rel="noopener"
                                        >
                                            <img
                                                style={{ width: 40, height: 32, float: "left" }}
                                                src="https://furamavietnam.com/wp-content/uploads/2021/10/social-youtube.png"
                                                alt=""
                                                width={40}
                                                height={32}
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-5 mb-1 mt-lg-auto mb-md-0 align-items-center">
                            <div className="col-sm-auto col-lg-12 col-xl-auto">
                                <div className="footer-copyright text-left">
                                    <img
                                        src="https://furamavietnam.com/wp-content/uploads/2023/03/Ariyana-Tourism-Complex-02-500x131.png"
                                        alt="Ariyana Tourism Complex"
                                        width="500px;"
                                    />
                                    <div className="clearfix d-md-none" />
                                    <small style={{ color: "black", fontSize: "1em" }}>
                                        © 2018 Furama Resort Danang.
                                    </small>
                                </div>
                            </div>
                        </div>
                        {/* map */}
                        <div id="googleMapFooter" className="google-map" />
                        {/* /map */}
                        {/* Google map */}
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}