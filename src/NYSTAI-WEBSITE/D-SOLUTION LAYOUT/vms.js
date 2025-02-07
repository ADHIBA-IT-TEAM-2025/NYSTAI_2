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
// Register ScrollTrigger with GSAP

// images
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (4).png';
import vmsbanner2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-banner-2.png';
import icon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (1).png'
import icon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (2).png'
import icon7 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (3).png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'

import smartcard1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (3).png'
import smartcard2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (2).png'
import smartcard3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms (1).png'

import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (2).jpg'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).jpg'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).webp'

import cardcircleimg1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-1.png'
import cardcircleimg2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (1).png'
import cardcircleimg3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (2).png'
import cardcircleimg4 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (3).png'
import cardcircleimg5 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (4).png'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);


export default function Vms() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [9].includes(product.category));

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


    // /////
    document.querySelectorAll(".home-scroll_section").forEach((section) => {
        let childTriggers = section.querySelectorAll(".home-scroll_text-item");
        let childTargets = section.querySelectorAll(".home-scroll_img-item");

        // switch active class
        function makeItemActive(index) {
            childTriggers.forEach(trigger => trigger.classList.remove("is-active"));
            childTargets.forEach(target => target.classList.remove("is-active"));
            childTriggers[index].classList.add("is-active");
            childTargets[index].classList.add("is-active");
        }
        makeItemActive(0);

        // create triggers
        childTriggers.forEach((trigger, index) => {
            ScrollTrigger.create({
                trigger: trigger,
                start: "top center",
                end: "bottom center",
                onToggle: ({ isActive }) => {
                    if (isActive) {
                        makeItemActive(index);
                    }
                }
            });
        });
    });

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
                        <h3 className="heading-34">NYSTAI’S AI VMS</h3>
                        <p className="text-block-60" >
                            Nystai’s Vehicle Management Systems (VMS) offer cutting-edge solutions for fleet monitoring and driver safety. With advanced technologies like dashboard cameras, AI-powered MDVR (Mobile Digital Video Recorder), and 360-degree camera monitors, businesses can ensure comprehensive vehicle surveillance and real-time data collection. These systems provide valuable insights into driver behavior, accident prevention, and operational efficiency, while enhancing security. Whether used in logistics, transportation, or industrial settings, Our VMS improves vehicle oversight, helping companies reduce risks, enhance safety, and optimize performance. The combination of AI analytics and visual monitoring makes it an essential tool for managing fleets efficiently and safely.
                        </p>
                    </div>

                    <div class="card-deck row" >
                              <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={icon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Safety</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Monitor vehicles in real time.</p>
                            </div>
                        </div>
                              <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={icon7} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Tracking</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}> Ensure driver safety and accountability. </p>
                            </div>
                        </div>
                              <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={icon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Optimization</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Optimize fleet management efficiency. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer " id="What we offer">
                    <div className='text-center mb-5' >
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>

                    <section className='container'>
                        <div class="card mb-3 " style={{ maxWidth: "540px;", border: "none" }}>
                            <div class="row g-0 vms-card-circlr-img">
                                <div class="col-md-4">
                                    <img src={smartcard1} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Challenges Without VMS:</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}>Without advanced vehicle management systems, businesses struggle with poor visibility into driver behavior, increased risks of accidents, and inefficient fleet monitoring. Manual oversight fails to provide real-time data, leaving vehicles vulnerable to theft, damage, and misuse. Lack of monitoring leads to higher operational costs and reduced productivity. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 " style={{ maxWidth: "540px;", border: "none" }}>
                            <div class="row g-0 vms-card-circlr-img">
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Solutions Provided by VMS:</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}>Vehicle management systems like our dashboard cameras, AI MDVR, and 360-degree monitors provide comprehensive surveillance and driver analysis. Real-time alerts, video recording, and AI-powered insights allow businesses to monitor fleet operations effectively. These solutions improve safety, prevent accidents, and offer immediate feedback, ensuring optimal vehicle usage and driver accountability. </p>

                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src={smartcard2} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3 " style={{ maxWidth: "540px;", border: "none" }}>
                            <div class="row g-0 vms-card-circlr-img">
                                <div class="col-md-4">
                                    <img src={smartcard3} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>How Nystai Products Resolve These Issues:</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}>Nystai’s VMS integrates dashboard cameras, AI MDVR, and 360-degree monitors into a unified platform, providing real-time monitoring and AI-based analysis. Businesses receive instant alerts, live video feeds, and data insights for improved decision-making. This proactive solution helps prevent accidents, reduces risks, and optimizes vehicle and driver performance. </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </section>

                <section className="page-section mt-5 mb-5" id="Features"  >
                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34">Features Provided By Our
                            VMS</h3>
                    </div>
                    <img src={vmsbanner2} alt='vms-banner' className='img-fluid col-12' />

                    <div className='vms-card-bg-img'    >
                        <section class="container-fluid row row-cols-1 row-cols-md-5 g-4 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div class=" col vms-card-bottom col-md-4 col-lg-2" >
                                <div class="card  ">
                                    <img src={cardcircleimg1} class="img-fluid card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Dashboard Cameras</h5>
                                        <p class="card-text">Record real-time video of vehicle operations for enhanced safety. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col vms-card-top col-md-4 col-lg-2">
                                <center class="card  ">
                                    <img src={cardcircleimg3} class="img-fluid card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>AI MDVR</h5>
                                        <p class="card-text" > Advanced AI-powered video recording and data analytics for comprehensive monitoring. </p>
                                    </div>
                                </center>
                            </div>
                            <div class="col  vms-card-bottom col-md-4 col-lg-2">
                                <div class="card  ">
                                    <img src={cardcircleimg2} class="img-fluid card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>360-Degree Monitors</h5>
                                        <p class="card-text" > Full view of vehicle surroundings to prevent accidents. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col vms-card-top col-md-4 col-lg-2">
                                <div class="card  ">
                                    <img src={cardcircleimg5} class="img-fluid card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Real-Time Alerts</h5>
                                        <p class="card-text" > Immediate notifications for potential safety incidents.  </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col  vms-card-bottom col-md-4 col-lg-2">
                                <div class="card  ">
                                    <img src={cardcircleimg4} class="img-fluid card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Data Insights</h5>
                                        <p class="card-text" > AI-driven reports for driver behavior and fleet optimization.   </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
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
                                                    <Link to="/vmsde">
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

