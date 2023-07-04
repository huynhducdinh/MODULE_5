import axios from "axios";

export const getAllProduct = async () =>{
    const res = await axios.get("http://localhost:8080/products")
    return res.data;
}
export const getAllTypeProduct = async () =>{
    const res = await axios.get("http://localhost:8080/categorys")
    return res.data
}

export const createProduct = async (product) => {
    console.log(product)
    await axios.post("http://localhost:8080/products/create" , product)
}

export const searchByNameAndType = async (name , idType) => {
    const res = await axios.get(`http://localhost:8080/products?name_like=${name}&idType_like=${idType}&_sort=price&_oder=desc`)
    return res.data
}

export const deleteProduct = async (id) =>{
    await axios.delete(`http://localhost:8080/products/delete/${id}`)
}
export const findById = async (id) => {
    const res = await axios.get(`http://localhost:8080/products/productId/${id}`)
    return res.data;
}
export const updateProduct = async (product) => {
    await axios.put("http://localhost:8080/products/update" , product)
}
