import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from '../A-LAYOUT/footer';
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
// images
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solu-education-banner.png';
import edubanner from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solu-education-banner-1.png';
import stickyedu2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/sticky-edu-2.png';
import stickyedu3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/sticky-edu-3.png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'



import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (1).jpg'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (1).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/education icon 1 (2).jpg'


import dividediv1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (1).png'
import dividediv2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (3).png'
import dividediv3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/divide-div-edu 1 (2).png'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';


export default function Education() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [8].includes(product.category));

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
                                <a className={`menu-item-link ${activeSection === 'where we use' ? 'active' : ''}`}
                                    onClick={() => handleScrollToSection('where we use')}>
                                    where we use
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

                <section className="container page-section mt-5 " id="Overview">

                    <div className="mini-block-statement w-clearfix">
                        <h3 className="heading-34">Nystai’s Interactive Flat-Panel Display<br />(IFPD)</h3>
                        <p className="text-block-60" >
                            NYSTAI's Interactive Flat-Panel Display (IFPD) offers an adaptable solution for educational institutions and industries. This versatile panel allows users to install their preferred devices and displays, ensuring a customized experience. Designed for seamless integration, the IFPD enhances interactive learning and workplace collaboration by providing a flexible platform that fits diverse needs. With its ultra-clear display and sleek design, NYSTAI's IFPD allows users to combine multiple tools into one, fostering more dynamic and engaging environments. Whether in a classroom or boardroom, the IFPD provides the foundation for smoother, more efficient interactions, revolutionizing both learning and business communication.
                        </p>
                    </div>

                    <div class="card-deck row">
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                 <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Adaptability</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Customizable for Any Environment</p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                 <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Synergy</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Seamless Collaboration and Interaction</p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                 <h4 class="card-title " style={{ textTransform: "uppercase", fontWeight: "bolder", color: "#1b6763" }}>Clarity</h4>
                                 <p class="card-text" style={{ color: "#8c8c8c" }}>Ultra-Clear Display for Engagement.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer text-center" id="What we offer">
                    <div className="sticky-card-wrapper">
                        {/* Card 1 */}
                        <div className="sticky-card sticky-card-1 " style={{ borderRadius: "10px 10px 0px 10px", background: "#fff" }} >

                            <div className="text-center mb-5">
                                <h3 class="rrmc-article-desc-title" >What we offer </h3>
                            </div>


                            <center>
                                <img src={edubanner} alt="sticky 1" className="img-fluid" style={{ borderRadius: "10px 10px 0px 10px" }} />
                            </center>
                            <div className="content-pic-nys" >
                                <h3 style={{ color: "#151515", }} className='mb-3'>Challenges Without Interactive Flat-Panel Displays (IFPD) </h3>
                                <p style={{ color: "#151515", }}>
                                    In today’s fast-paced world, outdated collaboration tools like chalkboards, projectors, and static whiteboards limit engagement and efficiency. Educational institutions and businesses struggle with interactive learning, dynamic presentations, and effective information sharing. Without modern tools, participants often disengage, and productivity drops. The lack of real-time interactivity, high-quality visuals, and seamless sharing capabilities leaves many organizations unable to meet the demands of modern learning and workplace collaboration.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="sticky-card sticky-card-2 " style={{ borderRadius: "10px 10px 0px 10px", background: "#151515", color: "white" }} >
                            <center>
                                <img src={stickyedu2} alt="sticky 2" className="img-fluid" style={{ borderRadius: "10px 10px 0px 10px" }} />
                            </center>
                            <div className="content-pic-nys" >
                                <h3 style={{ color: "#f5f5f5", }} className='mb-3'>Solving the Problem with Next-Generation Technology</h3>
                                <p style={{ color: "#f5f5f5", }}>
                                    The solution to these challenges is adopting modern technology that supports real-time communication, collaboration, and engagement. Interactive Flat-Panel Displays empower educational institutions and businesses by creating a more immersive, connected environment. Users can interact directly with content, share ideas instantly, and present in engaging ways. With features like multi-user touch capabilities and wireless connectivity, these displays enable faster, smoother collaboration, transforming learning and meetings for the 21st century. This tech-driven approach ensures a seamless transition to modern, efficient communication and collaboration tools.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="sticky-card sticky-card-3 " style={{ borderRadius: "10px 10px 0px 10px", background: "#fff" }} >
                            <center>
                                <img src={stickyedu3} alt="sticky 3" className="img-fluid" style={{ borderRadius: "10px 10px 0px 10px" }} />
                            </center>
                            <div className="content-pic-nys">
                                <h3 style={{ color: "#151515", }} className='mb-3'>How NYSTAI’s IFPD Address Educational and Industry Challenges </h3>
                                <p style={{ color: "#151515", }}>
                                    NYSTAI’s Interactive Flat-Panel Displays offer a flexible foundation for customized device installations. Whether for educational purposes or industry meetings, the IFPD adapts to specific needs. Users can integrate their preferred tools and displays, transforming the IFPD into an efficient, intuitive hub for interactive presentations and lessons. With real-time content sharing and multi-device compatibility, the IFPD enables dynamic collaboration and creates more efficient, engaging environments in both education and business sectors.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="page-section Features-education  mb-5" id="Features">

                    <div className='text-center'>
                        <h3 class="rrmc-article-desc-title" >Features</h3>
                        <p class="rrmc-article-desc-intro" >Features provided by our Interactive Flat-Panel Display (IFPD) </p>
                    </div>
                    <div class="container ">
                        <section class="one clearfix">
                            <div class=" left sticky-top">
                                <div class="right-child">
                                    <p>Key Features</p>
                                    <h4>Features provided by our <br />Interactive Flat Panel Display<br />(IFPD)</h4>
                                </div>
                            </div>

                            <div class="right">
                                <div>
                                    <p className="section-title">01. Adaptable Platform</p>
                                    <div className='TIME-SOLU-EDU'>
                                        <p>NYSTAI's IFPD allows users to install their own devices and displays, offering a customizable solution for various needs.</p>
                                    </div>
                                </div>


                                <div>
                                    <p className="section-title">02. Seamless Integration</p>
                                    <div className='TIME-SOLU-EDU'>
                                        <p>Provides a flexible foundation for both education and industry, supporting dynamic learning and efficient meetings.</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="section-title">03. Ultra-Clear Display</p>
                                    <div className='TIME-SOLU-EDU'>
                                        <p>Enhances engagement and collaboration with a visually stunning display</p>
                                    </div>
                                </div>


                                <div>
                                    <p className="section-title">04.   Real-Time Content Sharing</p>
                                    <div className='TIME-SOLU-EDU'>
                                        <p>Enables interactive communication with multi-touch capabilities and device integration.</p>
                                    </div>
                                </div>


                                <div>
                                    <p className="section-title">05. Versatile Use</p>
                                    <div className='TIME-SOLU-EDU'>
                                        <p>Suitable for classrooms, boardrooms, and beyond, transforming spaces into dynamic, collaborative environments.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="page-section" id="where we use">

                    <div className="text-center">
                        <h3 class="rrmc-article-desc-title" >WHERE WE USE</h3>
                        <p class="rrmc-article-desc-intro">NYSTAI's IFPD enhances learning in schools, fosters collaboration in colleges, and facilitates <br /> efficient meetings in industries through seamless device integration.</p>
                    </div>

                    <div className="container mt-4 mb-5">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <img src={dividediv1} className="img-fluid" style={{ borderRadius: "15px 15px 0px 15px" }} />
                                <div className="pt-3 card-para-nys">
                                    <p>College Classroom</p>
                                </div>
                                <img src={dividediv2} className="img-fluid" style={{ borderRadius: "15px 15px 0px 15px" }} />
                                <div className="pt-3 card-para-nys">
                                    <p>Industry board room</p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <img src={dividediv3} className="img-fluid" style={{ borderRadius: "15px 15px 0px 15px" }} />
                                <div className="pt-3 card-para-nys">
                                    <p>School Classroom</p>
                                </div>
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
                                                    <Link to="/ditdet">
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
