import axios from "axios";

export const findAll = async () => {
    try {
        const res = await axios.get('http://localhost:8080/product?_sort=id&_order=desc')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const searchProduct = async (value,id) => {
    try {
        const res = await axios.get(`http://localhost:8080/product?name_like=${value}&typeId_like=${id}&_sort=id&_order=desc`)
        return res
    } catch (e) {
        console.log(e)
    }

}
export const findAllType = async () => {
    try {
        const res = await axios.get('http://localhost:8080/typeProduct')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (product) => {
    try {
        const res = await axios.post('http://localhost:8080/product', product)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get('http://localhost:8080/product/' + id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const updateProduct = async (product) => {
    try {
        await axios.put('http://localhost:8080/product/' + product.id, product)
    } catch (e) {
        console.log(e)
    }

}