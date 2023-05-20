import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div class="container-fluid py-5 wow fadeInUp servicepage" data-wow-delay="0.1s">
    <div class="container">
        <div class="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
            <h1 class="display-5 mb-0">Our Excellent Express <h5 class="services-heading" >Services</h5></h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5">
                        <i class="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h3 class="mb-3">Customs Made Easier</h3>
                        <p>Learn about all the tools uTrade has to offer for shipping across borders. Prepare and find international documents, estimate duties and taxes, search country profiles, harmonized codes and much more. </p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5 services-middle">
                        <i class="flaticon-surveillance d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h3 class="mb-3">Open a uTrade Account</h3>
                        <p>Benefit from our services and solutions designed to meet all of your shipping needs. Sign up for a uTrade shipping account below. </p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5 services-right">
                        <i class="flaticon-camera d-block display-1 fw-normal text-secondary mb-3"></i>
                     
                        <h3 class="mb-3">uTrade International Priority Express</h3>
                        <p>More delivery time options are available for your international shipments from January 3, 2022.</p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5">
                        <i class="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h3 class="mb-3">Customs Made Easier</h3>
                        <p>Learn about all the tools uTrade has to offer for shipping across borders. Prepare and find international documents, estimate duties and taxes, search country profiles, harmonized codes and much more. </p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5 services-middle">
                        <i class="flaticon-surveillance d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h3 class="mb-3">Open a uTrade Account</h3>
                        <p>Benefit from our services and solutions designed to meet all of your shipping needs. Sign up for a uTrade shipping account below. </p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div class="service-item bg-light border-bottom border-5 server-border-color rounded">
                    <div class="position-relative p-5 services-right">
                        <i class="flaticon-camera d-block display-1 fw-normal text-secondary mb-3"></i>
                     
                        <h3 class="mb-3">uTrade International Priority Express</h3>
                        <p>More delivery time options are available for your international shipments from January 3, 2022.</p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>





            {/* <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                    <div class="position-relative p-5">
                        <i class="flaticon-double d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h5 class="text-primary mb-0">CCTV</h5>
                        <h3 class="mb-3">Repair & Service</h3>
                        <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                    <div class="position-relative p-5">
                        <i class="flaticon-security-system d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h5 class="text-primary mb-0">CCTV</h5>
                        <h3 class="mb-3">Monitoring</h3>
                        <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                    <div class="position-relative p-5">
                        <i class="flaticon-recorder d-block display-1 fw-normal text-secondary mb-3"></i>
                        <h5 class="text-primary mb-0">CCTV</h5>
                        <h3 class="mb-3">Access Control</h3>
                        <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                        <a href="">Read More<i class="bi bi-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
  )
}

export default Services