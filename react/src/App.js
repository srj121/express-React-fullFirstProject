import Crudoperation from "./crud_operation/Crudoperation";
import LoginPage from "./crud_operation/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./crud_operation/SignUp";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Main from "./main/Main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/crudoperation" element={<Crudoperation />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  );
}

export default App;
