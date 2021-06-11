import React from "react"
import {withPrefix, Link } from "gatsby"
import {Helmet} from "react-helmet";


const Footer = ({ siteTitle }) => {

  return (
  <div>

<footer>


<section id="footer" class="odd footer offers">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-3 footer-left">

              
               
            
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-phone-alt mr-2"></i>
                            (+92)333-0202729, <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (+92)300-2017020
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-envelope mr-3"></i>
                            info@cambridgeadvisorsnet.com
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            Suite# 203, 2nd Floor, Plot No 37-C, 8th Lane Off Khayaban-e-Muslim, Bukhari Commercial, Phase 6 DHA, Karachi, Pakistan.
                        </a>
                    </li>
                    <li class="nav-item">
                        <Link to={'/contact_us'} class="mt-4 btn outline-button smooth-anchor">GET IN TOUCH</Link>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-lg-9 p-0 footer-right">
                <div class="row items">
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                             <Link to={'/'}>HOME</Link>
                             <Link  to={'/can-and-msf'}>Organizers</Link>
                             <Link  to={'/sponsors_and_partners'}> Sponsors/Partners</Link>
                             <Link  to={'/blue_economy'}>Blue Economy</Link>
                             <Link to={'/bechallenge'}>Challenge 2021</Link>
                             <Link to={'/ideathon'}>Ideathon</Link>
                             <Link to={'/resources'}>Resources</Link>
                             <Link to={'/news'}>News</Link>
                             <Link to={'/events'}>Events</Link>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                            <h4>Ideas</h4>
                                    <Link to={'/bestartup'}>Startups</Link>
                                    <Link to={'/smallscale'}>Small Scale</Link>
                                    <Link to={'/medscale'}>Medium Scale</Link>
                                    <Link to={'/largescale'}>Large Scale</Link>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 item">
                        <div class="card">
                            <h4>Tracks</h4>
                                   <Link to={'/incubation'}>Incubation Center</Link>   
                                    <Link  to={'/funding'}>Funding Organization</Link>
                                    <Link  to={'/business'}>Business Competition</Link>
                                    <Link  to={'/international'}>International Universities</Link>
                                    <Link to={'/faqs'}>FAQS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section id="copyright" class="p-3 odd copyright">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12 col-md-6 p-3 text-center">
                <p>Copyright 2012 - 2020 Cambridge Advisors Network | All Rights Reserved</p>
            </div>
        </div>
    </div>

    <Helmet>        
             
{/*   
                      <script src={withPrefix('assets/js/vendor/jquery.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/jquery.easing.min.js.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/jquery.inview.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/popper.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/ponyfill.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/slider.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/animation.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/progress-radial.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/bricklayer.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/gallery.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/shuffle.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/cookie-notice.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/vendor/particles.min.js')} type="text/javascript" />
                      <script src={withPrefix('assets/js/main.js')} type="text/javascript" /> */}
                      {/* <script src={withPrefix('assets/js/map.js')} type="text/javascript" /> */}


                </Helmet>
</section>

</footer>





  
        </div>
    )
}



export default Footer
