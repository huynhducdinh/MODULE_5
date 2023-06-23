import useIncrement from "../hook/useIncrement";

export  function Counter2(){
    const [count, setCount]=useIncrement(1)
    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(2)}>ADD 2</button>
        </>
    )
}