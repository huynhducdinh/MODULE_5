import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useEffect, useState} from "react";
import * as service from '../components/serive/Service';
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

export function Card() {
    const [card, setCard] = useState([])
    useEffect(() => {
        findAllCard()
    },[])
    const findAllCard = async () => {
        const result = await service.findAllService();
        setCard(result)
    }
    const deleteService =async (id) => {
        await service.deleteService(id)
        Swal.fire({
            icon:"success",
            title:"Xoá thành công",
            timer:"2000"
        })
        findAllCard()
    }
    const deleteCard = async (id, name) => {
        Swal.fire({
            icon:"warning",
            title:`Bạn có muốn xoá cái tên <span>${name}</span> dịch vụ này không ?`,
            showCancelButton:true,
            confirmButtonColor:"#d33",
            confirmButtonText:"Yes",
            cancelButtonColor:"#817878",
        })
            .then((res)=>{
                if (res.isConfirmed){
                    deleteService(id)
                }
            })

    }
    return (
        <>
            <div className="container bg-white">
                <div className="row">
                    {card.map((list) => (
                        <div
                            className="col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4">
                            <div className="product card">
                                <img className="img-fluid "  src={list.image}/>
                                <div className="text-center">
                                    <div className="">
                                        <h5
                                            style={{fontWeight: "bold",fontFamily:"Serif", marginTop: "-4%", color: "black", width:"350px",height:"75px",marginLeft:"5%"}}
                                            className="title pt-4 pb-1">{list.name} </h5>
                                    </div>
                                    <p className=""
                                       style={{marginLeft: "5%", marginTop: "-2%"}}
                                    >Diện tích phòng: {list.acreage} m <sup>2</sup></p>
                                </div>
                                <div className="d-flex justify-content-center"
                                     style={{marginTop: "1%", marginBottom: "2%", borderRadius: "30px"}}>
                                    <Link to={`/updateService/${list.id}`} className="btn"
                                       style={{
                                           backgroundColor: "#046056",
                                           borderTop: "#046056",
                                           color: "white",
                                           marginLeft: "-5%",
                                           width: "100px"
                                       }}>Sửa</Link>
                                    <a onClick={()=>deleteCard(list.id,list.name)} className="btn btn-danger"
                                       style={{marginLeft: "5%", width: "100px",color:"white"}}
                                      >Xoá</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <nav aria-label=" Page navigation example d-flex justify-content-center ">
                <ul className="pagination d-flex justify-content-center ">
                    <li className="page-item "><a className="page-link" href="#"><i
                        className="fa-solid fa-arrow-left"></i></a>
                    </li>
                    <li className="page-item "><a className="page-link " href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link" href="#"><i
                        className="fa-solid fa-arrow-right"></i></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}