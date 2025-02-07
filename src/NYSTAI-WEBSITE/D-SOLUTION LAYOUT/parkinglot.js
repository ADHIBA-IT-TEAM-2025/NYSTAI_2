import React, { useEffect, useState, useRef } from 'react';
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
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/VEHICLE-MANAGEMENT-SYSTEM.png';
import vmsbanner2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/parking-lot-second-2.png';
import icon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (1).png'
import icon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (2).png'
import icon7 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-solution-1-icon (3).png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'

import smartcard1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-img-circle-1 (1).png'
import smartcard2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-img-circle-1 (2).png'
import smartcard3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-img-circle-1 (3).png'

import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/parking1 (1).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/parking1 (3).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/parking1 (2).png'

import cardcircleimg1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-1.png'
import cardcircleimg2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (1).png'
import cardcircleimg3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (2).png'
import cardcircleimg4 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (3).png'
import cardcircleimg5 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/vms-card-cir-img-2 (4).png'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import Demo from '../F-SERVICES-LAYOUT/Services.js';
import Protectplan from '../E-PLAN-LAYOUT/protect.js';
import { Box } from "@mui/material";
gsap.registerPlugin(ScrollTrigger);


export default function Parkinglot() {

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
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
  
    useEffect(() => {
      const sections = gsap.utils.toArray(".left-section .box");
  
      const setRightScroll = gsap.quickSetter(rightSectionRef.current, "y", "px");
  
      const goToSection = (section, st) => {
        const targetY = section.offsetTop; // Get the vertical offset of the section
  
        // Animate scroll manually using requestAnimationFrame
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        const duration = 1000; // Animation duration in milliseconds
        let startTime = null;
  
        const scroll = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuad(timeElapsed, startY, distance, duration);
  
          window.scrollTo(0, run); // Manually scroll the window
  
          if (timeElapsed < duration) {
            requestAnimationFrame(scroll); // Continue the animation until the duration is met
          }
        };
  
        const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };
  
        requestAnimationFrame(scroll); // Start the animation
  
        setRightScroll(st.scroll() * 2); // Update the right section scroll position
      };
  
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          onEnter: (self) => goToSection(section, self),
        });
  
        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          onEnterBack: (self) => goToSection(section, self),
        });
      });
  
      return () => {
        // Cleanup ScrollTrigger instances when component unmounts
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, []);

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
                        <h3 className="heading-34">NYSTAI’S Traffic management Integrated AI parking </h3>
                        <p className="text-block-60" >
                            Nystai’s Traffic Management Intelligent AI Parking Solutions provide advanced technologies to optimize parking and traffic flow. Our product lineup includes ANPR cameras, ultrasonic sensors, and integrated camera-light systems. These solutions automate vehicle identification, detect available parking spaces, and manage traffic congestion, creating a seamless parking experience. Nystai's AI-powered systems enhance safety, streamline traffic management, and improve overall parking efficiency, reducing human intervention.
                        </p>
                    </div>

                    <div class="card-deck row">
                    <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title"  style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Efficient vehicle tracking system </h5>
                            </div>
                        </div>
                        <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title"  style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Automated parking space management </h5>
                            </div>
                        </div>
                        <div class="card col-lg-3">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title"  style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Real-time traffic congestion control </h5>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='page-section' id="What we offer">
                    <div className='text-center mb-5' >
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>
                    <section className='container-fluid parking-lot-split'>
                        <div class="row">
                            <div id="left-side" class="col-sm-6 jumbotron text-center">
                                <h1 class="mt-5 pt-4">Challenges Without AI Parking Solutions:  </h1>
                                <p>Without intelligent parking solutions, cities face traffic congestion, inefficient vehicle tracking, and limited parking space management. Manual systems often lead to mismanagement, increasing frustration for drivers and operators. .</p>

                            </div>
                            <div id="right-side" class="col-sm-6 jumbotron text-center">
                            </div>
                        </div>
                        <div class="row">
                            <div id="right-side2" class="col-sm-6 jumbotron text-center">
                            </div>
                            <div id="left-side" class="col-sm-6 jumbotron text-center">
                                <h1 class="mt-5 pt-4">Solution for AI-Powered Parking:  </h1>
                                <p>AI-powered systems, like ANPR cameras, ultrasonic sensors, and integrated camera-light systems, streamline traffic flow and automate parking management. They accurately detect vehicles, manage available spaces, and reduce congestion for a smoother, safer experience. </p>

                            </div>

                        </div>
                        <div class="row">
                            <div id="left-side" class="col-sm-6 jumbotron text-center">
                                <h1 class="mt-5 pt-4">How NYSTAI Products Resolve These Issues </h1>
                                <p>Nystai’s AI-based parking solutions provide precise vehicle detection with ANPR cameras and ultrasonic sensors. Our systems automate parking control, reducing human intervention, and increasing efficiency with real-time monitoring and seamless parking operations. .</p>
                            </div>
                            <div id="right-side3" class="col-sm-6 jumbotron text-center">
                            </div>
                        </div>
                    </section>
                </section>

                <section className="page-section mt-5 mb-5" id="Features"  >
                    <div className="mini-block-statement w-clearfix">
                        <h3 className="rrmc-article-desc-titl">Features Provided By Our<br />
                            Traffic management Integrated AI parking</h3>
                    </div>

                    <center>
                        <img src={vmsbanner2} alt='vms-banner' className='img-fluid col-5' />
                    </center>

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




const VerticalSplitSlider = () => {

 
  return (
    <div className="mask">
      <div className="wrapper">
        <div
          className="left column"
        
        >
          <div className="content first">
            <h2>Blue Iceberg</h2>
            <p>Get cool with blue</p>
            <a href="#" role="button">
              more
            </a>
          </div>
          <div className="content second">
            <h2>Crimson Spring</h2>
            <p>Red is not a crime</p>
            <a href="#" role="button">
              more
            </a>
          </div>
          <div className="content third">
            <h2>Mida's Heir</h2>
            <p>Be more with a touch</p>
            <a href="#" role="button">
              more
            </a>
          </div>
        </div>
        <div
          className="right column"
        >
          <div className="pic first"></div>
          <div className="pic second"></div>
          <div className="pic third"></div>
        </div>
      </div>
    </div>
  );
}
