import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='footer-container'>
      <Container className='footer-container'>
        <p className='footer-logo'>CreditFinder</p>
        <div className='footer-manu'>
          <div className='footer-manu-home'>
            <p>Home</p>
            <p>About</p>
            <p>Privacy Policy</p>
          </div>
          <div className='footer-manu-privecy'>
            <p>Blog</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className='footer-manu-icon'>
          <RiLinkedinFill className='icon-RiLinkedinFill' />
          <FaFacebookF className='icon-FaFacebookF' />
          <TfiTwitter className='icon-TfiTwitter' />
          <MdEmail className='icon-MdEmail' />
        </div>
      </Container>
    </div>
  );
}

export default Footer;