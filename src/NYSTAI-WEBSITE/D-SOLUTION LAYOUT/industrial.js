import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from '../A-LAYOUT/footer';
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// images
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banner-industrial.png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'

import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/indus-solu-icon -2 (1).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/indus-solu-icon -2 (2).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/indus-solu-icon -1.jpg'

import indusvideo from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/indu-video-1.mp4'
import smartthree1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/industry (3).png'
import smartthree2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/industry (1).png'
import smartthree3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/industry (2).png'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouse, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faThunderstorm, faWarehouse } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

export default function Industrial() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [2].includes(product.category));

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const [activeSection, setActiveSection] = useState('Overview');

    useEffect(() => {
        const sections = document.querySelectorAll('.page-section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const [activeTab, setActiveTab] = useState(1);
    const [fade, setFade] = useState(true);

    const handleTabClick = (tabNumber) => {
        setFade(false);
        setTimeout(() => {
            setActiveTab(tabNumber);
            setFade(true);
        }, 300);
    };

    return (
        <>

            <header className="placeholder-section">
                <div class=" card ">
                    <img class="card-img" src={edubannerlanding} alt="Card image" />
                </div>
            </header>

            <Navbar collapseOnSelect expand="lg" className="sub-nav-edu-solu">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="m-auto">
                            <Nav.Link >
                                <a className={`menu-item-link ${activeSection === 'Overview' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('Overview')}>
                                    Overview
                                </a>
                            </Nav.Link>
                            <Nav.Link>
                                <a className={`menu-item-link ${activeSection === 'What we offer' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('What we offer')}>
                                    What we offer
                                </a>
                            </Nav.Link>
                            <Nav.Link >
                                <a className={`menu-item-link ${activeSection === 'Features' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('Features')}>
                                    Features
                                </a>
                            </Nav.Link>
                            <Nav.Link >
                                <a className={`menu-item-link ${activeSection === 'Product display' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('Product display')}>
                                    Product display
                                </a>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section id="main-content" className="page-sections">

                <section className="container page-section mt-5 mb-5" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34"><span style={{color:"#1b6763"}}> NYSTAI’S&nbsp;</span>  INDUSTRY SOLUTIONS</h3>
                        <p className="text-block-60" >
                            In industries, automation, security, and energy efficiency are critical for smooth operations and safeguarding assets. NYSTAI’s industrial solutions integrate CCTV cameras, alarms, and automation systems into a wired setup, ensuring reliable performance in large-scale environments. Coupled with solar-powered options, our solutions not only enhance security but also improve energy efficiency and sustainability. With real-time monitoring and proactive systems, businesses can maintain control, prevent issues, and optimize their operations, all from a central platform.
                        </p>
                    </div>

                    <div class="card-deck row">
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                  <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Resilience</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Reliable security for industrial operations</p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                  <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Efficiency</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Centralized control for efficient management</p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                  <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Eco-friendly</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Solar-powered for sustainable performance</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer " id="What we offer">
                    <section className='tab-indut-solu'>
                        <section className="bg-tabs-nys">
                            <div className='text-center mb-3' >
                                <h3 class="rrmc-article-desc-title" >What we offer</h3>
                            </div>
                            <div className="tab-heading-nys">
                                <div className="tabs-nys">
                                    <input
                                        type="radio"
                                        id="radio-1"
                                        name="tabs"
                                        checked={activeTab === 1}
                                        onChange={() => handleTabClick(1)}
                                    />
                                    <label className="tab-3heading-nys" htmlFor="radio-1">
                                        CHALLENGES
                                    </label>
                                    <input
                                        type="radio"
                                        id="radio-2"
                                        name="tabs"
                                        checked={activeTab === 2}
                                        onChange={() => handleTabClick(2)}
                                    />
                                    <label className="tab-3heading-nys" htmlFor="radio-2">
                                        SOLUTION
                                    </label>
                                    <input
                                        type="radio"
                                        id="radio-3"
                                        name="tabs"
                                        checked={activeTab === 3}
                                        onChange={() => handleTabClick(3)}
                                    />
                                    <label className="tab-3heading-nys" htmlFor="radio-3">
                                        NYSTAI SOLUTION
                                    </label>
                                    <span className="glider"></span>
                                </div>
                            </div>
                            <div className={`content-container ${fade ? "fade-in" : "fade-out"}`}>
                                {activeTab === 1 && (
                                    <div className="container">
                                        <div className='row'>
                                            <div className="col-lg-6">
                                                <img src={smartthree1} style={{ borderRadius: "10px" }} alt="tab-nys-1" className="img-fluid what-we-offer-3image" />
                                            </div>
                                            <div className="col-lg-6 tab-contents-nys">
                                                <h1>Challenges Without CCTV, Alarms, and Automation in Industries</h1>

                                                <div className="">
                                                    <p><span><FontAwesomeIcon icon={faHouse} style={{ color: "#000" }} className="me-4" /></span>Industries without advanced CCTV, alarms, and automation face security and operational inefficiencies.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faIndustry} style={{ color: "#000" }} className="me-4" /></span>Industries without advanced CCTV, alarms, and automation face security and operational inefficiencies.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faWarehouse} style={{ color: "#000" }} className="me-4" /></span>Outdated systems lead to monitoring gaps, delayed responses, and vulnerabilities in safeguarding equipment.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faThunderstorm} style={{ color: "#000" }} className="me-4" /></span> Without real-time alerts and centralized control, businesses react to problems <br /> instead of preventing them, resulting in downtime, safety hazards,<br /> and reduced productivity.</p>
                                                    <hr />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 2 && (
                                    <div className="container">
                                        <div className='row'>
                                            <div className="col-lg-6">
                                                <img src={smartthree2} style={{ borderRadius: "10px" }} alt="tab-nys-2" className="img-fluid what-we-offer-3image" />
                                            </div>
                                            <div className="col-lg-6 tab-contents-nys">
                                                <h1>How These Solutions Provide Benefits for Industries</h1>

                                                <div className="">
                                                    <p><span><FontAwesomeIcon icon={faHouse} style={{ color: "#000" }} className="me-4" /></span>Industrial CCTV cameras, wired alarms, and automation ensure consistent monitoring and control.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faIndustry} style={{ color: "#000" }} className="me-4" /></span>Solar-powered systems cut energy costs, offering sustainable power.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faWarehouse} style={{ color: "#000" }} className="me-4" /></span> With real-time notifications and live video feeds, industries can quickly address emergencies, optimize resource management, and enhance operational efficiency through reliable, integrated systems.</p>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 3 && (
                                    <div className="container">
                                        <div className='row'>
                                            <div className="col-lg-6">
                                                <img src={smartthree3} style={{ borderRadius: "10px" }} alt="tab-nys-3" className="img-fluid what-we-offer-3image" />
                                            </div>
                                            <div className="col-lg-6 tab-contents-nys">
                                                <h1>How NYSTAI Products Resolve These Issues for Industries</h1>
                                                <div className="">
                                                    <p><span><FontAwesomeIcon icon={faHouse} style={{ color: "#000" }} className="me-4" /></span>NYSTAI’s wired CCTV and alarm systems ensure reliability in large-scale operations.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faIndustry} style={{ color: "#000" }} className="me-4" /></span>  Our centralized control simplifies management, while solar-powered options reduce energy costs.</p>
                                                    <hr />
                                                    <p><span><FontAwesomeIcon icon={faWarehouse} style={{ color: "#000" }} className="me-4" /></span>  With real-time notifications, live feeds, and automation, NYSTAI products help prevent issues, ensuring continuous, efficient, and secure operations across industrial environments.</p>
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </section>
                </section>

                <section className="page-section mt-5 mb-5 Features-education" id="Features">
                    <section class="creative-cards style-one">
                        <center className="page-section mt-5 mb-5">
                            <video src={indusvideo} loop muted autoPlay className='img-fluid' />
                        </center>
                    </section>
                </section>

                <main className="container page-section Product-display mb-5" id="Product display">
                    <div className="text-center">
                        <h3 class="rrmc-article-desc-title mb-5" >PRODUCT DISPLAY</h3>
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
                                                    <div class="img-showcase">
                                                        <img src={selectedProduct.modalimage1} alt="shoe image /" />
                                                        <img src={selectedProduct.modalimage1} alt="shoe image /" />
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
                                                <h5 className='mb-4'>Smart Features: </h5>
                                                <div className="social-links text-center mt-3">
                                                    <div className="d-flex flex-row align-items-center">
                                                        <a className='d-flex flex-column align-items-center'><img src={icon1} className="img-fluid mb-1" /><p>CLOUD </p></a>
                                                        <a className='d-flex flex-column align-items-center ms-3'><img src={icon8} className="img-fluid mb-1" /><p>MOTION</p></a>
                                                        <a className='d-flex flex-column align-items-center ms-3'><img src={icon7} className="img-fluid mb-1" /><p>WIFI</p></a>
                                                        <a className='d-flex flex-column align-items-center ms-3'><img src={icon9} className="img-fluid mb-1" /><p>SENSOR</p></a>
                                                    </div>
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
                                                    <Link to="/indudet">
                                                        <button type="button" class="btn ms-3">
                                                            Know More<i class="fas fa-shopping-cart"></i>
                                                        </button>
                                                    </Link>
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

            <Footerproduct />

        </>
    );
}

