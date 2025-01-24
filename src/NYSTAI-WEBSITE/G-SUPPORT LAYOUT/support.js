import React from "react";
import './support.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import faqs from '../IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/faq-668405a9687a6.webp'
import whatsapp from '../IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/subtract-668405adc24fa.webp'
import CHATWITHUS from '../IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/pngwingcom-668405ac87a41.webp'
import Footer_product from "../A-LAYOUT/footer";
import { FaUser, FaEnvelope, FaBuilding, FaCity, FaGlobe, FaAddressCard, FaCommentAlt, FaBox } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import CountryList from 'react-select-country-list';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sep from '../IMAGES-VIDEOS/F-IMG-SUPPORT-LAYOUT/Untitled-1 (1) (1).png'
import HeadingForm from "./threeForm";


export default function Support() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const openChatbot = () => {
        if (window.$zoho && window.$zoho.salesiq) {
            window.$zoho.salesiq.floatwindow.visible("show");
        }
    };

    // useEffect(() => {
    //     openChatbot();
    // }, []);



    return (
        <>

            {/* Contact Banner */}
            <div className='ban-img'>
                <h1>CONTACT US</h1>
            </div>

            {/* Contact Contents */}
            <div className='row img-form container-fluid '>
                <div className="col-lg-6 col-md-12 col-sm-12 contact-right-support-nystai" style={{ marginTop: "30px" }}>


                    <div style={{ marginBottom: '50px' }}>
                        <div >
                            <h6 className="text-nav-topics-nystai pb-3" style={{ fontSize: "1.9rem" }}>GET IN TOUCH!</h6>
                            <h1 style={{ marginTop: "30px" }}> <FontAwesomeIcon icon={faMobile} shake style={{ color: "#1d736f", }} className="me-1 " />+91 81899 77700</h1>
                        </div>
                    </div>

                    <div className="col-12" style={{ marginBottom: '50px' }}>
                        <h6 className="text-nav-topics-nystai pb-3" style={{ fontSize: "1.75rem" }}>CHAT WITH  US</h6>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center parallel-opp-img">
                                <a href="https://wa.me/+918189977700" target="_blank">
                                    <img src={whatsapp} className="whats-icon-support-nystai" style={{ height: '10vh', width: 'fit-content' }} />
                                </a>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center ">
                                <img src={CHATWITHUS} className="whats-icon-support-nystai" style={{ height: '10vh', width: 'fit-content', cursor: "pointer" }} onClick={openChatbot} />
                            </div>

                        </div>
                    </div>
                    <div style={{ marginBottom: '50px' }}>
                        <div >
                            <h6 className="text-nav-topics-nystai pb-3" style={{ fontSize: "1.9rem" }}>FAQs</h6>
                            <a >
                                <img src={faqs} className="whats-icon-support-nystai" style={{ height: '10vh', width: 'fit-content' }} alt="nys-pro-image" />
                            </a>
                        </div>
                    </div>


                </div>

                <div className=" col-lg-6 col-md-12" >
                    <div style={{ marginTop: '30px' }}>
                        <div>
                            <h6 className="text-nav-topics-nystai pb-3 text-center" style={{ fontSize: "1.9rem", textTransform: "uppercase" }}>prosperous future!</h6>
                        </div>
                    </div>


                    <HeadingForm />
                </div>
            </div>



            {/* <div class="container">
                <div class="common-top-div">
                    <h6 class="head-h-divtopic">
                        <span style={{ color: "#1b6763" }}>NYST</span>AIoT
                    </h6>
                    <h3 class="head-h-divtopic"></h3>
                    <h6 class="sechead-h-divtop">
                        The Maiden Unified platform for Video Alarm and Access control Solutions
                    </h6>
                </div>

                <div class="card mb-3" style={{ backgroundColor: "#1b6763", borderRadius: "30px" }}>
                    <div class="row g-0">
                        <div class="col-md-12 col-lg-3 order-sm-2 order-md-1 svg-arrow-nystai">
                            <svg class="block-online-demo__arrows" width="250" height="350" viewBox="0 0 285 434" fill="none">

                                    <path
                                        d="M270.8 362.7C221 332 183.4 280.5 159.1 209.6 138.8 150.5 131.9 89.7 129.7 49L157 47.6C159.1 86.5 165.6 144.7 184.9 200.8 207 265.5 240.8 312.1 285 339.4L270.8 362.7Z"
                                        fill="#309C2F" />
                                    <path
                                        d="M129.9 51L100.7 81.2C98.7 83.3 96.3 83.3 94.2 81.3L81.1 68.6C79 66.6 79 64.2 81 62.1L139.5 1.6C141.5-0.5 143.9-0.5 146 1.5L206.4 60C208.5 62.1 208.5 64.4 206.5 66.6L193.7 79.7C191.7 81.9 189.4 81.9 187.2 79.8L157.3 50.8 129.9 51Z"
                                        fill="#309C2F" />
                                    <path
                                        d="M14.3 362.7L0 339.4C31.8 319.8 58.3 291 78.9 253.5 95.6 223.1 108.5 187 117.1 146.2 131.9 76 128.9 15.9 128.8 15.3L156 13.8C156.1 16.3 159.4 77.7 143.9 151.2 134.7 194.7 121 233.4 103 266.4 80.1 308.1 50.3 340.5 14.3 362.7Z"
                                        fill="#0F306E" />
                                    <path
                                        d="M81.4 365.4L60 348.5C139.6 247.1 128.6 17.6 128.4 15.3L155.6 13.8C155.7 16.2 158.8 74.6 151.4 147 141.3 245.6 117.8 319.1 81.4 365.4Z"
                                        fill="#0040DB" />
                                    <path d="M156.3 26.9L129.1 26.9 129.1 351.1 156.3 351.1 156.3 26.9Z"
                                        fill="#00E6A7" />
                                    <path
                                        d="M203 365.4C166.7 319.1 143.1 245.5 133.1 147 125.6 74.7 128.6 16.2 128.8 13.8L156 15.3 142.4 14.6 156 15.3C155.9 17.6 144.8 247 224.4 348.5L203 365.4Z"
                                        fill="#085440" />
                                    <path
                                        d="M270.8 362.7C221 332 183.4 280.5 159.1 209.6 138.8 150.5 131.9 89.7 129.7 49L157 47.6C159.1 86.5 165.6 144.7 184.9 200.8 207 265.5 240.8 312.1 285 339.4L270.8 362.7Z"
                                        fill="#F6F4EF" />
                                    <path
                                        d="M129.9 51L100.7 81.2C98.7 83.3 96.3 83.3 94.2 81.3L81.1 68.6C79 66.6 79 64.2 81 62.1L139.5 1.6C141.5-0.5 143.9-0.5 146 1.5L206.4 60C208.5 62.1 208.5 64.4 206.5 66.6L193.7 79.7C191.7 81.9 189.4 81.9 187.2 79.8L157.3 50.8 129.9 51Z"
                                        fill="#F6F4EF" />
                               
                            </svg>
                        </div>
                        <div class="col-md-12 col-lg-9 d-flex order-sm-1 order-md-2 align-items-center justify-content-center">
                            <div class="card-body text-center">
                                <h1 class="standalone text-white">Ready to learn more?</h1>

                                <div class="d-flex align-items-center justify-content-center mt-3 mb-3">
                                    <button type="button" class="btn btn-outline-light me-3 bg-white text-dark">
                                        <Link to="/nystai-services">
                                            See Demo
                                        </Link>
                                    </button>
                                    <button type="button" class="btn btn-outline-light">
                                        <Link to="/nystai-protplan">
                                            See Pricing
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <Footer_product />

        </>
    )
}