import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DonHang} from "./components/DonHang";
import {ThemMoiDonHang} from "./components/ThemMoiDonHang";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<DonHang/> }/>
                <Route path="/create" element={<ThemMoiDonHang/> }/>
            </Routes>
        </>
    );
}

export default App;
