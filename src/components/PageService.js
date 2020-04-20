import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import aboutimg from '../img/about.jpg';
import pagetitle from '../img/page-title.png';
import oneimg from '../img/1.png';
import twoimg from '../img/2.png';
import threeimg from '../img/3.png';
import fourimg from '../img/4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faStar,faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faLinkedin,faInstagram} from '@fortawesome/free-brands-svg-icons';
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';

export class PageService extends Component {
  componentDidMount(){
    document.title='About Us - Indrani Electronics'
  }
    render() {
        return (
            <div>
            <PageNavbar/>
  {/* Page Title Begin */}
  <section className="page-title-bg pt-250 pb-100" style={{  
    backgroundImage: `url(${pagetitle})`
  }} >
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="page-title text-center">
            <h2>Services</h2>
            <ul className="list-inline">
              <li><Link to="/">Home</Link></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Page Title End */}
  {/* Service Section Begin */}
  <section className="pt-120 pb-120">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        {/* Section Title Begin */}
        <div className="section-title mb-4">
          <h3>We're Your Team in Difficult Times</h3>
          <h2>FEW WORDS ABOUT US</h2>
          <p>Indrani Electronics is your No. 1 source for all Electronics products from small things like LED, Home Theatre to bigger one’s like AC, Fridge, Washing Machine etc. At Indrani Electronics, We believe that there is a better way to do marketing. A more invasive way where customers are earned rather than bought. We are dedicated to giving you the best of the products, with a focus of dependability, customer service and most importantly customer satisfaction. We hope you enjoy our products as much as we enjoy offering them to you.</p>
        </div>
        {/* Section Title End */}
        {/* About Feature List Begin */}
        <ul className="list-unstyled list-check">
        <p><FontAwesomeIcon icon={faStar} className="fa"/> WE KNOW THAT OUR CLIENTS ARE THE KEY TO OUR</p>
          <li><FontAwesomeIcon icon={faCheck} className="fa"/> SUCCESS</li>
          <li><FontAwesomeIcon icon={faCheck} className="fa"/> TRIUMPH</li>
        </ul>
        {/* About Feature List End */}
      </div>
      <div className="col-lg-6 mt-50 mt-lg-0">
        <img src={aboutimg} data-rjs={2} alt="" />
      </div>
    </div>
  </div>
</section>
  {/* Service Section End */}
  <section className="pt-120 pb-70 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/testimonial-pattern.png")'}}>
  <div className="container">
    <div className="row">
      <div className="col-12">
        {/* Section Title Begin */}
        <div className="section-title text-center">
          <h2>WE THE <span>TEAM</span></h2>
          <p>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.</p>
        </div>
        {/* Section Title End */}
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        {/* Single Team Begin */}
        <div className="single-team-member">
          {/* Team Image Begin */}
          <div className="image position-relative">
            <img src="assets/img/shapes/team.svg" className="svg" alt="" />
            <img src={oneimg} data-rjs={2} alt="" />
          </div>
          {/* Team Image End */}
          {/* Team Info Begin */}
          <div className="team-info">
            <div className="info-front text-center">
            <h4>Nilkantha Mondal</h4>
              <p>FOUNDER & OWNER</p>
            </div>
            <div className="info-back">
              <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
              <li>
                <a href="https://www.facebook.com/nilkantha.mondal.3"><FontAwesomeIcon icon={faFacebook}/></a>
                </li>
              </ul>
            </div>
          </div>
          {/* Team Info End */}
        </div>
        {/* Single Team End */}
      </div>
      <div className="col-lg-3 col-sm-6">
        {/* Single Team Begin */}
        <div className="single-team-member">
          {/* Team Image Begin */}
          <div className="image position-relative">
            <img src="assets/img/shapes/team.svg" className="svg" alt="" />
            <img src={twoimg} data-rjs={2} alt="" />
          </div>
          {/* Team Image End */}
          {/* Team Info Begin */}
          <div className="team-info">
            <div className="info-front text-center">
              <h4>Bipadtaran Pal</h4>
              <p>SALES MANAGER</p>
            </div>
            <div className="info-back">
              <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                <li>
                <a href="https://www.facebook.com/profile.php?id=100008135192835"><FontAwesomeIcon icon={faFacebook}/></a>
                </li>
              </ul>
            </div>
          </div>
          {/* Team Info End */}
        </div>
        {/* Single Team End */}
      </div>
      <div className="col-lg-3 col-sm-6">
        {/* Single Team Begin */}
        <div className="single-team-member">
          {/* Team Image Begin */}
          <div className="image position-relative">
            <img src="assets/img/shapes/team.svg" className="svg" alt="" />
            <img src={threeimg} data-rjs={2} alt="" />
          </div>
          {/* Team Image End */}
          {/* Team Info Begin */}
          <div className="team-info">
            <div className="info-front text-center">
              <h4>Dilip Kumar Mondal</h4>
              <p>SERVICE MANAGER</p>
            </div>
            <div className="info-back">
            <h4>Dilip Kumar Mondal</h4>
              <p>SERVICE MANAGER</p>
            </div>
          </div>
          {/* Team Info End */}
        </div>
        {/* Single Team End */}
      </div>
      <div className="col-lg-3 col-sm-6">
        {/* Single Team Begin */}
        <div className="single-team-member">
          {/* Team Image Begin */}
          <div className="image position-relative">
            <img src="assets/img/shapes/team.svg" className="svg" alt="" />
            <img src={fourimg} data-rjs={2} alt="" />
          </div>
          {/* Team Image End */}
          {/* Team Info Begin */}
          <div className="team-info">
            <div className="info-front text-center">
              <h4>Sourav Mondal</h4>
              <p>DIGITAL MARKETER</p>
            </div>
            <div className="info-back">
              <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">                
                <li>
                  <a href="https://www.linkedin.com/in/lyadhcoder"><FontAwesomeIcon icon={faLinkedin}/></a>
                </li>
                <li>
                  <a href="https://instagram.com/lyadhcoder"><FontAwesomeIcon icon={faInstagram}/></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/lyadhcoder"><FontAwesomeIcon icon={faFacebook}/></a>
                </li>
                <li>
                  <a href="https://thesourav.com/"><FontAwesomeIcon icon={faGlobe}/></a>
                </li>
              </ul>
            </div>
          </div>
          {/* Team Info End */}
        </div>
        {/* Single Team End */}
      </div>
    </div>
  </div>
</section>
  {/* Counter Begin */}
  <section className="pt-120 pb-70 gradient-bg">
    <div className="container">
      <div className="row align-items-center">
        {/* Single Counter */}
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter text-center text-white">
            <h2 className="count"><span>15+</span></h2>
            <p>Team Members</p>
          </div>
        </div>
        {/* End Single Counter */}
        {/* Single Counter */}
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter text-center text-white">
            <h2 className="count"><span>15000</span>+</h2>
            <p>Happy Clients</p>
          </div>
        </div>
        {/* End Single Counter */}
        {/* Single Counter */}
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter text-center text-white">
            <h2 className="count"><span>346</span>+</h2>
            <p>Gifts</p>
          </div>
        </div>
        {/* End Single Counter */}
        {/* Single Counter */}
        <div className="col-lg-3 col-sm-6">
          <div className="single-counter text-center text-white">
            <h2 className="count"><span>5167</span>+</h2>
            <p>Problems Solved</p>
          </div>
        </div>
        {/* End Single Counter */}
      </div>
    </div>
  </section>
  {/* Counter End */}
  <PageFooter/>
</div>

        )
    }
}

export default PageService
