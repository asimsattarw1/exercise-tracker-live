import React from 'react';
import asim from '../assets/images/asim.jpg';
import mobeen from '../assets/images/mubeen.jpeg';
import raheel from '../assets/images/raheel.jpg';

const Team = () => {
    return (
        <div>
            <section className="wantToWork-area w-padding">
                <div className="h-auto m-0 p-0">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-6 col-md-9 col-sm-9">
                            <div className="section-tittle">
                                <span>oUR TEAM MAMBERS</span>
                                <h2>Our Most Exprienced Teamates</h2>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-3">
                        </div>
                    </div>
                </div>
            </section>

            <div className="team-area">
                <div className=" h- auto p-5">
                    <div className="row" style={{height:'450px', overflow:'hidden'}}>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src={asim} alt="" />
                                    <div className="team-caption">
                                        <span>Creative developer</span>
                                        <h3 className='text-center'>
                                            <a href="#">M Asim Sattar</a>
                                        </h3>

                                        <div className="team-social">
                                            <ul className='d-flex justify-content-center'>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-globe"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team mb-30">
                                <div className="team-img">
                                    <img src={mobeen} alt="" />
                                    <div className="team-caption">
                                        <span>Creative developer</span>
                                        <h3 className='text-center'>
                                            <a href="#">Mobeen-ul-Hassan Hashmi</a>
                                        </h3>

                                        <div className="team-social">
                                            <ul className='d-flex justify-content-center'>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-globe"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team">
                                <div className="team-img">
                                    <img src={raheel} alt="" />
                                    <div className="team-caption">
                                        <span>Creative developer</span>
                                        <h3 className='text-center'>
                                            <a href="#">Raheel Shakeel</a>
                                        </h3>

                                        <div className="team-social">
                                            <ul className='d-flex justify-content-center'>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-globe"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
