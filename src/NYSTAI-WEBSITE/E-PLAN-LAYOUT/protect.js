import React, { useEffect, useState } from 'react';
import "./protplan.css";
import servicesbanner from '../IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protect-banner.png'
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import ourservices1 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/ourservices (1).png'
import ourservices2 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/ourservices (2).png'
import protect1 from '../IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (1).png'
import protect2 from '../IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (3).png'
import protect3 from '../IMAGES-VIDEOS/D-IMG-PLAN-LAYOUT/protectplan-1 (2).png'
import Footerproduct from "../A-LAYOUT/footer";
import $ from 'jquery'

export default function Protectplan() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [2, 1].includes(product.category));

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    // video overlayer: 
    return (
        <>

            <body className='protectplan'>

                <section className="Protect-plan-page-text-nys container">
                    <p>Overview</p>
                    <div className="reveal-text">
                        <h2 className="mb-4" style={{ color: "#1b6763" }}>
                            Nystai’s Protect plan
                        </h2>
                    </div>
                    <p>
                        NYSTAI’s Protect Plan delivers advanced, customizable protection for diverse domains, including industries, VMS, hospitals, and more. With 24/7 monitoring, AI-powered smart insights, and proactive diagnostics, our solutions ensure seamless operations, enhanced security, and energy efficiency. Tailored to meet unique requirements, the plan includes professional-grade emergency response options and expert support on demand. Whether safeguarding industrial systems or enhancing healthcare facilities, NYSTAI combines reliability and innovation to provide comprehensive protection and peace of mind.
                    </p>
                </section>

                <section className="ser-header-sec">
                    <div class="card  text-white">
                        <img class="card-img" src={servicesbanner} alt="Card image" />
                        <div class="container card-img-overlay d-flex justify-content-start ">
                            <div className="card-img-overlay-div ">
                                <h2 class="card-title">Additional services that provide <br /> reliable support when you need it most.</h2>
                                <p class="card-text">Enhance your security with professional monitoring and emergency response services, <br />available as an add-on to your eligible Nystai Protect Plan.</p>
                                <button type="button" class="btn btn-secondary">Contact us</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid ser-ourservices-sec">
                    <div className="services-types-head">
                        <p> Security Excellence</p>
                        <h2>NYSTAI Protect Plan: Revolutionizing Security <br />and Efficiency Across Industries</h2>
                    </div>

                    <section className="container service-our-serv-card">

                        <div className="card mb-3">
                            <div className="row g-5">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={protect1}
                                        className="img-fluid rounded-start"
                                        alt="Specialized Safeguarding"
                                    />
                                </div>
                                <div className="col-md-8 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Comprehensive Protection Across Domains</h5>
                                        <p className="card-text">
                                            NYSTAI’s Protect Plan offers robust, customizable solutions for diverse domains like industries, hospitals, VMS, and smart cities. With a focus on reliability, innovation, and efficiency, the plan ensures uninterrupted operations and enhanced security. Tailored to meet unique needs, it empowers organizations to safeguard assets and optimize performance effortlessly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card mb-3" >
                            <div class="row g-5">
                                <div class="col-md-8 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div class="card-body  text-center">
                                        <h5 class="card-title">Advanced Features for Seamless Operations</h5>
                                        <p class="card-text">From AI-powered monitoring to 24/7 system alerts, the Protect Plan delivers proactive diagnostics and smart energy optimization. With comprehensive video history, customizable access controls, and professional-grade emergency response, NYSTAI ensures users have complete control and peace of mind, making daily operations smoother, smarter, and more secure than ever.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={protect2} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="row g-5">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={protect3}
                                        className="img-fluid rounded-start"
                                        alt="Specialized Safeguarding"
                                    />
                                </div>
                                <div className="col-md-8 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Commitment to Excellence and Support</h5>
                                        <p className="card-text">
                                            NYSTAI is dedicated to providing unparalleled customer service with expert support available anytime. By combining advanced technology with user-centric customization, the Protect Plan strengthens reliability and operational excellence. Whether for small businesses or large enterprises, NYSTAI’s solutions guarantee long-term value, ensuring your systems run seamlessly while protecting what matters most.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </section>

                <section>
                    <section className='bgfpc'>
                        <div id="orange-sectionmain3">
                            <h1 id="orange-section-title">Our Integrated Video alarm linkage solution <br />is perfect for the vigilant homeowner</h1>
                            {/* <p id="orange-section-desc">  Who wants to keep an eye on their home and family (including beloved pets) - even when you can’t be there.<br />
        You will have full control with the Ultimate NystAI Security System. With more sensors, more cameras plus home automation equipment,<br />
        you and your family will be prepared for ultimate monitoring and anything  unexpected, under a single control panel & App.</p> */}
                        </div>
                    </section>
                </section>

                <section>
                    <div className="services-types-head text-center mt-5">
                        <p>Get with it</p>
                        <h2>Shop popular kits</h2>
                    </div>

                    <main className="container page-section Product-display mb-5" id="Product display">
                        <div className="text-center">
                            <h3 class="rrmc-article-desc-title" >PRODUCT DISPLAY</h3>
                            <p class="rrmc-article-desc-intro">Our innovative IFPDs (Interactive Flat Panel Displays) provide crystal-clear visuals, intuitive touch functionality, and seamless integration,<br /> revolutionizing presentations, learning, and collaboration across various industries.</p>
                        </div>
                        <div className="prod-row-card-nys">
                            {filteredProducts.map((product) => (
                                <div className="prod-column-card-nys mb-2" key={product.id}>
                                    <div className="card pro_card-des" onClick={() => handleCardClick(product)}>
                                        <div className="image-container">
                                            <img alt="Product" src={product.image} className="img-fluid rounded thumbnail-image" />
                                        </div>
                                        <div className="card-body product-detail-container">
                                            <h6>{product.title}</h6>
                                            <p>{product.Cardsingleword}</p>
                                            <p className="dress-name">{product.Cardthreeword}</p>
                                            <div className="d-flex justify-content-between align-items-end btn-modaln">
                                                <h5 className="dress-name1">{product.ModelNumber}</h5>
                                                <div className="product-detail">
                                                    <button className="btn pulse">MORE INFO</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                        {modalOpen && selectedProduct && (
                            <div className="modal-overlay" onClick={handleCloseModal}>
                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                                    <section className='modal-pro'>
                                        <div class="card-wrapper " onClick={handleCloseModal}>
                                            <div class="card">
                                                <div class="product-imgs">
                                                    <div class="img-display">
                                                        <div class="img-Features">
                                                            <img src={selectedProduct.modalimage1} alt="shoe image /" />
                                                        </div>
                                                    </div>
                                                    <div class="img-select">
                                                        <div class="img-item">
                                                            <a data-id="1">
                                                                <img src={selectedProduct.modalimage1} alt="shoe image /" />
                                                            </a>
                                                        </div>
                                                        <div class="img-item">
                                                            <a data-id="2">
                                                                <img src={selectedProduct.modalimage1} alt="shoe image /" />
                                                            </a>
                                                        </div>
                                                        <div class="img-item">
                                                            <a data-id="3">
                                                                <img src={selectedProduct.modalimage1} alt="shoe image /" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="product-content">
                                                    <h2 class="product-title">{selectedProduct.title}</h2>
                                                    <h5 className='mt-4'>Smart Features: </h5>
                                                    <div class="social-links">
                                                        <a><img src={icon1} className='img-fluid' /></a>
                                                        <a><img src={icon8} className='img-fluid' /></a>
                                                        <a><img src={icon3} className='img-fluid' /></a>
                                                        <a><img src={icon7} className='img-fluid' /></a>
                                                        <a><img src={icon9} className='img-fluid' /></a>
                                                    </div>
                                                    <div class="product-detail">
                                                        <p>{selectedProduct.modalDescriptionp}</p>

                                                        <h5>Key Features </h5>
                                                        <ul>
                                                            <li> {selectedProduct.Mkeyone}</li>
                                                            <li> {selectedProduct.Mkeytwo}</li>
                                                            <li> {selectedProduct.MkeyTHREE}</li>
                                                            <li> {selectedProduct.MkeyFOUR}</li>
                                                        </ul>
                                                    </div>
                                                    <div class="purchase-info ">
                                                        <button type="button me-2" class="btn ">Add to Cart <i class="fas fa-shopping-cart"></i></button>
                                                        <button type="button" class="btn ms-3">Shop now <i class="fas fa-shopping-cart"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}
                    </main>


                </section>

                <section className="mb-5 build-ur-systems-nys">
                    <div className="container text-center">
                        <h2>Build your Plans</h2>
                        <p>Find the ideal setup for your entire home.</p>
                        <button className="btn btn-outline-secondary">Take a Quiz</button>
                    </div>
                </section>

                <Footerproduct />

            </body>

        </>
    );
}
