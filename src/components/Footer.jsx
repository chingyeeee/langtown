import { Link } from "react-router-dom";
import iconFooterStep from "../images/icons/icon-footerstep.svg";
import iconInstagram from "../images/icons/icon-instagram.svg";
import iconEmail from "../images/icons/icon-email.svg";

const Footer = () => {
  return (
    <footer>
      <h1>LANGTOWN</h1>
      <div className="footer-step">
        <img src={iconFooterStep} alt="iconFooterStep" />
      </div>

      <ul className="footer-nav d-md-flex justify-content-center">
        <li>
          <Link className="footer-item" to="/aboutus">
            關於我們
          </Link>
        </li>
        <li>
          <Link className="footer-item" to="/adoptionnotices">
            認養須知
          </Link>
        </li>
        <li>
          <Link className="footer-item" to="/adoptioninformations">
            認養資訊
          </Link>
        </li>
        <li>
          <Link className="footer-item" to="/adoptedstories">
            貓咪故事
          </Link>
        </li>
      </ul>

      <div className="social-media d-flex justify-content-center">
        <a
          className="media-link"
          href="https://www.instagram.com/langtown_org/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconInstagram} alt="Instagram" />
        </a>
        <a
          className="media-link"
          href="mailto:langlangdog@gmail.com?subject=Mail from Our Site"
        >
          <img src={iconEmail} alt="Email" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
