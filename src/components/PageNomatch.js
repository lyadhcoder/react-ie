import React from 'react'
import { Link } from 'react-router-dom'
import lottie from "lottie-web";
import err404 from "../animation/404.json";
import errorbg from '../img/404-bg.png';
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';

const Nomatch = (props) => {
  document.title = 'Error 404';
  let ErrorAnimation = React.createRef();
  React.useEffect(() =>  {
    lottie.loadAnimation({
      container: ErrorAnimation.current,
      animationData: err404,
      loop: true,
      renderer: 'svg',
    })
  })
      return (
            <div>
            <PageNavbar/>
              <section className="min-vh-100 pt-5 pb-5 pb-lg-0 pt-lg-0 vw-100 d-flex align-items-center bg-404 ovx-hidden" style={{  
              backgroundImage: `url(${errorbg})`}}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* 404 Content Begin */}
                  <div className="not-found-content text-center">
                  <div className="ErrorAnimation" ref={ErrorAnimation}/>
                    <p>You've been tricked into click on link that can't be found.
                      Please check the url or go to <Link to="/">main page</Link>.</p>
                  </div>
                  {/* 404 Content End */}
                </div>
              </div>
            </div>
          </section>
          <PageFooter/>
            </div>
          
        )
}

export default Nomatch
