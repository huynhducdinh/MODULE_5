import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Routes, Route} from 'react-router-dom';
import {HeaderFurama} from "./components/HeaderFurama";

import {ListAdmin} from "./components/ListAdmin";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={ <HeaderFurama/>}></Route>
                <Route path={'/admin'} element={<ListAdmin/>}></Route>
            </Routes>


        </>

    );

}

export default App;
