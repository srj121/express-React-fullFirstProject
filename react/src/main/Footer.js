import { Link } from "react-router-dom";

function Footer() {

    return(
        <div className="footer-section">
            <ul className="list-section-footer">
          <li className="sample-list"><Link to={"/"}>sample</Link></li>
          <li className="sample-list"><Link to={"/"}>sample</Link></li>
          <li className="sample-list"><Link to={"/"}>sample</Link></li>
          <li className="sample-list"><Link to={"/"}>sample</Link></li>
          <li className="sample-list"><Link to={"/"}>sample</Link></li>
        </ul>
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
        </div>
        
    );
}
export default Footer;