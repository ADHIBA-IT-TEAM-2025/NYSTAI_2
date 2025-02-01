import React, { useEffect } from "react";
import "./A-detailspage.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCompass, faHeadset, faMicrochip, faPeopleArrows, faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import Footerproduct from "../A-LAYOUT/footer"
import Blogimg1 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/MAnufacturin-Companies.png"
import Blogimg2 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Warehouse.png"
import Blogimg3 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Corporates.png"
import Blogimg4 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Companies.png"
import singleproimg from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/singleproimg.png"


export default function Industrialdet() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <body className="design1details">

                <section>
                    <div class="video-background-holder">
                        <div class="video-background-overlay"></div>
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                            <source src="https://huykhong.com/codepen/landing.video.mp4" type="video/mp4" />
                        </video>
                        <div class="video-background-content container h-100">
                            <div class="d-flex h-100 text-center align-items-center">
                                <div class="w-100 text-white">
                                    <h1 class="display-4">Landing Page with video background</h1>
                                    <p class="lead mb-0">Made with HTML5 and Bootstrap 4</p>
                                    <p class="lead">
                                        <a href="#" class="btn btn-light">Click Here to Enter</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="flex-container-nystai-scroll">
                    <div class="slider-container">
                        <ul class="slider">
                            <li class="slider__slide">
                                <div class="slide__content" >   <FontAwesomeIcon icon={faMicrochip} className="me-3" style={{ fontSize: "3vh", color: '#00aaff' }} />TECHNOLOGIES</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" >   <FontAwesomeIcon icon={faPeopleArrows} className="me-3" style={{ fontSize: "3vh", color: '#ff6600' }} />INTEGRATED SOLUTIONS</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" > <FontAwesomeIcon icon={faCompass} className="me-3" style={{ fontSize: "3vh", color: '#28a745' }} />PRODUCT</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" ><FontAwesomeIcon icon={faShieldVirus} className="me-3" style={{ fontSize: "3vh", color: '#ff0000' }} />PROTECT PLAN</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" >  <FontAwesomeIcon icon={faServer} className="me-3" style={{ fontSize: "3vh", color: '#6c757d' }} />SERVICES</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" >  <FontAwesomeIcon icon={faHeadset} className="me-3" style={{ fontSize: "3vh", color: '#007bff' }} />SUPPORT</div>
                            </li>
                            <div class="d-flex">
                                <div class="vr"></div>
                            </div>
                            <li class="slider__slide">
                                <div class="slide__content" >  <FontAwesomeIcon icon={faBlog} className="me-3" style={{ fontSize: "3vh", color: '#6610f2' }} />BLOGS</div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <h1 style={{ textAlign: "center" }}>Industrial <span style={{ color: "#1b6763" }}> AI NVR</span></h1>
                </div>

                {/* LEFT RIGHT CARDS */}
                <section className="parallal-text-card-nys pt-5 pb-3">
                    <div className="container">
                        <div className="col-9 parallal-text-card-heading-nys">
                            <h2><span>Robust industries design  </span>with advanced AI powered</h2>
                        </div>
                        <div className="text-img-nys">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-left-nys">
                                        <h6>The Industrial Alarm Panel is designed for demanding industrial environments, providing reliable security and monitoring capabilities. It supports a wide range of communication protocols and integrates seamlessly with industrial systems, ensuring real-time monitoring and control. With a rugged design, this alarm panel is ideal for factories, warehouses, and other industrial settings where durability and performance are critical. </h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 img-right-nys">
                                    <img src={singleproimg} className="img-fluid w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-5 container key-features-products-section-nys">
                    <div className="key-features-products-nys">
                        <div className="mb-5">
                            <h3 style={{ textAlign: "center" }}>KEY <span style={{ color: "#1b6763" }}>FEATURES</span></h3>
                        </div>

                        <div className="row">
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Cloud storage</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Full HD video</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">In built device alarm</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Motion senstivity control</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Perimeter Alarm</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Person detection</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <center>
                                <div className="col-lg-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Record live</h5>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </section>

                <section className="mt-5 mb-5">
                    <div className="adatable-head">
                        <h5>ADAPTABLE SCENARIO</h5>
                    </div>
                    <div className="container">
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg1} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg2} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg3} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg4} class="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footerproduct />

            </body >
        </>
    )
}