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
import worshipbanner from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipbanner.png';
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import overicon1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipicon1 (2).png'
import overicon2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT//worshipicon1 (3).png'
import overicon3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT//worshipicon1 (1).png'
import dividediv1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Worship images/1.jpg'
import dividediv2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Worship images/2.jpg'
import dividediv3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/Worship images/3.png'
import worshipcard1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipcardicon1 (2).png'
import worshipcard2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipcardicon1 (3).png'
import worshipcard3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipcardicon1 (4).png'
import worshipcard4 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipcardicon1 (5).png'
import worshipcard5 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/worshipcardicon1 (1).png'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBuildingColumns, faCarBurst, faCircleInfo, faHandshake, faHome, faHouseSignal, faIndustry, faPlaceOfWorship, faSchool, faWarehouse } from '@fortawesome/free-solid-svg-icons';


export default function WORSHIP() {

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
                    <img class="card-img" src={worshipbanner} alt="Card image" />
                </div>
            </header>

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
                                <NavDropdown.Item className="dropdown-content-a" ><FontAwesomeIcon icon={faPlaceOfWorship} className="me-3" />
                                <Link to="/nystai-solution-worship" >WORSHIP</Link></NavDropdown.Item>
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
                            <Nav.Link className='text-brod'>WORSHIP</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section id="main-content" className="page-sections">

                <section className="container page-section mt-5 mb-5" id="Overview">

                    <div className="mini-block-statement w-clearfix">
                    <p class="rrmc-article-desc-intro" >overview </p>
                        <h3 className="heading-34">Nystai’s Interactive Flat-Panel Display</h3>
                        <p className="text-block-60" >
                            NYSTAI transforms places of worship into modern, secure, and efficient spaces. With advanced surveillance systems, energy optimization tools, and digital management platforms, we address security concerns, reduce energy inefficiencies, and simplify operations. Our cutting-edge solutions ensure safety, streamline processes, and enhance community engagement, delivering a seamless and connected worship experience for all.
                        </p>
                    </div>

                    <div class="card-deck " >
                        <div class="card">
                            <center>
                                <img class="card-img-top" src={overicon1} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title">Safety</h5>
                                <p class="card-text">Advanced surveillance and access control systems ensure a secure environment for worshippers. </p>
                            </div>
                        </div>
                        <div class="card">
                            <center>
                                <img class="card-img-top" src={overicon2} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title">Efficiency</h5>
                                <p class="card-text">Smart energy and crowd management solutions streamline day-to-day operations. </p>
                            </div>
                        </div>
                        <div class="card">
                            <center>
                                <img class="card-img-top" src={overicon3} alt="Card image cap" style={{ height: "85px", width: "fit-content" }} />
                            </center>
                            <div class="card-body">
                                <h5 class="card-title">Connectivity</h5>
                                <p class="card-text">Digital tools enhance communication, organization, and engagement with the congregation. </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container page-section " id="What we offer">
                    <div className='text-center'>
                        <h3 class="rrmc-article-desc-title" >What we offer</h3>
                    </div>

                    <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 mb-5" style={{ alignItems: "center", textAlign: "justify" }}>
                        <div class="col">
                            <div class="card">
                                <img src={dividediv1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h2 class="card-title">Challenges</h2>
                                    <p class="card-text">Temples, churches, and mosques encounter challenges like managing large crowds, ensuring safety, and handling energy wastage. Additionally, administrative burdens, such as organizing donations, volunteer scheduling, and event planning, complicate operations. Without efficient solutions, these issues can hinder the smooth functioning of these sacred spaces, impacting both worshippers and administrators alike. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={dividediv2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h2 class="card-title">Solution</h2>
                                    <p class="card-text">Innovative technologies can address these challenges effectively. Advanced surveillance systems enhance security, while smart lighting and climate control solutions reduce energy wastage. Digital platforms simplify operations by streamlining donations, volunteer management, and event planning. Together, these tools create a safe, efficient, and harmonious environment for worshippers and administrators to focus on their spiritual goals. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card  mt-5 mb-5">
                        <div class="row g-0" style={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "justify" }}>
                            <div class="col-md-4">
                                <img src={dividediv3} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h2 class="card-title">How NYSTAI Solves These Problems </h2>
                                    <p class="card-text">NYSTAI transforms places of worship with advanced, all-encompassing solutions designed to tackle security, energy, and operational challenges. By integrating our smart technologies, temples, churches, and mosques can modernize their operations, ensuring safety, efficiency, and stronger connections with their communities. Let NYSTAI help you create a secure, efficient, and welcoming environment for all worshippers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-section Features-education mt-5  mb-5" id="Features">

                    <div className='text-center'>
                        <h3 class="rrmc-article-desc-title" >Features</h3>
                        <p class="rrmc-article-desc-intro" >Features provided by our Worship solution </p>
                    </div>
                    <div class="container ">
                        <div class="cards-worship-nys">
                            <section class="services ">
                                <div class="container">
                                    <div class="row mb-5">
                                        <div class="col-lg-4">
                                            <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                                <div class="anim-layer"></div>
                                                <i class="fa-solid fa-users display-5 mb-3"> <img src={worshipcard1}/></i>
                                                <h4>Advanced Surveillance</h4>
                                                <p class="text-center mb-0">Ensure safety with real-time monitoring, intelligent CCTV, and access control systems. </p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                                <div class="anim-layer"></div>
                                                <i class="fa-solid fa-users display-5 mb-3"> <img src={worshipcard2}/></i>
                                                <h4>Energy Efficiency</h4>
                                                <p class="text-center mb-0">Reduce costs using smart lighting and automated climate control technologies. </p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                                <div class="anim-layer"></div>
                                                <i class="fa-solid fa-users display-5 mb-3"> <img src={worshipcard3}/></i>
                                                <h5>Digital Donation Management</h5>
                                                <p class="text-center mb-0">Track and manage contributions seamlessly with secure, user-friendly digital platforms</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <div class="col-lg-4 mt-5">
                                            <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                                <div class="anim-layer"></div>
                                                <i class="fa-solid fa-users display-5 mb-3"> <img src={worshipcard4}/></i>
                                                <h4>Smart Crowd Control</h4>
                                                <p class="text-center mb-0"> Monitor and manage large gatherings effectively with innovative crowd management tools. </p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 mt-5">
                                            <div class="card shadow p-5 d-flex flex-column justify-content-center align-items-center">
                                                <div class="anim-layer"></div>
                                                <i class="fa-solid fa-users display-5 mb-3"> <img src={worshipcard5}/></i>
                                                <h4>Streamlined Administration</h4>
                                                <p class="text-center mb-0">Simplify volunteer scheduling, event planning, and reporting with comprehensive digital management .</p>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>


                <main className="container page-section Product-display mb-5" id="Product display">
                    <div className="card-heading-nys mt-5">
                        <h2>PRODUCT DISPLAY</h2>
                        <p>Our innovative IFPD (Interactive Flat Panel Displays) provide crystal-clear visuals, intuitive touch functionality, and seamless integration,<br /> revolutionizing presentations, learning, and collaboration across various industries.</p>
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
