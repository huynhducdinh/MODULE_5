import './App.css';
import {Routes , Route} from "react-router-dom"
import React from "react";
import {Products} from "./component/Products";
import {CreateProduct} from "./component/CreateProduct";
import {UpdateProduct} from "./component/UpdateProduct";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Products/>}/>
                <Route path="create-product" element={<CreateProduct/>}/>
                <Route path="update-product" element={<UpdateProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
