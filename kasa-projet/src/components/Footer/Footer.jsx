import './Footer.css';
import logo from '../../assets/logo/kasa-logo-white.svg';

const Footer = () => {
  return (
    <div className="footer">
      <img className="header_logo" src={logo} alt="Pied de page Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;