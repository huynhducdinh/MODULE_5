import useIncrement from "../hook/useIncrement";

export  function Counter1(){
    const [count, setCount]=useIncrement(1)
    return(
        <>
        <h2>Count: {count}</h2>
            <button onClick={()=>setCount(1)}>ADD 1</button>
        </>
    )
}