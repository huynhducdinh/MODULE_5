import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useEffect, useState} from "react";
import * as service from '../components/serive/Service'

export function Card() {
    const [card, setCard] = useState([])
    useEffect(() => {
        const findAllCard = async () => {
            const result = await service.findAll();
            setCard(result)
        }
        findAllCard()
    },[])
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
                                    <a href="" className="btn"
                                       style={{
                                           backgroundColor: "#046056",
                                           borderTop: "#046056",
                                           color: "white",
                                           marginLeft: "-5%",
                                           width: "100px"
                                       }}>Sửa</a>
                                    <a href="" className="btn btn-danger"
                                       style={{marginLeft: "5%", width: "100px"}}
                                       data-bs-toggle="modal" data-bs-target="#exampleModal">Xoá</a>
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