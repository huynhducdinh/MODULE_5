import logo from './logo.svg';
import './App.css';
import {MedicalDeclration} from "./components/MedicalDeclaration";
import 'bootstrap/dist/css/bootstrap.min.css'
import {ToastContainer} from "react-toastify";


function App() {
  return (
   <>
   <MedicalDeclration/>
       <ToastContainer/>
   </>
  );
}

export default App;
