
import twitter from "../../img/icons/twitter.svg";
import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

import "./footer.css"

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://twitter.com/DanyliukVitalii" target="_blank" without rel="noreferrer"><img src={twitter} alt="twitter" /></a></li>
                    <li className="social__item"><a href="https://github.com/VitaliiDanyliuk" target="_blank" without rel="noreferrer"><img src={gitHub} alt="gitHub" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/vitalii-danyliuk-50a6b7229/" target="_blank" without rel="noreferrer"><img src={linkedIn} alt="linkedIn" /></a></li>
                </ul>
                <div className="copyright">
                    <p>{new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;