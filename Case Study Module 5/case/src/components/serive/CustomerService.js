import axios, {get} from "axios";

 export const findAll = async (value,currentPage) => {
    try {
            const result= await axios.get(`http://localhost:8080/customer/?_page=${currentPage}&_limit=6&_sort=id&_order=desc`)
        return result.data
    }catch (e) {
        console.log(e)
    }
}
export const getTotalPages = async() =>{
    try {
        return (await axios.get(`http://localhost:8080/customer`)).data
    } catch (error) {
        console.log(error)
    }
}
export const findAllTypeCustomer =async ()=>{
     try {
         const res =await axios.get('http://localhost:8080/typeCustomer')
         return res.data
     }catch (e) {
         console.log(e)
     }
}
export const save =async (customer)=>{
     try {
         const res = await  axios.post('http://localhost:8080/customer',customer)
         return res.data
     }catch (e) {
         console.log(e)
     }
}
export const deleteCustoemr = async (id) => {
     try {
         await axios.delete('http://localhost:8080/customer/'+id)
     }catch (e) {
         console.log(e)
     }
}
export const findById =async (id)=>{
     try {
         const res =await axios.get('http://localhost:8080/customer/'+id)
         return res.data
     }catch (e) {
         console.log(e)
     }
}
export  const updateCustomer = async (value) => {
     try {
         await axios.put('http://localhost:8080/customer/'+value.id,value)
     }catch (e) {
         console.log(e)
     }
  
}