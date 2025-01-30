
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
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (1).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (2).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/hospital-icon (3).png'
import { Link } from "react-router-dom";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouse, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faThunderstorm, faWarehouse, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const cardsData = [
    "https://drscdn.500px.org/photo/1037580924/q%3D80_m%3D2000/v2?sig=9cf4ef5752f546834f24d9b04773cc62febbfc3c5dfcc7a51c387421ed5861ba",
    "https://drscdn.500px.org/photo/1037567905/q%3D80_m%3D2000/v2?sig=2422f7fcd9988639e0269bbf0a70904890abd2aa85b0b8df0370c446a6c7798f",
    "https://drscdn.500px.org/photo/1037580924/q%3D80_m%3D2000/v2?sig=9cf4ef5752f546834f24d9b04773cc62febbfc3c5dfcc7a51c387421ed5861ba",
    "https://drscdn.500px.org/photo/1037576293/q%3D80_m%3D2000/v2?sig=79cda443bb7620d49370612139a84f44e88419eb0943a8fc54d9856cd1f9200e",
    "https://drscdn.500px.org/photo/1037580924/q%3D80_m%3D2000/v2?sig=9cf4ef5752f546834f24d9b04773cc62febbfc3c5dfcc7a51c387421ed5861ba",
];

export default function Banking() {

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

    // click cards
    const [activeIndex, setActiveIndex] = useState(2);

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

            {/* Banner-Image */}
            <header className="placeholder-section">
                <div class=" card ">
                    <img class="card-img" style={{ height: "65vh" }} src={Bankimg1} alt="Card image" />
                </div>
            </header>

            {/* 2nd Nav */}
            <Navbar collapseOnSelect expand="lg" className="sub-nav-edu-solu">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
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


                        <Nav className='brodcrumbs-text-solu'>
                            <Nav.Link className='text-brod' ><FontAwesomeIcon icon={faHome} /></Nav.Link>
                            <Nav.Link > <FontAwesomeIcon icon={faAngleRight} /></Nav.Link>
                            <NavDropdown title="INTEGRATED SOLUTIONS" id="collapsible-nav-dropdown">
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faHouseSignal} className="me-3" /><Link to="/nystai-solution-home" >SMARTHOME</Link></NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faIndustry} className="me-3" />   <Link to="/nystai-solution-Industrial" >INDUSTRIAL</Link></NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faSchool} className="me-3" />   <Link to="/nystai-solution-education" >EDUCATION</Link></NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faPlaceOfWorship} className="me-3" />WORSHIP</NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faCarBurst} className="me-3" /> <Link to="/nystai-solution-vms" >VMS</Link></NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faWarehouse} className="me-3" />  <Link to="/nystai-solution-Warehouse" c>WAREHOUSE</Link></NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faIndustry} className="me-3" />HOSPITAL</NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faBuildingColumns} className="me-3" />BANKING</NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faCircleInfo} className="me-3" />RETAIL</NavDropdown.Item>
                                <div class="dropdown-divider ms-3 me-3"></div>
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faHandshake} className="me-3" /><Link to="/nystai-solution-parking" >PARKING IOT SOLUTION</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >  <FontAwesomeIcon icon={faAngleRight} /></Nav.Link>
                            <Nav.Link className='text-brod'>INDUSTRY</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section id="main-content" className="page-sections">

                <section className="page-section container-fluid mb-5" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <p className="text-block-60" >
                            Overview
                        </p>
                        <h3 className="heading-34">NYSTAI’S Banking solution  </h3>
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
                                <h5 class="card-title">Unmatched Security</h5>
                                <p class="card-text">Advanced surveillance and monitoring systems to safeguard bank premises and customer data. 
                                </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title">Operational Excellence</h5>
                                <p class="card-text">Streamlined processes and automated tools to enhance productivity and compliance. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title">Customer Focused</h5>
                                <p class="card-text">Digital solutions designed to elevate the customer experience with seamless and secure interactions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Click Cards */}
                <div className="card-container mt-5 mb-5">
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
                            style={{
                                backgroundImage: `url('https://drscdn.500px.org/photo/1037576293/q%3D80_m%3D2000/v2?sig=79cda443bb7620d49370612139a84f44e88419eb0943a8fc54d9856cd1f9200e')`,
                            }}
                            onClick={() => handleCardClicks(0)}
                        >
                            <h3>Explore the world</h3>
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 1 ? "active" : "inactive"}`}
                            style={{
                                backgroundImage: `url('https://drscdn.500px.org/photo/1037580924/q%3D80_m%3D2000/v2?sig=9cf4ef5752f546834f24d9b04773cc62febbfc3c5dfcc7a51c387421ed5861ba')`,
                            }}
                            onClick={() => handleCardClicks(1)}
                        >
                            <h3>Explore the world</h3>
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 2 ? "active" : "inactive"}`}
                            style={{
                                backgroundImage: `url('https://drscdn.500px.org/photo/1037567905/q%3D80_m%3D2000/v2?sig=2422f7fcd9988639e0269bbf0a70904890abd2aa85b0b8df0370c446a6c7798f')`,
                            }}
                            onClick={() => handleCardClicks(2)}
                        >
                            <h3>Explore the world</h3>
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 3 ? "active" : "inactive"}`}
                            style={{
                                backgroundImage: `url('https://drscdn.500px.org/photo/1037576293/q%3D80_m%3D2000/v2?sig=79cda443bb7620d49370612139a84f44e88419eb0943a8fc54d9856cd1f9200e')`,
                            }}
                            onClick={() => handleCardClicks(3)}
                        >
                            <h3>Explore the world</h3>
                        </div>
                        <div
                            className={`card click-cards-five-nys ${activeIndex === 4 ? "active" : "inactive"}`}
                            style={{
                                backgroundImage: `url('https://drscdn.500px.org/photo/1037567905/q%3D80_m%3D2000/v2?sig=2422f7fcd9988639e0269bbf0a70904890abd2aa85b0b8df0370c446a6c7798f')`,
                            }}
                            onClick={() => handleCardClicks(4)}
                        >
                            <h3>Explore the world</h3>
                        </div>
                    </div>
                </div>

                {/* 5 CARDS BANKING */}
                <section className='five-cards-nys'>
                    <div className='container five-cards-contents-nys'>

                        <div className='five-cards-heading-nys'>
                            <h6>Features</h6>
                            <h3>Features provided by our Worship solution </h3>
                        </div>



                        <div class="row">
                            <div class="col-sm-4">
                                <div class="card" style={{ border: "1px solid #fff" }}>
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon1} className='' />
                                        </div>
                                        <h5 class="card-title">Advanced Surveillance</h5>
                                        <p class="card-text">Ensure 24/7 security with smart cameras, access control, and real-time alerts. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon2} className='' />
                                        </div>
                                        <h5 class="card-title">Digital Document Management</h5>
                                        <p class="card-text">Simplify customer onboarding and regulatory compliance with automated verification systems. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon3} className='' />
                                        </div>
                                        <h5 class="card-title">Energy-Efficient Solutions</h5>
                                        <p class="card-text"> Reduce costs with smart lighting and climate control tailored for banking environments. </p>
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
                                        <h5 class="card-title">Automated Teller Monitoring</h5>
                                        <p class="card-text"> Monitor ATM performance, security, and cash flow with advanced remote management tools. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <div className=''>
                                            <img src={Bankicon5} className='' />
                                        </div>
                                        <h5 class="card-title">Centralized Operations</h5>
                                        <p class="card-text"> Manage branch activities, employee schedules, and customer interactions through a unified digital platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products */}
                <main className="container page-section Product-display mt-5 mb-5" id="Product display">
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


            <Footerproduct />
        </>
    )
}