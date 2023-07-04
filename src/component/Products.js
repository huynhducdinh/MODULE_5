import React, {useEffect, useState} from "react";
import {deleteProduct, getAllProduct, getAllTypeProduct, searchByNameAndType} from "../service/ProductService";
import {NavLink, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";

export function Products() {
    const param = useParams()
    const [listProduct, setListProduct] = useState([])
    const [listTypeProduct, setListTypeProduct] = useState([])
    const [idDelete, setIdDelete] = useState(null)
    const [nameDelete, setNameDelete] = useState(null)
    const displayListProduct = async () => {
        const res = await getAllProduct();
        setListProduct(res);
    }
    const displayListTypeProduct = async () => {
        const res = await getAllTypeProduct();
        setListTypeProduct(res);
        console.log(res)
    }

    const handConfirm = async (id, name) => {
        setIdDelete(id)
        setNameDelete(name)
    }

    const handleDelete = async (id) => {
        await deleteProduct(id)
        await displayListProduct()
        toast("Xóa thành công")
    }
    useEffect(() => {
        displayListProduct()
        displayListTypeProduct()
    }, [])


    return (
        <>

            <div className="container">
                <Formik initialValues={
                    {
                        name: "",
                        idType: ""
                    }
                }
                        onSubmit={(values => {
                            const search = async () => {
                                const res = await searchByNameAndType(values.name, values.idType);
                                setListProduct(res);
                            }
                            search()
                        })}>
                    <Form style={{float: "right", marginTop: "69px"}}>
                        <Field type="text" name="name" placeholder="Mời nhập tên"/>
                        <Field as="select"
                               name="idType" id="2"
                               style={{height: "30px"}}
                        >
                            <option>Chọn loại sản phẩm</option>
                            {
                                listTypeProduct?.map((value =>
                                        <>

                                            <option value={value.id}>{value.nameCategory}</option>
                                        </>
                                ))
                            }
                        </Field>
                        <button type="submit" className="btn btn-secondary">Tìm</button>
                    </Form>
                </Formik>
                <h1>List Product</h1>
                <NavLink className="btn btn-secondary" to="/create-product">Tạo sản phẩm mới</NavLink>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Thể loại</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Ngày nhập</th>
                        <th scope="col">Khác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        listProduct?.map((value) => {
                            return (
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>{value.codeProduct}</td>
                                    <td>{value.name}</td>
                                    <td>{listTypeProduct.find(lt => lt.id === value.category.id)?.nameCategory}</td>
                                    <td>{value.price}</td>
                                    <td>{value.amount}</td>
                                    <td>{value.date}</td>
                                    <td>
                                        <NavLink to="/update-product" className="btn btn-secondary">Chỉnh sửa
                                        </NavLink>
                                        <button className="btn btn-danger"
                                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                                onClick={() => handConfirm(value.id, value.name)}>Xóa
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa <span>{nameDelete}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button data-bs-dismiss="modal" onClick={() => handleDelete(idDelete)} className="btn btn-danger">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}