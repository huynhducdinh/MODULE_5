import logo from './logo.svg';
import './App.css';
import {ContactForm} from "./components/ContactForm";
import {ToastContainer} from "react-toastify";


function App() {
  return (

    <>
      <ContactForm/>
        <ToastContainer/>
        </>
  )
}

export default App;
