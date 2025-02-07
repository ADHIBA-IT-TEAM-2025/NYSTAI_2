import React, { useEffect, useState } from 'react';
import './edusolution.css';
import Footerproduct from '../A-LAYOUT/footer';
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// images
import edubannerlanding from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/warehouse-1 (4).png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/ware - 1 (4).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/ware - 1 (5).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/ware - 1 (2).png'
import indusvideo from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/waresolufu.jpg'

// icons
import Tabsliderpro from '../C-PRODUCT LAYOUT/tab product.js';
gsap.registerPlugin(ScrollTrigger);


export default function Warehouse() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [2,3,4].includes(product.category));

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

                <section className="page-section mb-5 container" id="Overview">

                    <div className="mini-block-statement w-clearfix mt-3">
                        {/* <h3 className="heading-34">NYSTAI’S&nbsp;<span style={{ color: "#1b6763" }}>WAREHOUSE</span>&nbsp;SOLUTIONS </h3> */}
                        <h3 className="heading-34">Nystai’s&nbsp;<span style={{color:"#1b6763"}}> warehouse</span>&nbsp;solutions</h3>
                        <p className="text-block-60" >
                            In warehouses, safety is paramount as heavy machinery and fast-paced operations pose risks to workers and equipment. NYSTAI’s warehouse solutions offer essential products like anti-collision devices, forklift safety lights, alert systems, cameras, and 4G helmets with walkie-talkies. These solutions enhance visibility, communication, and accident prevention, ensuring safer and more efficient work environments. Additionally, emergency lights and virtual signage provide crucial guidance in emergencies, improving overall safety protocols. By integrating these technologies, warehouses can minimize accidents and optimize their operations.
                        </p>
                    </div>

                    <div class="card-deck row">
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", color: "#1b6763", fontWeight: "bolder" }}>Enhances visibility and safety </h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Ensures clear sightlines and awareness. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", color: "#1b6763", fontWeight: "bolder" }}>Prevents warehouse accidents efficiently </h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Reduces risks with smart technology. </p>
                            </div>
                        </div>
                        <div class="card col-lg-4">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title" style={{ textTransform: "uppercase", color: "#1b6763", fontWeight: "bolder" }}>Real-time communication for workers </h5>
                                <p class="card-text" style={{ color: "#8c8c8c" }}>Keeps teams connected and informed. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Whatweoffer " id="What we offer">
                    <div className='text-center'>
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>

                    <section className='tab-indut-solu mt-5'>
                        <Tabsliderpro />
                    </section>

                </section>

                <center className="page-section  mb-4" id="Features">
                    <div className="mini-block-statement w-clearfix mb-5">
                        <h6 className="heading-34">Features Provided by <br />our Warehouse Automation</h6>
                    </div>
                    <img src={indusvideo} className='img-fluid col-lg-8' />
                </center>

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
    );
}

