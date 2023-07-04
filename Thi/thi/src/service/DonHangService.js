import axios from "axios";

export const findAllDonHang = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/orders')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const deleteOrder = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/delete/` + id)
    } catch (e) {
        console.log(e)
    }

}
export const searchDonHang = async (id, values) => {
    try {
        const res = await axios.get(`http://localhost:8080/donHang?idSanPham_like=${id}&ngayMua_like=${values}&_sort=id&_order=desc`)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllSanPham = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/products')
        return res.data
    } catch (e) {
        console.log(e)
    }
}

export const saveDonHang = async (order) => {
    try {
        // const res =
            await axios.post('http://localhost:8080/api/create', order)
        // return res.data
    } catch (e) {
        console.log(e)
    }

}