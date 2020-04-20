import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pagetitle from '../img/page-title.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';

export class PageContact extends Component {
  
    componentDidMount(){
        document.title='Contact - Indrani Electronics';
    }
    render() {
        return (
            <div>
            <PageNavbar/>
  {/* Page Title Begin */}
  <section className="page-title-bg pt-250 pb-100" style={{  
    backgroundImage: `url(${pagetitle})`
  }}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="page-title text-center">
            <h2>Contact Us</h2>
            <ul className="list-inline">
              <li><Link to="/">Home</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Page Title End */}
  {/* Contact Info Begin */}
  <section className="pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          {/* Contact Info Begin */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Because You Deserve To Work With The Best!</p>
            <div className="row">
              {/* Single Contact Info */}
              <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                <div className="image">
                  <img src="assets/img/icons/location.svg" className="svg" alt="" />
                </div>
                <div className="media-body">
                  <h4>Showroom Location</h4>
                  <p>New Bus Stand, Rampurhat, Birbhum, West Bengal. Pin: 731224</p>
                </div>
              </div>
              {/* End Single Contact Info */}
              {/* Single Contact Info */}
              <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                <div className="image">
                  <img src="assets/img/icons/phone.svg" className="svg" alt="" />
                </div>
                <div className="media-body">
                  <h4>Phone</h4>
                  <p><a href="tel:+918250457023">+91 8250457023</a>
                  <a href="tel:+919153488183">+91 9153488183</a>
                  <a href="tel:+919933333859">+91 9933333859</a>
                  <a href="tel:+919153488184">+91 9153488184</a></p>
                </div>
              </div>
              {/* End Single Contact Info */}
              {/* Single Contact Info */}
              <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                <div className="image">
                  <img src="assets/img/icons/email.svg" className="svg" alt="" />
                </div>
                <div className="media-body">
                  <h4>Email</h4>
                  <p><a href="mailto:indranielectronics@gmail.com">indranielectronics@gmail.com</a>                   
                  </p>
                </div>
              </div>
              {/* End Single Contact Info */}
              {/* Single Contact Info */}
              <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                <div className="image">
                  <img src="assets/img/icons/email.svg" className="svg" alt="" />
                </div>
                <div className="media-body">
                  <h4>Showroom Hours</h4>
                  <p>Note: Due to Coronavirus (COVID-19), Showroom is Temporarily Closed Now.</p>
                  <p>Monday - Saturday <br />
                    10:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
              {/* End Single Contact Info */}
            </div>
          </div>
          {/* Contact Info End */}
        </div>
        <div className="col-lg-8">
          {/* Contact Form Begin */}
          <div className="contact-form-wrapper">
            <h3><FontAwesomeIcon icon={faEnvelope}/> Send Us Message</h3>
            <p><FontAwesomeIcon icon={faPen}/> Get In Touch & Drop Us a Line.</p>
            <div className="cui-embed" style={{height: '400px', width: '100%'}} data-cui-uid="pVZb5q" data-cui-mode="widget" data-cui-pill-button-color="#0000FF" data-cui-transparency={100} />
          </div>
          {/* Contact Form End */}
        </div>
      </div>
    </div>
  </section>
  {/* Contact Info End */}
  <PageFooter/>
</div>

        )
    }
}

export default PageContact
