import React, { useEffect } from "react";
import "./A-detailspage.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBlog, faCompass, faHeadset, faMicrochip, faPeopleArrows, faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { faTint, faBroadcastTower, faMobileAlt, faShieldAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import Footerproduct from "../A-LAYOUT/footer"
import rigimghyb from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Hybrid AIoT NVR.png"
import Blogimg1 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/blog-img-1.png"
import Blogimg2 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/green-innovation-in-commercial-displays-banner 1.png"
import Blogimg3 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/logistics-management-&-hikvision-white-paper 1.png"
import Blogimg4 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/non-visible-light-technologies-in-security-1280x444 1.png"
import Blogimg5 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/top-5-trends-for-the-aiot-industry-in-2025 1.png"
import Prodcatimg1 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-1.png"
import Prodcatimg2 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-2.png"
import Prodcatimg3 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-3.png"
import Prodcatimg4 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-4.png"
import Prodcatimg5 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/prod-cate-img-5.png"

export default function Aivmsdet() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <body className="design1details">

                <section>
                    {/* <!-- Background video --> */}
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

                {/* <section className="mt-5 mb-5 ">
                <div style={{maxWidth: "70rem;"}} class="u-mb-96 px-5 mt-5 mb-3"><h2 class="h0">Smart video storage, <br/>AI powered surveillance </h2></div>
                    <div class="vhcf-section">
                        <div class="vhcf-row">
                            <div class="vhcf-column">
                                <div class="container vhcf-module px-5">
                                    <div class="vhcf-promo_description">
                                    <h2 class="h0">Smart video storage, <br/>AI powered surveillance </h2>
                                        <p>The NYSTAI AI-IoT Hybrid NVR combines NVR and alarm functionality into an affordable, integrated security system. It supports video surveillance, AI video analysis, intercom, one-click alarms, access control, attendance, fire alarms, and more, with applications spanning security, fire safety, and digital classrooms. </p>
                                    </div>
                                </div> 
                                <div class="vhcf-module">
                                    <img src={rigimghyb} alt=""/>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section> */}

                {/* 4 CARDS PARALLEL */}
                <section className="container four-cards-parallal-section-cards-nys ">

                    <div className="mt-5 mb-5">
                        <h1 style={{ textAlign: "center" }}>AI-VMS  <span style={{ color: "#1b6763" }}> </span></h1>
                    </div>

                    <div className="four-cards-parallal-main-cards mt-5">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">AI-Powered Cameras:</h5>
                                        <p class="card-text">
                                            AI-powered cameras offer motion detection, real-time alerts, and
                                            intelligent analysis, providing smart, reliable security for indoor and
                                            outdoor environments.
                                        </p>
                                    </div>
                                    <div class="image-container">
                                        <img src={Prodcatimg1} class="Parallal-img-nys w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{ marginTop: "8%" }}>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Specialized Cameras: </h5>
                                        <p class="card-text">Specialized cameras offer wide-angle coverage, infrared vision, and solar power, providing advanced security for residential and commercial spaces. </p>
                                    </div>
                                    <div>
                                        <img src={Prodcatimg2} class="Parallal-img-nys w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row " style={{ marginTop: "-6.5%" }}>
                            <div className="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Outdoor & Wireless Cameras: </h5>
                                        <p class="card-text">Outdoor and wireless cameras provide flexible, weather-resistant surveillance for remote areas, offering reliable performance without complicated wiring. </p>
                                    </div>
                                    <div>
                                        <img src={Prodcatimg3} class="Parallal-img-nys w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{ marginTop: "8%" }}>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Pan-Tilt-Zoom (PTZ) Cameras: </h5>
                                        <p class="card-text">PTZ cameras offer flexible coverage with pan, tilt, and zoom features, ideal for large properties and sensitive zones. </p>
                                    </div>
                                    <div>
                                        <img src={Prodcatimg4} class="Parallal-img-nys w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "-6.5%" }}>
                            <div className="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Battery-Powered Cameras: </h5>
                                        <p class="card-text">Battery-powered cameras offer wireless, flexible security solutions with motion detection, ideal for indoor and outdoor use in remote areas. </p>
                                    </div>
                                    <div>
                                        <img src={Prodcatimg5} class="Parallal-img-nys w-100" />
                                    </div>
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
                                    <img src={Blogimg1} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg1} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <img src={Blogimg1} class="card-img-top" alt="..." />
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