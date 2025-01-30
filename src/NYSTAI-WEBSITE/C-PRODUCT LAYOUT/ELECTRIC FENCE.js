import React, { useState, useEffect } from 'react';
import './sample.css'
import { products } from '../C-PRODUCT LAYOUT/datass.js';
import Footerproduct from "../A-LAYOUT/footer";
import laningbanner from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/Nystai-icons & resize images/Electric-Fence-banner.png'
import icon1 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/cloud-storage.png'
import icon2 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/download.png'
import icon3 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/hd_subscription.png'
import icon4 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/in_built_device_alarm.png'
import icon5 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/lifetime.png'
import icon6 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion.png'
import icon7 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/motion_senstivity_control.png'
import icon8 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/peri-zoning.png'
import icon9 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/person_detection.png'
import icon10 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/record_live.png'
import icon11 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/simultaneous_viewing.png'
import icon12 from '../IMAGES-VIDEOS/B-IMG-PRODUCT-LAYOUT/icons/two_way.png'
import { Link } from 'react-router-dom';

export default function ELECTRICFENCE() {

    const [imgId, setImgId] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const slideImage = () => {
            const displayWidth = document.querySelector('.img-showcase img:first-child')?.clientWidth;
            if (displayWidth) {
                document.querySelector('.img-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
            }
        };

        slideImage();
        window.addEventListener('resize', slideImage);

        return () => {
            window.removeEventListener('resize', slideImage);
        };
    }, [imgId]);

    // Filter products to include only those with id 1 and 5
    const filteredProducts = products.filter(product => [11].includes(product.category));

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };



    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>

            <section className='mt-4'>
                <img src={laningbanner} className="img-fluid" />
            </section>

            <section className="icons-pro-des">
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
            </section>


            <div className="mt-4 mb-5">
                <h3 className='mb-4' style={{ color: "#1b6763", fontWeight: "bolder" }}>ELECTRICFENCE</h3>
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
                                            <Link to="/electricdet">
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

            <Footerproduct />

        </>
    );
}




