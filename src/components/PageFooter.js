import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare,faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import {faCannabis} from '@fortawesome/free-solid-svg-icons';
import Footer_Logo from '../logo/footer_logo.png';
import footerbg from '../img/footer-pattern.png';
import { Link } from 'react-router-dom'; 
export class PageFooter extends Component {
    render() {
        return (
  <footer className="footer bg-light section-pattern footer-bg" style={{  
    backgroundImage: `url(${footerbg})`}} >
  <div className="footer-top pt-60">
    <div className="container border-bottom">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="widget widget_contact_info">
            <div className="widget-logo">
              <img src={Footer_Logo} data-rjs={2} alt="" />
            </div>
            <div className="info-content">
              <div className="single-info">
                <span>Showroom Location</span>
                <p>New Bus Stand, Rampurhat, Birbhum<br/> West Bengal. Pin: 731224</p>
              </div>
              <div className="single-info">
                <span>Phone</span>
                <p><a href="tel:+918250457023">+91 8250457023</a>
                  <a href="tel:+919153488183">+91 9153488183</a>
                  <a href="tel:+919933333859">+91 9933333859</a>
                  <a href="tel:+919153488184">+91 9153488184</a></p>
              </div>
              <div className="single-info">
                <span>Email</span>
                <p><a href="mailto:indranielectronics@gmail.com">indranielectronics@gmail.com</a>                   
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="widget widget_nav_menu">
            <div className="widget-title">
              <h4>Quick Links</h4>
            </div>
            <ul className="menu">
              <li><Link to="/About"><FontAwesomeIcon icon={faCannabis} className="fi"/> About Us</Link></li>
              <li><Link to="/Contact"><FontAwesomeIcon icon={faCannabis} className="fi"/> Contact Us</Link></li>
              <li><Link to="/Gallery"><FontAwesomeIcon icon={faCannabis} className="fi"/> Gallery</Link></li>
              <li><Link to="/Payment"><FontAwesomeIcon icon={faCannabis} className="fi"/> Payment</Link></li>
              <li className="fl"><a href="https://g.page/indranielectronics" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faCannabis} className="fi"/> Review Us on Google</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="widget widget_newsletter">
            <div className="widget-title">
              <h4>Socail Media</h4>
            </div>
          </div>
          <div className="widget widget_social_icon">
            <ul className="social_icon_list list-inline">
              <li>
              <a href="https://www.facebook.com/indranielectronics.rampurhat"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
              </li>
              <li>
              <a href="https://wa.me/918250457023"><FontAwesomeIcon icon={faWhatsappSquare} size="2x"/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="copyright-text text-center">
            <span>Indrani Electronics © 2020 | Powered by <a href="https://thesourav.com/">LyadhCoder</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</footer>
        )
    }
}

export default PageFooter
