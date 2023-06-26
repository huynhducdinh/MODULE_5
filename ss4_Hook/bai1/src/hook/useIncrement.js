import {useState} from "react";


export default function useIncrement(){
    const [count, setCount] = useState(0)
    const increase = (addAmount) => {
        setCount(prevState => prevState+addAmount)
    }
    return [count, increase]

}