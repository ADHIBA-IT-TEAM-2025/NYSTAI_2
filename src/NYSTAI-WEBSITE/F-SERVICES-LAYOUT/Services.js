import React, { useEffect, useRef } from "react";
import './services.css';
import servicesbanner from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/services-banner.png'
import typesimage1 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/01.png'
import typesimage2 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/02.png'
import typesimage3 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/03.png'
import whatwedo from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/whatwedo.png'
import ourservices1 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/ourservices (1).png'
import ourservices2 from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/ourservices (2).png'
import ourcore from '../IMAGES-VIDEOS/E-IMG-SERVICES-LAYOUT/bg-img-coresec.png'
import Faqs from "../G-SUPPORT LAYOUT/faqs";
import Footerproduct from "../A-LAYOUT/footer";

export default function Services() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <>

            <body className="services-body ">

                <section className="ser-header-sec">
                    <div className="card text-white">
                        <img className="card-img" src={servicesbanner} alt="Card image" />
                        <div className="container card-img-overlay d-flex justify-content-end">
                            <div className="card-img-overlay-div">
                                <h2 className="card-title">We Provide a wide range <br /> of services</h2>
                                <p className="card-text">including smart solutions, engineering, and manufacturing.</p>
                                <button type="button" className="btn btn-secondary">Contact us</button>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="services-types-head text-center mt-4 mb-4">
                    <h2>How We Work</h2>
                    <p>  We deliver innovative, high-quality solutions with precision, on-time, and cost-effective. </p>
                </div>

                <section className="container-fluid ser-types-sec" style={{ backgroundColor: "#1b6763" }}>
                    <div class="container services-types-card ">
                        <div class="row row-cols-1 row-cols-md-3 g-5">
                            <div class="col">
                                <div class="card h-100">
                                    <img src={typesimage1} class="card-img" alt="..." />
                                    <div class="card-img-overlay  "> <h5 class="card-title">Customer-Centric Approach</h5> <p class="card-text">We understand customer needs and design innovative, high-quality smart home solutions tailored to them.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={typesimage2} class="card-img" alt="..." />
                                    <div class="card-img-overlay"> <h5 class="card-title">Precision Manufacturing</h5> <p class="card-text"> Leveraging advanced technology, we ensure superior manufacturing standards for reliable and cutting-edge products.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src={typesimage3} class="card-img" alt="..." />
                                    <div class="card-img-overlay"> <h5 class="card-title">Timely Delivery & Support</h5> <p class="card-text">Committed to on-time delivery and exceptional service, we prioritize customer satisfaction at every step.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="container-fluid ser-whatwedo-sec">
                    <div className="services-types-head">
                        <h2>How We Work</h2>
                        <p>  We deliver innovative, high-quality solutions with precision, on-time, and cost-effective. </p>
                    </div>

                    <center className="mt-5 mb-5">
                        <img src={whatwedo} className="img-fluid" alt="whatwdo" />
                    </center>
                </section>

                <section className="container-fluid ser-ourservices-sec">
                    <div className="services-types-head">
                        <h2>Our Services</h2>
                        <p> Innovative smart solutions, precision engineering, quality manufacturing, reliable delivery, customer satisfaction.</p>
                    </div>

                    <section className="container service-our-serv-card">

                        <div className="card mb-3">
                            <div className="row g-5">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img
                                        src={ourservices1}
                                        className="img-fluid rounded-start"
                                        alt="Specialized Safeguarding"
                                    />
                                </div>
                                <div className="col-md-8 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Specialized Safeguarding</h5>
                                        <p className="card-text">
                                            At Nystai, our Specialized Safeguarding services provide tailored
                                            security solutions designed to address the unique risks and
                                            challenges faced by your organization. Through expert assessments and
                                            customized strategies, we ensure the protection of your assets,
                                            personnel, and sensitive information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card mb-3" >
                            <div class="row g-5">
                                <div class="col-md-8 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f9f9f9" }}>
                                    <div class="card-body  text-center">
                                        <h5 class="card-title">Deployment Services</h5>
                                        <p class="card-text">At Nystai, our Deployment Services focus on the seamless implementation of systems, technologies, and solutions tailored to your organization’s needs. From initial setup to full operational integration, we ensure smooth transitions and optimal performance, minimizing downtime and maximizing efficiency.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={ourservices2} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>

                    </section>
                </section>

                <section className=" ser-types-sec">
                    <div class="services-types-card">
                        <div class="col core-ser-card">
                            <div class="card h-70">
                                <img src={ourcore} class="card-img core-ser-img " alt="..." />
                                <div class="card-img-overlay">
                                    <div className="text-center mb-4">
                                        <h5>Our Core Values</h5>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-3 ">
                                            <div class="card">
                                                <div class="card-body text-white">
                                                    <h5 class="card-title">Quality</h5>
                                                    <p class="card-text">We prioritize delivering products and services that meet the highest standards of excellence.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 ">
                                            <div class="card">
                                                <div class="card-body text-white">
                                                    <h5 class="card-title">Innovation</h5>
                                                    <p class="card-text">We embrace cutting-edge technology and creative solutions to stay ahead in the industry.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 ">
                                            <div class="card">
                                                <div class="card-body text-white">
                                                    <h5 class="card-title">Reliability</h5>
                                                    <p class="card-text">Our solutions are built to perform consistently, ensuring long-lasting results and trust.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 ">
                                            <div class="card">
                                                <div class="card-body text-white">
                                                    <h5 class="card-title">Customer Satisfaction</h5>
                                                    <p class="card-text">We are committed to exceeding customer expectations with every product and service.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" mobile-core-sec" style={{ backgroundColor: "#1b6763" }}>
                            <div className="text-center text-white  mb-2">
                                <h5 className="pt-5">Our Core Values</h5>
                            </div>
                            <div class="row mobile-core-sec-card">
                                <div class="col-md-3 col-lg-6">
                                    <div class="card">
                                        <div class="card-body text-white">
                                            <h5 class="card-title">Quality</h5>
                                            <p class="card-text">We prioritize delivering products and services that meet the highest standards of excellence.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-lg-6">
                                    <div class="card">
                                        <div class="card-body text-white">
                                            <h5 class="card-title">Innovation</h5>
                                            <p class="card-text">We embrace cutting-edge technology and creative solutions to stay ahead in the industry.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-lg-6">
                                    <div class="card">
                                        <div class="card-body text-white">
                                            <h5 class="card-title">Reliability</h5>
                                            <p class="card-text">Our solutions are built to perform consistently, ensuring long-lasting results and trust.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-lg-6">
                                    <div class="card">
                                        <div class="card-body text-white">
                                            <h5 class="card-title">Customer Satisfaction</h5>
                                            <p class="card-text">We are committed to exceeding customer expectations with every product and service.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <section className="mt-5 mb-5">
                    <Faqs />
                </section>

                <Footerproduct />

            </body>

        </>
    );
}

