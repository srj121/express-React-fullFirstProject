import images from "./base64.json";
function Footer() {
  return (
    <div className="footer-section">
      <ul className="list-section-footer">
        <li className="github-list">
          <a href="https://github.com/srj121" target="_blank" rel="noopener">
            <img src={images.gtihub}></img>
          </a>
        </li>
        <li className="instagram-list">
          <a
            href="https://instagram.com/iamsurajbade?igshid=ZGUzMzM3NWJiOQ=="
            target="_blank"
            rel="noopener"
          >
            <img src={images.instagram}></img>
          </a>
        </li>
        <li className="linkedin-list">
          <a
            href="https://www.linkedin.com/in/suraj-bade-qa-tester/"
            target="_blank"
            rel="noopener"
          >
            <img src={images.linkedin}></img>
          </a>
        </li>
        <li className="pintrest-list">
          <a href="https://pin.it/3395prH" target="_blank" rel="noopener">
            <img src={images.pintrest}></img>
          </a>
        </li>
        <li className="facebook-list">
          <a
            href=" https://www.facebook.com/suraj.bade.39?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener"
          >
            <img src={images.facebook}></img>
          </a>
        </li>
      </ul>
      <section className="fotter-paragraph">
        <p>
          This is a Welcome page of all my various operation you can do. check
          out and review it! I will be happy too see your resposes.
          <br />
          welcome make yourself comfortable.
        </p>
      </section>
    </div>
  );
}
export default Footer;
