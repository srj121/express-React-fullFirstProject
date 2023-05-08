import { Link } from "react-router-dom";

function Header() {

    return(
        <div className="header-section">
            <ul className="list-section-header">
          <li>signup</li>
          <li>login</li>
          <li>search</li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
        </div>
        
    );
}
export default Header;