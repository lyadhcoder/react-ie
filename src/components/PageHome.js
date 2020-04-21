import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import lottie from "lottie-web";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import bannerbg from '../img/banner-bg.jpg';
import emiimg from '../img/emi.jpg';
import featureone from '../img/feature1.png';
import featuretwo from '../img/feature2.png';
import featurethree from '../img/feature3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck } from '@fortawesome/free-solid-svg-icons';
import json1 from "../animation/1.json";
import json2 from "../animation/2.json";
import json3 from "../animation/3.json";
import json4 from "../animation/4.json";
import brand1 from '../brands/brand-1.jpg';
import brand2 from '../brands/brand-2.jpg';
import brand3 from '../brands/brand-3.jpg';
import brand4 from '../brands/brand-4.jpg';
import brand5 from '../brands/brand-5.jpg';
import brand6 from '../brands/brand-6.jpg';
import brand7 from '../brands/brand-7.jpg';
import brand8 from '../brands/brand-8.jpg';
import brand9 from '../brands/brand-9.jpg';
import brand10 from '../brands/brand-10.jpg';
import brand11 from '../brands/brand-11.jpg';
import brand12 from '../brands/brand-12.jpg';
import brand13 from '../brands/brand-13.jpg';
import brand14 from '../brands/brand-14.jpg';
import brand15 from '../brands/brand-15.jpg';
import brand16 from '../brands/brand-16.jpg';
import brand17 from '../brands/brand-17.jpg';
import brand18 from '../brands/brand-18.jpg';
import brand19 from '../brands/brand-19.jpg';
import brand20 from '../brands/brand-20.jpg';
import brand21 from '../brands/brand-21.jpg';
import brand22 from '../brands/brand-22.jpg';
import brand23 from '../brands/brand-23.jpg';
import brand24 from '../brands/brand-24.jpg';
import brand25 from '../brands/brand-25.jpg';
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';

  const PageHome = (props) => {
    document.title = 'Indrani Electronics | Your No. 1 and Popular Showroom';

    let IconAnimation1 = React.createRef();
    React.useEffect(() =>  {
      lottie.loadAnimation({
        container: IconAnimation1.current,
        animationData: json1,
        loop: true,
        renderer: 'svg',
      })
    })
    let IconAnimation2 = React.createRef();
    React.useEffect(() =>  {
      lottie.loadAnimation({
        container: IconAnimation2.current,
        animationData: json2,
        loop: true,
        renderer: 'svg',
      })
    })
    let IconAnimation3 = React.createRef();
    React.useEffect(() =>  {
      lottie.loadAnimation({
        container: IconAnimation3.current,
        animationData: json3,
        loop: true,
        renderer: 'svg',
      })
    })
    let IconAnimation4 = React.createRef();
    React.useEffect(() =>  {
      lottie.loadAnimation({
        container: IconAnimation4.current,
        animationData: json4,
        loop: true,
        renderer: 'svg',
      })
    })
        return (
            <div>
            <PageNavbar/>
            <section className="banner bg-overlay" style={{  
    backgroundImage: `url(${bannerbg})`
  }}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">                   
                    <div className="banner-content text-white text-center">
                      <h1>Indrani Electronics</h1>
                      <p>Indrani Electronics Believe Customer Satisfaction. We Are Very Old And Popular Showroom Of Rampurhat. Great Selection. Friendly Services.</p>
                      <a className="banner-btn example_d" href="/Payment">Payment</a>
                    </div>                    
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-90 feature-style-two">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 single-feature-wrapper">
                    <div className="single-feature text-center">
                      <div className="image">
                        <img src={featureone} data-rjs={2} alt="" />
                      </div>
                      <div className="content">
                        <h3>Exclusive Offer</h3>
                        <p>Unbelievable Discount on every products.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 single-feature-wrapper">
                    <div className="single-feature text-center">
                      <div className="image">
                        <img src={featuretwo} data-rjs={2} alt="" />
                      </div>
                      <div className="content">
                        <h3>Free Gifts</h3>
                        <p>Assure Free gift is available.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 single-feature-wrapper">
                    <div className="single-feature text-center">
                      <div className="image">
                        <img src={featurethree} data-rjs={2} alt="" />
                      </div>
                      <div className="content">
                        <h3>Lowest Price</h3>
                        <p>You Can Buy Products By Purchasing Very Lowest Price Form Market.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-120 pb-120">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <img src={emiimg} data-rjs={2} className="w-100" alt="" />
                    </div>
                    <div className="col-lg-6">
                      <div className="section-title mb-4 mt-50 mt-lg-0">
                        <h3>EMI Finance</h3>
                        <h2>Easy and No Cost EMI is Available also we offer 0% interest EMI</h2>
                      </div>
                      <ul className="list-unstyled list-check">
                        <li><FontAwesomeIcon icon={faCheck} className="fa"/> Become successful &amp; superior</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fa"/> Provide quick &amp; good solution for
                          business</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fa"/> Use opportunities to boost sales</li>
                        <li><FontAwesomeIcon icon={faCheck} className="fa"/> Planning &amp; executing projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </section>
            <section className="pt-120 pb-70 gradient-bg">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-counter text-center text-white">
                      <h2 className="count"><span>20+</span></h2>
                      <p>Years of experience</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-counter text-center text-white">
                      <h2 className="count"><span>95</span>%</h2>
                      <p>Positive Review</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-counter text-center text-white">
                      <h2 className="count"><span>5000</span>+</h2>
                      <p>Support Issues Solved</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-counter text-center text-white">
                      <h2 className="count"><span>15000</span>+</h2>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-120 pb-90">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <h2>HIGHLIGHTED <span>FEATURES</span></h2>
                      <p>Indrani Electronics Make Your Work Easier And Faster!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-service style--two text-center">
                      <div className="icon">
                      <div className="jsonicon4" ref={IconAnimation1}/>
                      </div>
                      <div className="content">
                        <h4>Believe In Fair Price and In Responsible After Sales Service</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-service style--two text-center">
                      <div className="icon">
                      <div className="jsonicon" ref={IconAnimation2}/>
                      </div>
                      <div className="content">
                        <h4>What You See, What You Get Is Same</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-service style--two text-center">
                      <div className="icon">
                      <div className="jsonicon" ref={IconAnimation3}/>
                      </div>
                      <div className="content">
                      <h4>Provide Instant Tech Support</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="single-service style--two text-center">
                      <div className="icon">
                      <div className="jsonicon" ref={IconAnimation4}/>
                      </div>
                      <div className="content">
                        <h4>Happy and Satisfied Customer</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-120 pb-120">
              <div className="container">
              <div className="text-center">
                <h3>We <span>Worked</span> With</h3>
              </div>
                <div className="row">
                  <div className="col-12">
                    <div className="brand-logo">
                    <OwlCarousel items={10}  
                        className="owl-theme"  
                        loop  
                        dots={false}
                        margin={8} 
                        autoplay={true}
                        autoplayTimeout={1000}
                        autoplayHoverPause={true}>                     
                      
                        <img src={brand1} data-rjs={2} alt="" />                                        
                      
                        <img src={brand2} data-rjs={2} alt="" />   
                          
                        <img src={brand3} data-rjs={2} alt="" />                                           
                      
                        <img src={brand4} data-rjs={2} alt="" />
                                     
                        <img src={brand5} data-rjs={2} alt="" />
                    
                        <img src={brand6} data-rjs={2} alt="" />
                      
                        <img src={brand7} data-rjs={2} alt="" />
                      
                        <img src={brand8} data-rjs={2} alt="" />
                      
                        <img src={brand9} data-rjs={2} alt="" />
                      
                        <img src={brand10} data-rjs={2} alt="" />
                      
                        <img src={brand11} data-rjs={2} alt="" />
                      
                        <img src={brand12} data-rjs={2} alt="" />
                      
                        <img src={brand13} data-rjs={2} alt="" />
                      
                        <img src={brand14} data-rjs={2} alt="" />
                      
                        <img src={brand15} data-rjs={2} alt="" />
                      
                        <img src={brand16} data-rjs={2} alt="" />
                      
                        <img src={brand17} data-rjs={2} alt="" />
                      
                        <img src={brand18} data-rjs={2} alt="" />

                        <img src={brand19} data-rjs={2} alt="" />
                      
                        <img src={brand20} data-rjs={2} alt="" />
                      
                        <img src={brand21} data-rjs={2} alt="" />
                      
                        <img src={brand22} data-rjs={2} alt="" />
                      
                        <img src={brand23} data-rjs={2} alt="" />
                      
                        <img src={brand24} data-rjs={2} alt="" />
                      
                        <img src={brand25} data-rjs={2} alt="" />
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PageFooter/>
          </div>
          
        )
    }

export default PageHome
