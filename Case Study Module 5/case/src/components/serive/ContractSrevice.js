import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/rentalContract?_sort=id&_order=desc')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (value) => {
    try {
        const res = await axios.post('http://localhost:8080/rentalContract', value)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) => {
    try {
        const res = await axios.get('http://localhost:8080/rentalContract/' + id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export  const updateContract = async (value) => {
    try {
        await axios.put('http://localhost:8080/customer/'+value.id,value)
    }catch (e) {
        console.log(e)
    }

}