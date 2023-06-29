import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/service?_sort=id&_order=desc')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findAllType = async () => {
    try {
        const res = await axios.get('http://localhost:8080/typeService')
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const save =async (contract) => {
    try {
        const result = await axios.post('http://localhost:8080/service', contract)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const deleteService = async (id) => {
    try {
        await axios.delete('http://localhost:8080/service/' + id)
    } catch (e) {
        console.log(e)
    }
}

export const findById = async (id) => {
    try {
        const res = await axios.get('http://localhost:8080/service/' + id)
        return res.data
    } catch (e) {
        console.log(e)
    }
}
export const updateService = async (value) => {
    try {
        await axios.put('http://localhost:8080/service/' + value.id, value)
    } catch (e) {
        console.log(e)
    }
}