import React, { useState } from 'react'
import OuterNavbar from '../components/OuterNavbar';
import { imgArr } from '../imgArr';
import Footer from '../components/Footer';
import Team from '../components/Team';

const Index = () => {
    const [bgImg, setBgImg] = useState(imgArr[0]);
    // const [counter, setCounter] = useState(0);

    // setInterval(() => {
    //     setBgImg(imgArr[counter]);
    //     if (counter == imgArr.length - 1) {
    //         setCounter(0);
    //     } else {
    //         setCounter(counter + 1);
    //     }
    // }, 4000);

    return (
        <div>
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            loading...
                        </div>
                    </div>
                </div>
            </div> */}
            <header>
                <div className="header-area header-transparent">
                    <OuterNavbar />
                    <div className="main-header header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="slider-area position-relative"
                    style={
                        { backgroundImage: `url('${bgImg}')` }
                    }>
                    <div className="slider-active">

                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInLeft" data-delay="0.1s">
                                                Do exercise
                                            </span>
                                            <h1 data-animation="fadeInLeft" data-delay="0.4s">
                                                Bring your life in comfort zone, a healthy life.
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Team />
            </main>
            <Footer />
        </div>
    )
}

export default Index
