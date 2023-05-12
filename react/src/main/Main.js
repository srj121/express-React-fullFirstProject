import Footer from "./Footer";
import Header from "./Header";
import '../css/main.css'
import { Link } from "react-router-dom";
import Usericon from "../crud_operation/userIcon";

function Main() {

    return(
        <>
        <Usericon />
        <Header />
        <div className="main-section">
        <div className="crud-box">
            <h3>CRUD Operation</h3>
            <p>
                This page will give you the functionality of 
                <br/> <br/>
               GET . CREATE <br/>
                UPDATE . DELETE
            </p>
            <Link to={"/login"}>
            <button>Try!</button>
            </Link>
        </div>

        </div>
        <Footer />
        </>
    );
}
export default Main;