import React, { useEffect, useState } from 'react';
import './sample.css'
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Footerproduct from "../A-LAYOUT/footer";
import laningbanner from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/HYBRID-AIoT-NVR-Banner.png'
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon2 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/download.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon4 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/in_built_device_alarm.png'
import icon5 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/lifetime.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import icon10 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/record_live.png'
import icon11 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/simultaneous_viewing.png'
import nvrpdf from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/NYSTAI AI-IoT Hybrid NVR.pdf'
import { Link } from 'react-router-dom';

export default function Sample1() {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = products.filter(product => [1, 4].includes(product.category));

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };


    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    return (
        <>

            <section className='mt-4'>
                <img src={laningbanner} className="img-fluid" />
            </section>

            {/* <section className="icons-pro-des">

                <h1>Smart features included</h1>

                <div className="rrmc-rich-text-divider-line"></div>

                <div className="mb-5 mt-4">
                    <div class="icons-row-card-nys">
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon1} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Cloud storage </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon2} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Download & share video clips </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon3} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Full HD video </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon4} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">In built device alarm</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon5} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Lifetime call & field support</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon5} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Lifetime call & field support</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="">
                    <div class=" icons-row-card-nys">
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon7} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Motion senstivity control </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon8} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Perimeter zoning</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon9} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Person detection </small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon10} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Record live</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon11} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Simultaneous viewing</small>
                                </div>
                            </div>
                        </div>
                        <div class="icons-column-card-nys">
                            <div class="card">
                                <img src={icon11} class="card-img-top" alt="..." />
                                <div class="text-center">
                                    <small class="">Simultaneous viewing</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section> */}

            {/* <Tabsliderpro /> */}
            <div className="mt-4 mb-5">
                <h3 className='mb-4' style={{ color: "#1b6763", fontWeight: "bolder" }}>HYBRID AIoT NVR</h3>
                <div className="prod-row-card-nys">
                    {filteredProducts.map((product, index) => (
                        <div className="prod-column-card-nys mb-2" key={product.id}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-duration="1000"
                            data-aos-delay={100 * index}>
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

            </div>

            {/* <section className='accor-nys-pro mt-5 mb-5'>

                <div className="container common-top-div">
                    <h6 className="head-h-divtopic" >
                        <span style={{ color: "#1b6763" }}>NYST</span>AI-IoT
                    </h6>
                    <h6 className="sechead-h-divtop" >
                        The Maiden Unified platform for  Video + Alarm and Access control Solutions
                    </h6>
                </div>

                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                        </div>
                    </div>
                </div>



            </section> */}

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
                                            <Link to="/hybriddet">
                                                <button type="button" class="btn ms-3">
                                                    Know More<i class="fas fa-shopping-cart"></i>
                                                </button>
                                            </Link>
                                        </div>
                                    </div >
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )}

            <Footerproduct />

        </>
    );
}