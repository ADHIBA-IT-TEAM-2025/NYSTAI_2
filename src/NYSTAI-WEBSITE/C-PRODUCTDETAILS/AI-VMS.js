import React, { useEffect } from "react";
import "./A-detailspage.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCompass, faHeadset, faMicrochip, faPeopleArrows, faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import Footerproduct from "../A-LAYOUT/footer"
import banner from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/AIVMS-PRODCAT-BANNER.png"
import Blogimg1 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/Truck.png"
import Blogimg2 from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/School-bus.png"
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
                    <div class="video-background-holder">
                        <div class="video-background-overlay"></div>
                        <img src={banner} class="img-fluid w-100" alt="Banner Image" />
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

                {/* 4 CARDS PARALLEL */}
                <section className="container four-cards-parallal-section-cards-nys ">


                    <div className="common-top-div">
                        <h6 className="head-h-divtopic" >
                            <span style={{ color: "#1b6763" }}> AI-VMS </span>
                        </h6>
                        <h6 className="sechead-h-divtop" >
                            Centralized monitoring, real-time video streaming, intelligent analysis, secure storage.
                        </h6>
                    </div>

                    <div className="four-cards-parallal-main-cards mt-5">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Video Management & Recording Systems</h5>
                                        <p class="card-text">
                                        Efficient, secure, scalable, durable, weatherproof, high-res, multi-channel, networked, cloud-supported, AI-enabled, real-time, encrypted, smart-alerts, customizable, centralized, seamless, user-friendly, low-latency. 
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
                                        <h5 class="card-title">Cameras & Vision Systems</h5>
                                        <p class="card-text">Wide-angle, HD, night-vision, wireless, AI, auto-tracking, rugged, vehicle-mounted, panoramic, infrared, motion-detect, anti-glare, weatherproof, remote, vibration-resistant, compact, power-efficient, real-time. </p>
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
                                        <h5 class="card-title">Wireless Transmission & Accessories</h5>
                                        <p class="card-text">Long-range, interference-resistant, encrypted, low-latency, high-bandwidth, auto-sync, plug-and-play, power-efficient, dual-frequency, stable, multi-device, real-time, smart-config, portable, adaptive, cloud-supported, versatile, secure. </p>
                                    </div>
                                    <div>
                                        <img src={Prodcatimg3} class="Parallal-img-nys w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" style={{ marginTop: "8%" }}>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Specialty Surveillance Equipment</h5>
                                        <p class="card-text">Innovative, AI-integrated, interactive, customizable, multi-functional, real-time, vehicle-adaptive, energy-efficient, intuitive, privacy-focused, weatherproof, seamless, remote-access, HD, enhanced-safety, ultra-responsive, rugged, immersive, advanced.  </p>
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
                                        <h5 class="card-title">Storage & Data Management</h5>
                                        <p class="card-text">High-capacity, redundant, cloud-integrated, encrypted, low-latency, scalable, SSD-optimized, secure-access, AI-indexed, real-time backup, failover-protected, energy-efficient, seamless retrieval, automated archiving, multi-format. </p>
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
                                    <img src={Blogimg2} class="card-img-top" alt="..." />
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