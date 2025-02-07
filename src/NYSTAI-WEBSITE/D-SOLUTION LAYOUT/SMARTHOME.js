import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from '../A-LAYOUT/footer';
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import $ from 'jquery'
import Swiper from 'swiper';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
// Register ScrollTrigger with GSAP

// images
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banner-smart.png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'



import smartcard1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (5).png'
import smartcard2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (4).png'
import smartcard3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (1).png'
import smartcard4 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (3).png'
import smartcard5 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/icon-solu-smart - 1 (2).png'





import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (2).jpg'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).jpg'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smarthome -1 (1).webp'


import smartimg from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/SMART HOME AUTOMATION.png'
import smartthree1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smart home img (3).png'
import smartthree2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smartthree-2.png'
import smartthree3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/smart home img (2).png'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);


export default function Smarthomesolu() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [1, 3, 5, 4, 6, 7].includes(product.category));

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
                                <a className={`menu-item-link ${activeSection === 'Where we use' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('Where we use')}>
                                    Where we use
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
                        <h3 className="heading-34">Nystai’s Home automation </h3>
                        {/* <h3 className="heading-34">Nystai’s&nbsp;<span style={{ color: "#1b6763" }}>Home automation</span></h3> */}
                        <p className="text-block-60" >
                            Home automation has become essential for modern living, offering convenience, security, and peace of mind. With smart home products like CCTV cameras, alarms, and automation systems, homeowners can monitor their properties and control various aspects of their homes with ease. NYSTAI’s home automation solutions combine these functions into one seamless system, ensuring maximum security and efficiency. This integrated approach provides users with real-time updates and proactive monitoring, making homes smarter and safer.
                        </p>
                    </div>

                    <div class="card-deck row" >
                              <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Vigilance</h4>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Real-time notifications for security</p>
                            </div>
                        </div>
                              <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Centralization</h4>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Automated control from one device</p>
                            </div>
                        </div>
                              <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Anticipation</h4>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Proactive monitoring prevents problems.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer text-center" id="What we offer">
                    <div className='text-center mb-5' >
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>

                    <section className='spilt-scroll-solu'>
                        <div class="page-wrapper">
                            <main class="page-main">
                                <section class="home-scroll_section">
                                    <div class="grid-col home-scroll_visual page-padding">
                                        <div class="home-scroll_img-wrap w-dyn-list">
                                            <div role="list" class="home-scroll_img-list w-dyn-items">
                                                <div role="listitem" class="home-scroll_img-item w-dyn-item"><img alt="" loading="lazy" src={smartthree1} class="home-scroll_img" /></div>
                                                <div role="listitem" class="home-scroll_img-item w-dyn-item"><img alt="" loading="lazy" src={smartthree2} class="home-scroll_img" /></div>
                                                <div role="listitem" class="home-scroll_img-item w-dyn-item"><img alt="" loading="lazy" src={smartthree3} class="home-scroll_img" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid-col home-scroll_content page-padding">
                                        <div class="home-scroll_text-wrap w-dyn-list">
                                            <div role="list" class="home-scroll_text-list w-dyn-items">
                                                <div role="listitem" class="home-scroll_text-item w-dyn-item">
                                                    <img alt="" loading="lazy" src={smartthree1} class="home-scroll_photo" />
                                                    <h2 class="text-size-h1">Challenges Without CCTV, Alarms, and Automation</h2>
                                                    <p>Without advanced security systems like CCTV cameras, alarms, and automation, homes are vulnerable to break-ins and emergencies. Manual monitoring and outdated tech often fail to prevent incidents. Managing multiple systems separately causes inefficiency and delays, leaving homes and families unprotected against potential threats and costly aftermaths</p>
                                                </div>
                                                <div role="listitem" class="home-scroll_text-item w-dyn-item"><img alt="" loading="lazy" src={smartthree1} class="home-scroll_photo" />
                                                    <h2 class="text-size-h1">Solutions Provided by CCTV, Alarms, and Automation</h2>
                                                    <p>Modern CCTV cameras, alarms, and automation provide real-time security, control, and convenience from a single platform. With live video feeds and instant alerts, homeowners can quickly respond to threats. Automation enhances comfort by controlling lighting and climate, ensuring seamless protection and peace of mind for a safer home environment. </p>
                                                </div>
                                                <div role="listitem" class="home-scroll_text-item w-dyn-item"><img alt="" loading="lazy" src={smartthree1} class="home-scroll_photo" />
                                                    <h2 class="text-size-h1">How NYSTAI Products Resolve These Issues</h2>
                                                    <p>NYSTAI’s home automation system integrates CCTV cameras, alarms, and controls into one platform. Users receive real-time notifications and live video feeds on smartphones, ensuring constant awareness. Designed for proactive security, NYSTAI products help detect potential issues early, providing convenience, protection, and a smarter, safer home experience. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </section>

                </section>

                <section className="page-section mt-5 mb-5 Features-smart" id="Features">

                    <section class="creative-cards style-one">
                        <div className='text-center ' style={{ color: "#f5f5f5" }}>
                            <h3 class="rrmc-article-desc-title" >Features</h3>
                            <p class="rrmc-article-desc-intro" >Features provided by our Home Automation </p>
                        </div>

                        <div class="container">
                            <div class="row">
                                <div class="card-column">
                                    <div class="card-details active">
                                        <div class="card-details--inner">
                                            <div class="card-icon">
                                                <img class="light-icon" src={smartcard1} alt="icon" />
                                            </div>
                                            <div class="card-detail">
                                                <h3 class="card-heading"><a href="https://www.fiverr.com/aliali44">Unified Control </a></h3>
                                                <p class="card-decription">Manage CCTV cameras, alarms, and automation from a single platform for seamless operation. </p>
                                                <h6 class="card-count">01</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-column">
                                    <div class="card-details card-bg active">
                                        <div class="card-details--inner">
                                            <div class="card-icon">
                                                <img class="light-icon" src={smartcard2} alt="icon" />
                                            </div>
                                            <div class="card-detail">
                                                <h3 class="card-heading"><a href="https://www.fiverr.com/aliali44">Real-Time Alerts</a></h3>
                                                <p class="card-decription">Receive instant notifications for suspicious activities or emergencies, keeping homeowners informed and secure.     </p>
                                                <h6 class="card-count">02</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-column">
                                    <div class="card-details active">
                                        <div class="card-details--inner">
                                            <div class="card-icon">
                                                <img class="light-icon" src={smartcard3} alt="icon" />
                                            </div>
                                            <div class="card-detail">
                                                <h3 class="card-heading"><a href="https://www.fiverr.com/aliali44">Live Video Feeds</a></h3>
                                                <p class="card-decription">Access live footage from security cameras directly on your smartphone, ensuring constant surveillance.          </p>
                                                <h6 class="card-count">03</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-column">
                                    <div class="card-details active">
                                        <div class="card-details--inner">
                                            <div class="card-icon">
                                                <img class="light-icon" src={smartcard4} alt="icon" />
                                            </div>
                                            <div class="card-detail">
                                                <h3 class="card-heading"><a href="https://www.fiverr.com/aliali44">Proactive Security</a></h3>
                                                <p class="card-decription">Detect and prevent potential threats before they escalate with advanced motion and activity sensors.</p>
                                                <h6 class="card-count">04</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-column">
                                    <div class="card-details active">
                                        <div class="card-details--inner">
                                            <div class="card-icon">
                                                <img class="light-icon" src={smartcard5} alt="icon" />
                                            </div>
                                            <div class="card-detail">
                                                <h3 class="card-heading"><a href="https://www.fiverr.com/aliali44">Comprehensive Automation</a></h3>
                                                <p class="card-decription">Control lighting, climate, and security settings, enhancing both convenience and protection.</p>
                                                <h6 class="card-count">05</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>

                <center className="page-section mt-5 mb-5" id="Where we use">
                    <img src={smartimg} alt='smart' className='img-fluid' />
                </center>

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
                                                    <Link to="/hybriddet">
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

