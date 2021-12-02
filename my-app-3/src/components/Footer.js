import footerLogo from '../images/icons/footer_logo.png';
import instagram from '../images/icons/instagram.png';
import twitter from '../images/icons/Twiiter_1.png';
import facebook from '../images/icons/facebook.png';

export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper-footer">
        <div className="footer_logo">
          <a href="#"><img src={footerLogo} /></a>
          <div className="socially">
            <div>
              <img src={instagram} />
            </div>
            <div>
              <img src={facebook} />
            </div>
            <div>
              <img src={twitter} />
            </div>
          </div>
        </div>
        <div className="resource">
          <p>Resource</p>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
        </div>
        <div className="legal-stuff">
          <p>Legal Stuff</p>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Financing</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </div>
        <div className="footer-sign">
          <p>knowing you're always on the best energy deal.</p>
          <input type="text"></input>
          <button>Sign up Now</button>
        </div>
      </div>
      <b>Made With Love By Figmaland &copy; All Right Reserved</b>
    </div>
  )
}