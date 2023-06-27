import axios from "axios";

export const findAll = async ()=>{
    try {
        const  result=await  axios.get('http://localhost:8080/rentalContract')
        return  result.data
    }catch (e) {
        console.log(e)
    }


}