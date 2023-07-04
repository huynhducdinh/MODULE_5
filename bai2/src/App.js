import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from "react-router-dom";
import {ListProduct} from "./components/ListProduct";
import {Create} from "./components/Create";
import {Update} from "./components/Update";

function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<ListProduct/>}/>
     <Route path="/create" element={<Create/>}/>
     <Route path="/update/:id" element={<Update/>}/>
   </Routes>
   </>
  );
}

export default App;
