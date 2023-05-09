import { Link } from "react-router-dom";

function Header() {

    function handleSearch() {


    }

    return(
        <div className="header-section">
            <ul className="list-section-header">
          <li className="signup-list"><Link to={"/signup"}>signup</Link></li>
          <li className="login-list"><Link to={"/"}>login</Link></li>
          <li className="search-box-list">search
            <input type="text" name="search" 
            onClick={handleSearch}>
                </input>
          </li>
          <li className="about-list"><Link to={"/about"}>About</Link></li>
        </ul>
        </div>
        
    );
}
export default Header;