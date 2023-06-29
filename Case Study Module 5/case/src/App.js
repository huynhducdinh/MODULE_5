import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Routes, Route} from 'react-router-dom';
import {HeaderFurama} from "./components/HeaderFurama";
import {ListCustomer} from "./components/list/ListCustomer";
import {CreateCustomer} from "./components/create/CreateCustomer";
import {CreateService} from "./components/create/CreateService";
import {CreateRentalContract} from "./components/create/CreateRentalContract";
import {UpdateService} from "./components/update/UpdateService";
import {ListContract} from "./components/list/ListContract";
import {UpdateCustomer} from "./components/update/UpdateCustomer";
import {ListService} from "./components/list/ListService";
import {UpdateContract} from "./components/update/UpdateContract";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<HeaderFurama/>}></Route>
                {/*DANH SÁCH KHÁCH HÀNG*/}
                <Route path={'/listCustomer'} element={<ListCustomer/>}></Route>
                {/*DANH SÁCH HỢP ĐỒNG THUÊ*/}
                <Route path={'/listRentalContract'} element={<ListContract/>}></Route>
                {/*DANH SÁCH DỊCH VỤ*/}
                <Route path={'/listFacilityService'} element={<ListService/>}></Route>
                {/*THÊM MỚI KHÁCH HÀNG*/}
                <Route path={'/createCustomer'} element={<CreateCustomer/>}></Route>
                {/*THÊM MỚI DỊCH VỤ*/}
                <Route path={'/createService'} element={<CreateService/>}></Route>
                {/*THÊM MỚI HỢP ĐỒNG THUÊ*/}
                <Route path={'/createRentalContract'} element={<CreateRentalContract/>}></Route>
                {/*CHỈNH SỮA DỊCH VỤ*/}
                <Route path={'/updateService/:id'} element={<UpdateService/>}></Route>
                {/*CHỈNH SỬA KHÁCH HÀNG*/}
                <Route path={'/updateCustomer/:id'} element={<UpdateCustomer/>}></Route>
                {/*CHỈNH SỬA HỢP ĐỒNG*/}
                <Route path={'/updateContract/:id'} element={<UpdateContract/>}></Route>
            </Routes>
        </>
    );

}

export default App;
