import React from 'react';
import logo from "../../img/UTRADE EXPRESS-01.png";
import phone from "../../img/vibration.png";
import './Topbar.css';

const TopBarStart = () => {
  return (
     <div class="container-fluid px-5 d-none d-lg-block">
        <div class="row gx-5 align-items-center ">
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-start">
                    {/* <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i> */}
                    <img src={phone} alt='phone' className='topbar-phone'  />
                    <h2 class="mb-0">+012 345 6789</h2>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="d-flex align-items-center justify-content-center">
                    <a href="index.html" class="navbar-brand ms-lg-5">
                        <img src={logo} alt='icon' style={{width:"250px",height:"100px"}} />
                        {/* <h1 class="m-0 display-4 text-primary"><span class="text-secondary">Farm</span>Fresh</h1> */}
                    </a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="d-flex align-items-center justify-content-end topbar-social">
                    <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-primary btn-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-primary btn-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBarStart