import logo from './logo.svg';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BookManagement} from "./components/BookManagement";
import {CreateBook} from "./components/CreateBook";
import {Route, Routes} from "react-router-dom";
import {UpdateBook} from "./components/UpdateBook";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BookManagement/>}/>
                <Route path="/create" element={<CreateBook/>}/>
                <Route path="/update/:id" element={<UpdateBook/>}/>
            </Routes>
        </>
    );
}

export default App;
