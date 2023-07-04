import {useEffect, useState} from "react";
import * as productService from '../services/ProductService'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function ListProduct() {
    const [product, setProduct] = useState([])
    const [typeProduct, setProductType] = useState([])
    const getAll = async () => {
        const res = await productService.findAll()
        setProduct(res)
    }
    const findAllType = async () => {
        const res = await productService.findAllType()
        setProductType(res)

    }
    useEffect(() => {
        getAll()
        findAllType()
    }, [])

    return (
        <>
            <nav className="navbar navbar-light bg-light " style={{position: "sticky", top: 0, left: 0, right: 0}}>
                <div className="container-fluid">
                    <div style={{display: "flex", margin: "0%", position: "relative"}}>
                        <div>
                            <Link to="/create" className="btn btn-outline-success"
                                  style={{height: "6vh", fontSize: "1.2em"}}> Thêm mới</Link>
                        </div>
                    </div>
                    <h1 className="text-center">...</h1>
                    <Formik initialValues={{
                        name: '',
                        typeId: ''
                    }} onSubmit={async (values) => {
                        const search = async () => {
                            const result = await productService.searchProduct(values.name, values.typeId)
                            setProduct(result.data)
                        }
                        search()
                    }}>
                        <Form className="d-flex">
                            <Field
                                style={{width: "15vw"}}
                                className="form-control me-2"
                                type="search"
                                name="name"
                                placeholder="Tim kiếm"
                                aria-label="Search"
                            />
                            <Field
                                style={{width: "15vw"}}
                                className="form-control me-2"
                                name="typeId"
                                as="select"
                            >
                                <option value={""}>--Chon loai--</option>

                            </Field>
                            <button className="btn btn-outline-primary" type="submit"
                                    style={{width: "4vw", height: "6vh", fontSize: "1.2em"}}>
                                <i className="fa-solid fa-magnifying-glass r"></i>
                            </button>
                        </Form>
                    </Formik>
                </div>
            </nav>
            <table className="table table-hover table-striped"
                   style={{marginTop: "3%", width: "80%", marginLeft: "10%", border: "1px solid black"}}
            >
                <thead>
                <tr>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Id</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Name</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Price</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Type</th>
                    <th className="text-center" style={{fontSize: "1.2em"}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {product.map((list, index) => (
                    <tr key={index}>
                        <td className="text-center">{list.id}</td>
                        <td className="text-center">{list.name}</td>
                        <td className="text-center">{list.price}</td>
                        <td className="text-center">{typeProduct.find(typeProduct => typeProduct.typeId === list.typeId)?.nameType}</td>
                        <td className="text-center" colSpan="">
                            <a className="btn btn-outline-danger"
                               style=
                                   {{margin: "1%"}}
                            ><i className="fa-solid fa-trash"></i></a>
                            <Link to={`/update/${list.id}`} className="btn btn-outline-warning"
                                  style={{margin: "1%"}}
                            ><i className="fa-solid fa-pen-to-square"></i></Link>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </>
    )

}