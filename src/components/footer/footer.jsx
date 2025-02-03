import './footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return <footer>
          <div className='container'>
              <div className='footer-body G-align-center'>
                  <p className='footer-text'>© 2024 Аналитическая платформа Газпромбанка</p>
                  <Link to='/' className='footer-link G-align-center'>
                      <i className='icon icon-sms'></i>
                      <span>Техническая поддержка</span>
                  </Link>
              </div>
          </div>
    </footer>
};

export default Footer;