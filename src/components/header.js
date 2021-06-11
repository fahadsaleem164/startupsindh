import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from '../images/logo.png'


const Header = ({ siteTitle }) => (
 
                  <header id="header">
                          <nav class="navbar navbar-expand navbar-fixed" style={{background:'white'}}>
                                
                                  <div class="container-fluid" style={{width: "71%"}}>
                                
                                      <ul class="navbar-nav items">
                                      <ul class="navbar-nav action">
                                          <li class="nav-item ml-3">
                                              {/* <img src={Logo} style={{maxWidth:'51%'}} /> */}
                                          </li>
                                      </ul>
                                          <li class="nav-item dropdown">
                                              <a  class="nav-link"><Link to={'/'}>HOME</Link></a>
                                          </li>

                                          <li class="nav-item dropdown">
                                              <a style={{color:'black'}} href="#" class="nav-link">About</a>
                                              <ul class="dropdown-menu">
                                                  <li class="nav-item dropdown">
                                                      <Link class="nav-link" to={'/can-and-msf'}>Organizers</Link>
                                                      <Link class="nav-link" to={'/sponsors_and_partners'}>Sponsors/Partners</Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          {/* <li class="nav-item dropdown">
                                              <Link class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                                          </li> */}


                                          <li class="nav-item dropdown">
                                              <Link  style={{color:'black'}} class="nav-link" to={'/blue_economy'}>Blue Economy</Link>
                                              <ul class="dropdown-menu">
                                              <li class="nav-item dropdown">
                                                  <Link class="nav-link" to={'/blue_economy'}>Thematic Areas</Link>
                                                  </li>
                                                  <li class="nav-item dropdown">
                                                  <Link class="nav-link" to={'/faqs'}>FAQS</Link>
                                                  </li>
                                              </ul>
                                          </li>

                                          <li class="nav-item dropdown">
                                              <a href="#"  style={{color:'black'}} class="nav-link">Ideas<i class="icon-arrow-down"></i></a>
                                              <ul class="dropdown-menu">
                                                  <li class="nav-item dropdown">
                                                      <Link to={'/bestartup'} class="nav-link">Startups</Link>
                                                      <Link to={'/smallscale'} class="nav-link">Small Scale</Link>
                                                      <Link to={'/medscale'} class="nav-link">Medium Scale</Link>
                                                      <Link to={'/largescale'} class="nav-link">Large Scale</Link>
                                                  </li>
                                              </ul>
                                          </li>


                                          <li class="nav-item dropdown">
                                              <a href="#"  style={{color:'black'}} class="nav-link">Tracks</a>
                                              <ul class="dropdown-menu">
                                                  <li class="nav-item dropdown">
                                                    
                                                      <Link class="nav-link" to={'/incubation'}>Incubation Tracks</Link>   
                                                      <Link class="nav-link" to={'/funding'}>Funding Orgnizations</Link>
                                                      <Link class="nav-link" to={'/business'}>Business Competition</Link>
                                                      <Link class="nav-link" to={'/international'}>International Universities</Link>
                                                      
                                                  </li>
                                              </ul>
                                          </li>

                                          <li class="nav-item dropdown">
                                              <Link  style={{color:'black'}} to={'/bechallenge'} class="nav-link">Challenge 2021</Link>
                                          </li>

                                          <li class="nav-item dropdown">
                                                <Link  style={{color:'black'}} class="nav-link" to={'/ideathon'}>Ideathon</Link>
                                          </li>

                                          <li class="nav-item dropdown">
                                              <a><Link to={'/resources'}  style={{color:'black'}} class="nav-link">Resources</Link></a>
                                          </li>

                                          <li class="nav-item dropdown">
                                              <a href="#"  style={{color:'black'}} class="nav-link">News & Events<i class="icon-arrow-down"></i></a>
                                              <ul class="dropdown-menu">
                                                  <li class="nav-item dropdown"> 
                                                      <Link class="nav-link" to={'/news'}>News</Link>
                                                      <Link class="nav-link" to={'/events'}>Events</Link>   
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>

                                      <ul class="navbar-nav action">
                                          <li class="nav-item ml-3">
                                              <Link href="#" to={'/contact_us'}  class="smooth-anchor btn ml-lg-auto primary-button">CONTACT US</Link>
                                          </li>
                                      </ul>


                                  </div>
                              </nav> 
                  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
