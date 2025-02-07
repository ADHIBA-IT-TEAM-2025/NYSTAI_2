import React, { useEffect } from "react";
import "./A-detailspage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faCompass, faHeadset, faMicrochip, faPeopleArrows, faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import Footerproduct from "../A-LAYOUT/footer"
import banner from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/Kitchen Safety Banner.png"
import Blogimg1 from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/blog-img-1.png"
import singleproimg from "../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/PRODUCTDETAILS/singleproimg.png"

export default function Kitchendet() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <body className="design1details">

                <section>
                    <section>
                        <div class="video-background-holder">
                            <div class="video-background-overlay"></div>
                            <img src={banner} class="img-fluid w-100" alt="Banner Image" />
                        </div>
                    </section>
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

                <div className="common-top-div">
                    <h6 className="head-h-divtopic" >
                        <span style={{ color: "#1b6763" }}>KITCHEN</span>SAFETY
                    </h6>
                    <h6 className="sechead-h-divtop"  style={{color:"#8c8c8c"}} >
                        Efficient valve control, enhanced safety, seamless integration, reliable operation.
                    </h6>
                </div>

                <section className=" container-fluid parallal-text-card-nys pt-5 pb-3">

                    <div className="container">
                        <div className=" col-lg-9 col-md-12 col-sm-12  parallal-text-card-heading-nys">
                            <h2><span>Precise control for</span> enhanced safety.</h2>
                        </div>
                        <div className="text-img-nys">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="text-left-nys">
                                        <h6>The "FIRE SAFETY" category includes the E-Valve Manipulator, E-Valve, and Kitchen Automation systems. These products ensure precise valve control, efficient operation, and enhanced safety in critical applications. With user-friendly interfaces, durability, and seamless system integration, they provide reliable solutions for fire safety, kitchen automation, and overall operational safety.   </h6>
                                    </div>
                                </div>
                                <div className="col-lg-6 img-right-nys" style={{ marginTop: 0 }} >
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
                                        <h5 class="card-title">Smart Smoke & Gas Detection</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Automatic Fire Suppression</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Childproof Safety Locks</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Temperature Monitoring</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Smart Lighting & Motion Sensors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Water Leak Detection</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <center>
                                <div className="col-lg-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Remote Control & Monitoring</h5>
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