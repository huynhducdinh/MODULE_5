import axios from "axios";
import {useParams} from "react-router-dom";

export const showList = async () => {
    try {
        const result = await axios.get('http://localhost:8080/book')
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const create = async (book) => {
    try {
        const result = await axios.post('http://localhost:8080/book', book)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const deleteBook = async (id) => {
    try {
        await axios.delete('http://localhost:8080/book/' + id)
    } catch (e) {
        console.log(e)
    }
}

export const getById = async (id) => {
    try {
        const result = await axios.get('http://localhost:8080/book/' + id);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const updateBook = async (value) => {
    try {
        await axios.put('http://localhost:8080/book/' + value.id, value)
    } catch (e) {
        console.log(e)
    }
}
// export const updateBook = async (value) => {
//     try {
//         const res = await axios.put("http://localhost:8080/book/"+value.id,value)
//     } catch (e) {
//
//     }
// }