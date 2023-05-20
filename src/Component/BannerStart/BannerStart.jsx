import React from 'react';
import './BannerStart.css';
import ship from '../../img/around-the-world.png';
import  business from '../../img/profit.png';
import money from '../../img/budget.png';


const BannerStart = () => {
  return (
 
    <div class="container-fluid banner mb-5 bannerStart">
    <div class="container ">
        <div class="bannerStart-option">
            <div class="">
                <div className='parent-circle'>
                <div class=" bg-shipnow " >
                    <div className="information">
                        <img src={ship} alt='' style={{    width: '50px'}}/>
                    <span class="text-bannerStart mb-3">Ship Now</span>
                    {/* <p class="text-bannerStart"><b>Find Right Service,for fast,<br/> quick and easy delivery</b></p> */}
                    {/* <a class="text-bannerStart fw-bold" href="">Read More<i class="bi bi-arrow-right ms-2"></i></a> */}
                    </div>
                </div>
                </div>
                
            </div>
            <div class="">
            <div className='parent-circle-money'>
                <div class=" bg-money " >
                <div className="information">
                <img src={money} alt='' style={{    width: '50px'}}/>
                    <span class="text-bannerStart mb-3">Get a Quote</span>
                    {/* <p class="text-bannerStart"><b>Estimate cost to share and<br/> compare. We are offering <br/>you the best of best option.<br/> Hurry Up to join</b></p> */}
                    {/* <a class="text-bannerStart fw-bold" href="">Read More<i class="bi bi-arrow-right ms-2"></i></a> */}
                    </div>
                    </div>
               </div>
            </div>
            <div class="">
            <div className='parent-circle'>
                <div class=" bg-business " >
                <div className="information">
                <img src={business} alt='' style={{    width: '50px'}}/>
                    <span class="text-bannerStart mb-3">uTrade for Business</span>
                    {/* <p class="text-bannerStart"><b>Shippig regularly? Request<br/> a business account and<br/> profit exclusive<br/> benefits</b></p> */}
                    {/* <a class="text-bannerStart fw-bold" href="">Read More<i class="bi bi-arrow-right ms-2"></i></a> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BannerStart