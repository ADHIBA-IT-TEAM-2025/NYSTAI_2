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
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-banner-landing.png';
import overlaycard1 from "../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution (2)/image-1.png"
import overlaycard2 from "../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution (2)/image-2.png"
import overlaycard3 from "../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution (2)/image.png"
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (1).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (2).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (3).png'
import indusvideo from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-banner-2.png'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAnglesRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';
gsap.registerPlugin(ScrollTrigger);

export default function Hospital() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [2, 3, 4].includes(product.category));

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

                <section className="container page-section mt-4 mb-3" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34">NYSTAI’S&nbsp;<span style={{ color: "#1b6763" }}>Hospital</span>&nbsp;solution</h3>
                        <p className="text-block-60" >
                            The NYSTAI product offers cutting-edge healthcare solutions to address the technological challenges faced by hospitals. With advanced patient monitoring systems, AI-powered diagnostic tools, and seamless communication platforms, NYSTAI enhances patient care and improves operational efficiency. It integrates telemedicine for remote consultations and streamlines the management of electronic health records (EHR), ensuring accuracy and easy access to patient data. By modernizing hospital technology, NYSTAI empowers healthcare teams to deliver better, faster care while reducing administrative burdens. This all-in-one solution is designed to optimize hospital workflows and support proactive, data-driven medical decisions.
                        </p>
                    </div>

                    <div class="card-deck row">
                        <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Real-Time Monitoring  </h5>
                            </div>
                        </div>
                        <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>AI Diagnosis </h5>
                            </div>
                        </div>
                        <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Seamless Communication  </h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer " id="What we offer">
                    <div className='text-center mb-5' >
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>
                    <div className='mb-5 three-overlay-cards-nys'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div class="card">
                                        <div>
                                            <img class="card-img" src={overlaycard1} alt="Card image" />
                                        </div>
                                        <div class="card-img-overlay ">
                                            <div>
                                                <h5 class="card-title">Hospitals Lack Innovation</h5>
                                                <p class="card-text">Many hospitals struggle without access to new technology, facing challenges such as outdated record-keeping systems and inefficient patient care processes. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div class="card">
                                        <div>
                                            <img class="card-img" src={overlaycard3} alt="Card image" />
                                        </div>
                                        <div class="card-img-overlay">
                                            <div>
                                                <h5 class="card-title"> Solving the Problem</h5>
                                                <p class="card-text">To address these challenges, hospitals can invest in modernizing their technology infrastructure, implementing electronic health records, and adopting telemedicine solutions. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div class="card">
                                    <div>
                                        <img class="card-img" src={overlaycard2} alt="Card image" />
                                    </div>
                                    <div class="card-img-overlay col-lg-7">
                                        <div>
                                            <h5 class="card-title">How NYSTAI Products Resolve These Issue?</h5>
                                            <p class="card-text">Our NYSTAI product offers innovative healthcare and nursing solutions, including advanced patient monitoring systems, AI-powered diagnosis tools, and streamlined communication platforms for healthcare teams.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="page-section mt-5 mb-5 Features-education" id="Features">
                    <div class="container hospital-features-solu">

                        <div className='text-center mb-5' >
                            <h3 class="rrmc-article-desc-title">Features</h3>
                        </div>

                        <center className="page-section container  mb-4" id="Where we use">
                            <img src={indusvideo} className='col-12 img-fluid' />
                        </center>

                        <div class="grid-container">
                            <div class="item1">
                                <div >

                                    <div className='hospital-text-div-circle mb-5'><FontAwesomeIcon icon={faHouseSignal} /></div>
                                    <h4 className="mb-3 text-center" >Advanced Patient Monitoring </h4>
                                    <p>
                                        Real-time monitoring of patient vitals with AI-powered insights to support proactive healthcare decisions.
                                    </p>
                                </div>
                                <div className='hospital-text-div-circle'><FontAwesomeIcon icon={faAnglesRight} className="m" /></div>
                            </div>
                            <div class="item2">
                                <div >

                                    <div className='hospital-text-div-circle mb-5'><FontAwesomeIcon icon={faHouseSignal} /></div>
                                    <h4 className="mb-3 text-center" >Seamless Communication  </h4>
                                    <p>
                                        Streamlined communication platforms enhance coordination between doctors, nurses, and healthcare staff, ensuring better patient care.
                                    </p>
                                </div>
                                <div className='hospital-text-div-circle'><FontAwesomeIcon icon={faAnglesRight} className="m" /></div>
                            </div>
                            <div class="item3">
                                <div >

                                    <div className='hospital-text-div-circle mb-5'><FontAwesomeIcon icon={faHouseSignal} /></div>
                                    <h4 className="mb-3 text-center" >Telemedicine Integration  </h4>
                                    <p>
                                        Supports remote consultations and care delivery, reducing patient wait times and expanding access to healthcare services.
                                    </p>
                                </div>
                                <div className='hospital-text-div-circle'><FontAwesomeIcon icon={faAnglesRight} className="m" /></div>
                            </div>
                            <div class="item4">
                                <div >

                                    <div className='hospital-text-div-circle mb-5'><FontAwesomeIcon icon={faHouseSignal} /></div>
                                    <h4 className="mb-3 text-center" >Electronic Health Records (EHR) Management  </h4>
                                    <p>
                                        Supports remote consultations and care delivery, reducing patient wait times and expanding access to healthcare services.
                                    </p>
                                </div>
                                <div className='hospital-text-div-circle'><FontAwesomeIcon icon={faAnglesRight} className="m" /></div>
                            </div>
                        </div>
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

