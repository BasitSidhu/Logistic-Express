import React from "react";
import image1 from "../../img/plane.jpg";
import "./infoTab.css";

const InfoTab = () => {
  return (
  //   <div className="InfoTab">
  //  <img class="w-100 h-100" src={image1} alt="Image" />


  //   </div>
    <div class="container-fluid p-0 ">
      <div
        id="header-carousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100" src={image1} alt="Image" />
            <div class="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center  infoTab-position infoTab">
              <div class=" p-5  slogan" style={{ maxWidth: "900px", marginTop:"6%", marginLeft:"6%", marginLeft: "44%" }}>
                <div>
                  <h3 class="infoTabtext ">Fastest, Quick and Easy</h3>
                </div>
                <div>
                  <h1 class="display-1 text-white mb-md-4">
                    We get it done, so you don’t have to worry.
                  </h1>
                </div>
                
              </div>
              <div className="trackingTab">
                  <input className="infoTab_input" placeholder="Track ID" />
                  <button href="" class="btn btn-primary py-md-3 px-md-5">
                    Track ID
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
