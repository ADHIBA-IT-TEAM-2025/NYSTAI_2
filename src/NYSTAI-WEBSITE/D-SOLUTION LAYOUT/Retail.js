import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from "../A-LAYOUT/footer";
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/retail images/banner.png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon2.jpg'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon.jpg'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/wareicon3.jpg'
import retailimg2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/retail images/1.png'
import Accordion from 'react-bootstrap/Accordion';
gsap.registerPlugin(ScrollTrigger);

export default function Retailcategory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [1,3,4].includes(product.category));

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

    const [hoveredIndex, setHoveredIndex] = useState(null);

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

                <section className=" container page-section mt-4 mb-5" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34">Nystai’s&nbsp;<span style={{color:"#1b6763"}}>Retail</span>&nbsp;Business</h3>
                        <p className="text-block-60" >
                            Retail businesses face challenges in managing operations, ensuring security, and optimizing efficiency. NYSTAI offers advanced electronic and security solutions tailored for retail environments. From smart surveillance to automated systems, our solutions enhance store management, reduce losses, and improve customer experiences, empowering retailers to focus on growth and satisfaction.
                        </p>
                    </div>

                    <div class="card-deck row">
                    <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}> Security</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Advanced surveillance and access control systems ensure a secure environment for worshippers. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Efficiency</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Smart energy and crowd management solutions streamline day-to-day operations. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Innovation</h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Digital tools enhance communication, organization, and engagement with the congregation. </p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* ACCORDION */}
                <div className='accordion-nys pt-5 pb-5' id="What we offer">
                    <div className='container '>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="col-lg-10">
                                    <h3>What We Offer ?</h3>
                                </div>
                                {/* Heading */}
                                <div className='accordion-heading-nys'>
                                    <h3>Smart Solutions for Retail Security and Efficiency !</h3>
                                    <p>NYSTAI’s AI-powered technology enhances security, prevents theft, optimizes inventory, and streamlines operations, ensuring a seamless shopping experience and improved efficiency for retailers.</p>
                                </div>

                                <div className='accordion-contents-nys'>
                                    <Accordion defaultActiveKey="0" flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What Are the Problems Facing in Retail Segments? </Accordion.Header>
                                            <Accordion.Body>
                                                Retailers encounter challenges like theft, inventory mismanagement, and inefficient store operations. Lack of real-time monitoring, poor customer flow management, and security vulnerabilities lead to revenue loss. Additionally, ensuring operational efficiency while delivering seamless customer experiences remains a significant concern for retail businesses in today’s competitive market.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How to Solve the Problem? </Accordion.Header>
                                            <Accordion.Body>
                                                Smart technology can transform retail operations by enabling real-time monitoring, optimizing inventory, and enhancing security. Automated systems, smart surveillance, and AI-powered tools can improve efficiency, reduce theft, and streamline operations. These solutions help retailers maintain a secure, well-organized environment, ensuring both customer satisfaction and operational excellence.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How NYSTAI Products Solve the Problem? </Accordion.Header>
                                            <Accordion.Body>
                                                NYSTAI provides intelligent solutions, including smart cameras, access controls, and inventory management systems. Our AI-powered devices ensure real-time surveillance, theft prevention, and streamlined operations. With customizable features, our products adapt to retail-specific needs, enabling seamless store management, improved security, and an enhanced customer experience—all in one integrated solution.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='d-flex justify-content-center pt-3 '>
                                    <img src={retailimg2} className='img-fluid bounce-img w=100 rounded-4' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className='key-features-nys' id="Features">
                    <div className='container key-features-fullcont-nys'>
                        <div className='row'>
                            <div className='col-lg-6 key-features-left-nys'>
                                <h3>Features of<br /> <span>NYSTAI Solutions<br /> for Retail </span></h3>
                                <button className='col-lg-6 col-md-4 col-sm-3'>
                                    See More ??
                                </button>
                            </div>
                            <div className="col-lg-6 key-features-right-nys">
                                <div
                                    onMouseEnter={() => setHoveredIndex(0)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        opacity: hoveredIndex === null || hoveredIndex === 0 ? 1 : 0.2,
                                        transition: "opacity 0.3s ease"
                                    }}
                                >
                                    <h6>Smart Surveillance</h6>
                                </div>
                                <div
                                    onMouseEnter={() => setHoveredIndex(1)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        opacity: hoveredIndex === null || hoveredIndex === 1 ? 1 : 0.2,
                                        transition: "opacity 0.3s ease"
                                    }}
                                >
                                    <h6>Energy Optimization</h6>
                                </div>
                                <div
                                    onMouseEnter={() => setHoveredIndex(2)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        opacity: hoveredIndex === null || hoveredIndex === 2 ? 1 : 0.2,
                                        transition: "opacity 0.3s ease"
                                    }}
                                >
                                    <h6>Customer Flow Management</h6>
                                </div>
                                <div
                                    onMouseEnter={() => setHoveredIndex(3)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        opacity: hoveredIndex === null || hoveredIndex === 3 ? 1 : 0.2,
                                        transition: "opacity 0.3s ease"
                                    }}
                                >
                                    <h6>Centralized Operations</h6>
                                </div>
                                <div
                                    onMouseEnter={() => setHoveredIndex(4)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    style={{
                                        opacity: hoveredIndex === null || hoveredIndex === 4 ? 1 : 0.2,
                                        transition: "opacity 0.3s ease"
                                    }}
                                >
                                    <h6>Digital Inventory Tracking</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
    )
}



