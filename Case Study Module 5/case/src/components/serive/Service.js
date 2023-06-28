import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/service')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        const res = await axios.get('http://localhost:8080/typeService')
        return res.data
    }catch (e) {
        console.log(e)
    }
}
export const save = async (service) => {
    try {
        const result = await axios.post('http://localhost:8080/service', service)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export  const deleteService = async (id)=>{
    try {
        await  axios.delete('http://localhost:8080/service/'+id)
    }catch (e) {
        console.log(e)
    }
}