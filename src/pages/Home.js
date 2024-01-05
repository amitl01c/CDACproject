import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer"
class Home extends React.Component{

    render(){
        return(
            <>
            <Header/>

            <div classNameName="container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://truviconline.com/front_assets/img/enterprise_services/building-management-system-services-provider.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.trumaxgroup.com/wp-content/uploads/2020/08/SERVICES-BANNER-FACILITY-MANAGEMENT-1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.cdn.thewebconsole.com/S3WEB8183/images/free-building-cleaning-promo.gif?m=eac16479f7f8ef2f173b217b6b4365ba.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>



            <div>

           
<section class="services-section">
    <div class="container">
        <center><h2>Our Services</h2></center>
        <br></br>
        <div class="row">
            <div class="col-md-4">
                <div class="service-item">
                    <img src="https://cdn.statically.io/img/safaiwale.in/wp-content/uploads/2020/08/water-tank-cleaning-services-near-me.jpg?quality=100&f=auto" alt="Service1" class="img-fluid" />
                    <center><h4>Water Cleaning Service</h4></center>
                    <p>Description of Service 1.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="service-item">
                    <img src="https://cdn.vectorstock.com/i/preview-1x/48/16/garden-workers-infographic-set-vector-45444816.jpg" alt="Service 2" class="img-fluid"/>
                    <h4>Security</h4>
                    <p>Description of Service 2.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="service-item">
                    <img src="https://www.shutterstock.com/image-vector/set-workers-various-construction-repair-260nw-1924862993.jpg" alt="Service 3" class="img-fluid"/>
                    <h4>Gardening</h4>
                    <p>Description of Service 3.</p>
                </div>
            </div>
        </div>
    </div>
</section>


            </div>
            
            <Footer/>
            </>
        )
    }
}

export default Home