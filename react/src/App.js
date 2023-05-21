import Crudoperation from "./crud_operation/Crudoperation";
import LoginPage from "./login_Signup/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./login_Signup/SignUp";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./main/Main";
import About from "./review/About";
import {Test} from "./review/Test";
import OtpVerification from "./login_Signup/OtpVerification";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="signup/otp" element={<OtpVerification />} />
        <Route path="/crudoperation" element={<Crudoperation />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  );
}
export default  App;
