import data from "./textData.json";
import "./review.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="h1-about">About Us</h1>
      </div>
        <p>{data.about_para}</p>
      <div className="footer-container">
        <li className="footer-list">
          <div className="address">
            <h3>ADDRESS</h3>

            <p>
              Cyber Hills Colony,
              <br />
              VIP Hills, Silicon Valley,
              <br />
              Madhapur, Hyderabad, Telangana
              <br />
            </p>
          </div>
          <div className="useful-links">
            <h3>USEFUL LINKS</h3>
            <Link to="/test">
              <li>test</li>
            </Link>
            <a href="" target="_blank" rel="noopener">
              <li>sample</li>
            </a>
            <a href="" target="_blank" rel="noopener">
              <li>sample</li>
            </a>
            <a href="" target="_blank" rel="noopener">
              <li>sample</li>
            </a>
          </div>
          <div className="contact-info">
            <h3>CONTACT</h3>
            <li>Silicon Valley, Hyderabad,</li>
            <li>SurajBade39.sb@gmail.com</li>
            <li>+91 8411029200</li>
            <li>
            <a href="https://wa.me/8411029200" target="_blank"  rel="noopener">
              <img
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
              />
              </a>
            </li>
          </div>
        </li>
      <div className="copyright">
       
      <p>© 2020 Copyright: </p>
      
      
      <a href="" target="_blank"  rel="noopener">
        Aquapond.com</a>
      
    </div>
      </div>
    </div>
  );
}
export default About;
