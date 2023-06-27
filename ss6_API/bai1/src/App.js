import logo from './logo.svg';
import './App.css';

import {ShowListToDo} from "./components/ShowListToDo";
import {Route, Routes} from "react-router-dom";
import {CreateTodo} from "./components/CreateTodo";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
   <>

       <Routes>
           <Route path="/" element={<ShowListToDo/>}/>
           <Route path="/create" element={<CreateTodo/>}/>
       </Routes>
       <ToastContainer/>

   </>
  );
}

export default App;
