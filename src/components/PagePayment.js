import React, { Component } from 'react';
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';
import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import shape from '../img/blog-date-shape.svg'

class componentName extends Component {
  render() {
    return (
      <div>
      <PageNavbar/>
      <section className="pt-120 pb-120">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">            
            <div className="single-blog-style--two position-relative">
            <div className="date-bg-shape position-absolute">
                <img src={shape} className="svg" alt="" />
              </div>
              <p className="posted-on position-absolute">Goole Pay</p>
              <div className="blog-image">
                <img src={p1} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6">            
            <div className="single-blog-style--two position-relative">
            <div className="date-bg-shape position-absolute">
                <img src={shape} className="svg" alt="" />
              </div>
              <p className="posted-on position-absolute">PhonePay</p>
              <div className="blog-image">
                <img src={p2} alt="" />
              </div>             
            </div>
          </div>
                           
            <div className="container pt">            
                <div className="single-blog-style--two position-relative">
                <div className="blog-content box-shadow">
                    <h4 className="blog-title">Bank Details</h4>
                    <ul className="post-meta list-inline">
                    <li>Account Number: <span>10170000252867</span></li>
                    <li>IFS Code: <span>BDBL0001758</span></li>
                    <li>Branch: <span>Rampurhat</span></li>
                    </ul>
                </div>
                </div>
            </div>                   
        </div>
        </div>
        </div>
    </div>
    </section>

          <PageFooter/>
      </div>
    );
  }
}

export default componentName;
