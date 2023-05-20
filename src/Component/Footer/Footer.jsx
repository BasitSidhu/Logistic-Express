import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <><div class="container-fluid bg-footer Footer-bg text-white mt-5">
          <div class="container">
              <div class="row gx-5">
                  <div class="col-lg-8 col-md-6">
                      <div class="row gx-5">
                          <div class="col-lg-4 col-md-12 pt-5 mb-5">
                              <h4 class="text-white mb-4">Get In Touch</h4>
                              <div class="d-flex mb-2">
                                  <i class="bi bi-geo-alt text-white me-2"></i>
                                  <p class="text-white mb-0">123 Street, New York, USA</p>
                              </div>
                              <div class="d-flex mb-2">
                                  <i class="bi bi-envelope-open text-white me-2"></i>
                                  <p class="text-white mb-0">info@example.com</p>
                              </div>
                              <div class="d-flex mb-2">
                                  <i class="bi bi-telephone text-white me-2"></i>
                                  <p class="text-white mb-0">+012 345 67890</p>
                              </div>
                              <div class="d-flex mt-4">
                                  <a class="btn Footer-social  btn-square rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                                  <a class="btn Footer-social  btn-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn Footer-social  btn-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                  <a class="btn Footer-social  btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
                              </div>
                          </div>
                          <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                              <h4 class="text-white mb-4">Quick Links</h4>
                              <div class="d-flex flex-column justify-content-start">
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Home</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>About Us</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Our Services</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Meet The Team</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Latest Blog</a>
                                  <a class="text-white" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Contact Us</a>
                              </div>
                          </div>
                          <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                              <h4 class="text-white mb-4">Popular Links</h4>
                              <div class="d-flex flex-column justify-content-start">
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Home</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>About Us</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Our Services</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Meet The Team</a>
                                  <a class="text-white mb-2" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Latest Blog</a>
                                  <a class="text-white" href="#"><i class="bi bi-arrow-right text-white me-2"></i>Contact Us</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mt-lg-n5">
                      <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 footer-email p-5">
                          <h4 class="footer-text">Newsletter</h4>
                          <h6 class="footer-text">Subscribe Our Newsletter</h6>
                          <p class="footer-text">Feel to share your email we will accmodate you as soon as possible.</p>
                          <form action="">
                              <div class="input-group">
                                  <input type="text" class="form-control border-white p-3" placeholder="Your Email"/>
                                      <button class="btn Footer-btn-primary">Sign Up</button>
                                  </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div><div class="container-fluid bg-dark text-white py-4">
              <div class="container text-center">
                  <p class="mb-0">&copy; <a class="text-secondary fw-bold" href="#">uTrade Express</a>. All Rights Reserved. Designed by uTrade Express<a class="text-secondary fw-bold" href="https://utrade.com">uTrade</a></p>
              </div>
          </div></>
  )
}

export default Footer