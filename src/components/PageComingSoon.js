import React from 'react'
import lottie from "lottie-web";
import errorbg from '../img/404-bg.png';
import commingsoon from "../animation/comming-soon.json";
import PageNavbar from './PageNavbar';
import PageFooter from './PageFooter';

const PageComingSoon = (props) => {
    document.title = 'Coming Soon - Indrani Electronics | Your No. 1 and Popular Showroom';
    let commingsoonAnimation = React.createRef();
    React.useEffect(() =>  {
      lottie.loadAnimation({
        container: commingsoonAnimation.current,
        animationData: commingsoon,
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
                    <div className="col-lg-10">
                      <div className="coming-soon-content text-center">
                        <div className="ErrorAnimation" ref={commingsoonAnimation}/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>  
              <PageFooter/> 
              </div>        
        )
}
export default PageComingSoon
