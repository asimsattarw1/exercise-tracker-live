import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            {/* ? Preloader Start */}
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Preloader Start */}
            <header>
                {/*? Header Start */}
                <div className="header-area header-transparent">
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-3">
                                    <h2 className='text-warning pt-3'>Exercise Tracker</h2>
                                </div>

                                <div className="col-xl-9 col-lg-9 col-md-9">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        
                                        <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                            <Link to="/login" className="me-4 btn-outline-warning">
                                               Login
                                            </Link>

                                            <Link to="/signup" className="btn-outline-warning">
                                               Signup
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
            <main>
                {/*? slider Area Start*/}
                <div className="slider-area position-relative">
                    <div className="slider-active">
                        {/* Single Slider */}
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInLeft" data-delay="0.1s">
                                                with patrick potter
                                            </span>
                                            <h1 data-animation="fadeInLeft" data-delay="0.4s">
                                                Build Perfect body Shape for good and Healthy life.
                                            </h1>
                                            <a
                                                href="from.html"
                                                className="btn hero-btn"
                                                data-animation="fadeInLeft"
                                                data-delay="0.8s"
                                            >
                                                became a member
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Slider */}

                    </div>

                </div>
                {/* slider Area End*/}








                {/*? Date Tabs Start */}

                {/* Date Tabs End */}
                {/*? Contact form Start */}

                {/* Contact form End */}
                {/*? Blog Area Start */}

                <section class="wantToWork-area w-padding">
                    <div class="container">
                        <div class="row align-items-end justify-content-between">
                            <div class="col-lg-6 col-md-9 col-sm-9">
                                <div class="section-tittle">
                                    <span>oUR TEAM MAMBERS</span>
                                    <h2>Our Most Exprienced Trainers</h2>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-3">
                                <a href="services.html" class="btn wantToWork-btn f-right">More Services</a>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="team-area pb-150">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-img">
                                        <img src="assets/img/gallery/team1.png" alt="" />
                                        <div class="team-caption">
                                            <span>Creative derector</span>
                                            <h3><a href="#">Jhon Sunsaev</a></h3>

                                            <div class="team-social">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-img">
                                        <img src="assets/img/gallery/team2.png" alt="" />
                                        <div class="team-caption">
                                            <span>Creative derector</span>
                                            <h3><a href="#">Jhon Sunsaev</a></h3>

                                            <div class="team-social">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="single-team mb-30">
                                    <div class="team-img">
                                        <img src="assets/img/gallery/team3.png" alt="" />
                                        <div class="team-caption">
                                            <span>Creative derector</span>
                                            <h3><a href="#">Jhon Sunsaev</a></h3>

                                            <div class="team-social">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fas fa-globe"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <footer>
                {/*? Footer Start*/}
                <div
                    className="footer-area section-bg"
                    data-background="assets/img/gallery/section_bg03.png"
                >
                    <div className="container">
                        <div className="footer-top footer-padding">
                            {/* Footer Menu */}
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>COMPANY</h4>
                                            <ul>
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Company</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Press &amp; Blog</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Open hour</h4>
                                            <ul>
                                                <li>
                                                    <a href="#">Monday 11am-7pm</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Tuesday-Friday 11am-8pm</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Saturday 10am-6pm</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Sunday 11am-6pm</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>RESOURCES</h4>
                                            <ul>
                                                <li>
                                                    <a href="#">Home Insurance</a>
                                                </li>
                                                <li>
                                                    <a href="#">Travel Insurance</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Car Insurance</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Business Insurance</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Heal Insurance</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        {/* logo */}
                                        <div className="footer-logo">
                                            <a href="index.html">
                                                <img src="assets/img/logo/logo2_footer.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p className="info1">
                                                    GThe trade war currently ensuing between te US anfd
                                                    several natxions around thdhe globe, most fiercely with.
                                                </p>
                                            </div>
                                        </div>
                                        {/* Footer Social */}
                                        <div className="footer-social ">
                                            <a href="https://www.facebook.com/sai4ull">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                            <a href="">
                                                <i className="fab fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fas fa-globe" />
                                            </a>
                                            <a href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Footer Bottom */}
                        <div className="footer-bottom">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-12">
                                    <div className="footer-copy-right text-center">
                                        <p>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            Copyright © All rights reserved | This template is made with{" "}
                                            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                                            <a href="https://colorlib.com" target="_blank">
                                                Colorlib
                                            </a>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
            </footer>
            {/* Scroll Up */}

            {/* JS here */}
            {/* Jquery, Popper, Bootstrap */}
            {/* Jquery Mobile Menu */}
            {/* Jquery Slick , Owl-Carousel Plugins */}
            {/* One Page, Animated-HeadLin */}
            {/* Date Picker */}
            {/* Nice-select, sticky */}
            {/* counter , waypoint,Hover Direction */}
            {/* contact js */}
            {/* Jquery Plugins, main Jquery */}

        </div>
    )
}

export default Index
