import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/title')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const save = async (todo) => {
    try {
        const result = await axios.post('http://localhost:8080/title', todo)
        return result.data
    } catch (e) {
        console.log(e)
    }

}