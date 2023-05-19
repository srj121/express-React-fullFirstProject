import Crudoperation from "./crud_operation/Crudoperation";
import LoginPage from "./crud_operation/LoginPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SignUp from "./crud_operation/SignUp";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./main/Main";
import About from "./review/About";
import {Test} from "./review/Test";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/crudoperation" element={<Crudoperation />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  );
}
export default  App;
