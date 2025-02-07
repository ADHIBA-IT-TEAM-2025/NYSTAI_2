
import './edusolution.css'
import Bankimg1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banksol-banner.png'
import Bankicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (2).png'
import Bankicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (3).png'
import Bankicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (4).png'
import Bankicon4 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (5).png'
import Bankicon5 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/banking5cardicon (1).png'
import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from '../A-LAYOUT/footer';
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (1).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (2).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (3).png'
import clickcardimg1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Banking images/1.png'
import clickcardimg2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Banking images/2.png'
import clickcardimg3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Banking images/3.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Banking() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [3, 7, 6].includes(product.category));

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

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex < 4 ? prevIndex + 1 : 0)); // Move forward, loop to the start if at the end
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 4)); // Move backward, loop to the end if at the start
    };

    const handleCardClicks = (index) => {
        setActiveIndex(index); // Set the clicked card as active
    };

    return (
        <>

            <header className="placeholder-section">
                <div class=" card ">
                    <img class="card-img" style={{ height: "65vh" }} src={Bankimg1} alt="Card image" />
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

                <section className="container page-section container mt-4 mb-5" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34">NYSTAI’S&nbsp;<span style={{color:"#1b6763"}}>Banking</span>&nbsp;solution  </h3>
                        <p className="text-block-60" >
                            NYSTAI delivers comprehensive solutions tailored for the banking sector, addressing security, efficiency, and operational challenges. With advanced surveillance systems, automated processes, and digital management tools, we empower banks to enhance safety, streamline operations, and improve customer experiences. NYSTAI’s innovations help financial institutions build trust, reduce risks, and adapt to the evolving needs of the industry.
                        </p>
                    </div>

                    <div class="card-deck row" >
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Unmatched Security</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Advanced surveillance and monitoring systems to safeguard bank premises and customer data.
                                </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Operational Excellence</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Streamlined processes and automated tools to enhance productivity and compliance. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Customer Focused</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Digital solutions designed to elevate the customer experience with seamless and secure interactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="card-container mt-5 mb-5" id="What we offer">
                    <div className="d-flex justify-content-evenly align-items-center container mb-4">
                        <div className="col-lg-10">
                            <h3>What We Offer ?</h3>
                        </div>
                        <div className="col-lg-2 ms-4">
                            <div className="d-flex justify-content-evenly">
                                <div className="left-right-arrow-nys" onClick={handlePrev}>
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </div>
                                <div className="left-right-arrow-nys" onClick={handleNext}>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 0 ? "active" : "inactive"}`}
                            style={{ backgroundImage: `url(${clickcardimg1})` }}
                            onClick={() => handleCardClicks(0)}
                        >
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 1 ? "active" : "inactive"}`}
                            style={{ backgroundImage: `url(${clickcardimg2})` }}
                            onClick={() => handleCardClicks(1)}
                        >
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 2 ? "active" : "inactive"}`}
                            style={{ backgroundImage: `url(${clickcardimg3})` }}
                            onClick={() => handleCardClicks(2)}
                        >
                        </div>
                    </div>
                </div>

                <section className='five-cards-nys' id="Features">
                    <div className='container five-cards-contents-nys'>

                        <div className='five-cards-heading-nys'>
                            <h1>Features</h1>
                            <h3>Features provided by our Worship solution </h3>
                        </div>



                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card" style={{ border: "1px solid #fff" }}>
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon1} className='' />
                                        </div>
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Advanced Surveillance</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}>Ensure 24/7 security with smart cameras, access control, and real-time alerts. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon2} className='' />
                                        </div>
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Digital Document Management</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}>Simplify customer onboarding and regulatory compliance with automated verification systems. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon3} className='' />
                                        </div>
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Energy-Efficient Solutions</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}> Reduce costs with smart lighting and climate control tailored for banking environments. </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='row mt-5 d-flex justify-content-center'>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon4} className='' />
                                        </div>
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Automated Teller Monitoring</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}> Monitor ATM performance, security, and cash flow with advanced remote management tools. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon5} className='' />
                                        </div>
                                        <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Centralized Operations</h5>
                                        <p class="card-text" style={{ color: "#8c8c8c" }}> Manage branch activities, employee schedules, and customer interactions through a unified digital platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <main className="container page-section Product-display mb-5" id="Product display">
                    <div className="text-center">
                        <h3 class="rrmc-article-desc-title mt-5 mb-5" >PRODUCT DISPLAY</h3>
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
                                                    <Link to="/Accessdet">
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
    )
}