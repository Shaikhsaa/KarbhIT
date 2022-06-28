import React from 'react'
import Button from './Button'

const Homepage = () => {
  return (
    <>
    <header id="home" class="header">
        <div class="overlay"></div>

        <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">  
            <div class="container">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="carousel-title">We Make<br/> Creative Design</h1>
                            <button class="btn btn-primary btn-rounded">Learn More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="carousel-title">We Make <br/> Responsive Design</h1>
                            <button class="btn btn-primary btn-rounded">Learn More</button>
                          </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="carousel-title">We Make <br/> Simple Design</h1>
                            <button class="btn btn-primary btn-rounded">Learn More</button>
                          </div>
                    </div>
                </div>
            </div>        
        </div>

        <div class="infos container mb-4 mb-md-2">
            <div class="title">
                <h6 class="subtitle font-weight-normal">Are locking for</h6>
                <h5>Lorem inpsum</h5>
                <p class="font-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
           
        </div>
    </header>



    <section class="section">
        <div class="container">
            <h6 class="xs-font mb-0">Blanditiis unde illum earum</h6>
            <h3 class="section-title mb-4">Expertises</h3>

            <div class="row text-center">
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="card border-0 text-dark">
                        <img class="card-img-top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"/>
                        <span class="card-body">
                            <h4 class="title mt-4">Codding &amp; Designing</h4>
                            <p class="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </span>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="card border-0 text-dark">
                        <img class="card-img-top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"/>
                        <span class="card-body">
                            <h4 class="title mt-4">Graphic Design</h4>
                            <p class="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </span>
                    </a>
                </div>
                <div class="col-lg-4">
                    <a href="javascript:void(0)" class="card border-0 text-dark">
                        <img class="card-img-top" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/11/dark-wallpapers.jpg" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, ollie Landing page"/>
                        <span class="card-body">
                            <h4 class="title mt-4">Development</h4>
                            <p class="xs-font">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    

    
	
	{/* <!-- core  --> */}
    <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    {/* <!-- bootstrap 3 affix --> */}
	<script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>
    
    {/* <!-- Owl carousel  --> */}
    <script src="assets/vendors/owl-carousel/js/owl.carousel.js"></script>


    {/* <!-- Ollie js --> */}
    <script src="assets/js/Ollie.js"></script>

   
    </>
  )
}

export default Homepage;