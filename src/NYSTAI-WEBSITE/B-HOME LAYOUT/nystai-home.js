import React from "react";
import { useEffect, useRef } from "react";
import './nystai-home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Rightleft from './rightleftcard'
import { faAngleLeft, faAngleRight, faBlog, faCompass, faHeadset, faMicrochip, faPeopleArrows, faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { faTint, faBroadcastTower, faMobileAlt, faShieldAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slickcard from "./cardslider";
import { AsyncImage } from 'loadable-image';
import { Blur } from 'transitions-kit';
import { getImages } from '../A-LAYOUT/utils';
import Trial from "./Homeslider";
import Footerproduct from "../A-LAYOUT/footer";
import testitri from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/homepage-testimonal-logo.png";
import wlc from "../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/Tank Manager.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Register modules
AOS.init();

export default function Nystaihome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = getImages();
  return (
    <>

      <body className="body-nystai" >

        <Trial />

        <div class="flex-container-nystai-scroll">
          <div class="slider-container">
            <ul class="slider">
              <li class="slider__slide">
                <div class="slide__content" >   <FontAwesomeIcon icon={faMicrochip} className="me-3" style={{ fontSize: "3vh", color: '#00aaff' }} />TECHNOLOGIES</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" >   <FontAwesomeIcon icon={faPeopleArrows} className="me-3" style={{ fontSize: "3vh", color: '#ff6600' }} />INTEGRATED SOLUTIONS</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" > <FontAwesomeIcon icon={faCompass} className="me-3" style={{ fontSize: "3vh", color: '#28a745' }} />PRODUCT</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" ><FontAwesomeIcon icon={faShieldVirus} className="me-3" style={{ fontSize: "3vh", color: '#ff0000' }} />PROTECT PLAN</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" >  <FontAwesomeIcon icon={faServer} className="me-3" style={{ fontSize: "3vh", color: '#6c757d' }} />SERVICES</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" >  <FontAwesomeIcon icon={faHeadset} className="me-3" style={{ fontSize: "3vh", color: '#007bff' }} />SUPPORT</div>
              </li>
              <div class="d-flex">
                <div class="vr"></div>
              </div>
              <li class="slider__slide">
                <div class="slide__content" >  <FontAwesomeIcon icon={faBlog} className="me-3" style={{ fontSize: "3vh", color: '#6610f2' }} />BLOGS</div>
              </li>
            </ul>
          </div>
        </div>

        <Slickcard />

        <section className='bgfpc'>
          <div id="orange-sectionmain3">
            <h1 id="orange-section-title">Our Integrated Video alarm linkage solution <br />is perfect for the vigilant homeowner</h1>
            {/* <p id="orange-section-desc">  Who wants to keep an eye on their home and family (including beloved pets) - even when you can’t be there.<br />
        You will have full control with the Ultimate NystAI Security System. With more sensors, more cameras plus home automation equipment,<br />
        you and your family will be prepared for ultimate monitoring and anything  unexpected, under a single control panel & App.</p> */}
          </div>
        </section>

        <Card />

        <section className="container">
          <div className="common-top-div">
            <h6 className="head-h-divtopic" >
              <span style={{ color: "#1b6763" }}>Automated</span>  Water Level Controller
            </h6>
            <h6 className="sechead-h-divtop" >
              Smart monitoring, precise control, prevents overflow, saves water efficiently.
            </h6>
          </div>
          <center className="page-section " id="Where we use">
            {/* <img src={waterlc} className="img-fluid" style={{ height: "45vh", width: "fit-content", marginLeft: "7%" }} /> */}
            <img src={wlc} className="img-fluid" style={{ height: "25vh", width: "fit-content" }} />
          </center>
          <div className="row " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="col-lg-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div className="" style={{ textAlign: "center" }}>
                <p> Introducing our Automated Water Level Controller with a built-in level monitor and 1000-meter range, ensuring efficient water management for your home or business. With a 1-year warranty, this system guarantees reliability, automates water usage, and prevents overflows. Stay in control with real-time monitoring from anywhere, even on your mobile device. </p>
                <p>
                  Enjoy peace of mind with cutting-edge technology designed to save water and reduce costs. Whether you're nearby or miles away, our controller keeps you updated and in control. Perfect for residential, agricultural, and industrial applications, it's the smart way to manage water resources effortlessly and sustainably.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container footerBoxes">
          <p className="mt-5 mb-5 " style={{ fontWeight: "bolder" }}>Key Features: </p>
          <div className="container-fluid">
            <div className="row">
              <div className="col mb-3">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <FontAwesomeIcon icon={faTint} />
                  </span>
                  <div className="info">
                    <h4>Automated water level control with real-time monitoring. </h4>
                  </div>
                </div>
              </div>

              <div className="col mb-3">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <FontAwesomeIcon icon={faBroadcastTower} />
                  </span>
                  <div className="info">
                    <h4>1000-meter range for flexible installation.</h4>
                  </div>
                </div>
              </div>

              <div className="col mb-3">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <FontAwesomeIcon icon={faMobileAlt} />
                  </span>
                  <div className="info">
                    <h4>Mobile connectivity for remote access.</h4>
                  </div>
                </div>
              </div>

              <div className="col mb-3">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </span>
                  <div className="info">
                    <h4>1-year warranty for worry-free usage.</h4>
                  </div>
                </div>
              </div>

              <div className="col mb-3">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  <div className="info">
                    <h4>Ideal for residential, agricultural, and industrial use.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5 ">
          <div className="container common-top-div">
            <h6 className="head-h-divtopic" >
              <span style={{ color: "#1b6763" }}>NYST</span>AI-IoT
            </h6>
            <h6 className="sechead-h-divtop" >
              The Maiden Unified platform for  Video + Alarm and Access control Solutions
            </h6>
          </div>
          <Rightleft />
        </section>

        <section className="sectionsix">
          <section className='logoscroll'>
            <div className="containercommon-top-div">
              <h6 className="head-h-divtopic" >
                Customers    <span style={{ color: "#1b6763" }}>trusted       </span>us with our Seamless Integrations
              </h6>
              <h3 className="head-h-divtopic " >
              </h3>
            </div>

            <div class="Marquee">
              <div class="Marquee-content">
                <div class="Marquee-tag">
                  <img
                    src={images[20]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[21]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[22]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[23]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[24]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[25]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[26]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[27]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[28]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[29]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[30]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[31]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[32]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[33]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[34]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>


                <div class="Marquee-tag">
                  <img
                    src={images[20]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[21]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[22]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[23]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[24]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[25]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[26]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[27]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[28]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[29]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[30]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[31]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[32]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[33]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[34]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>

              </div>

            </div>

            <div class="Marquee">
              <div class="Marquee-content2">
                <div class="Marquee-tag">
                  <img
                    src={images[35]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[36]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[37]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[38]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[39]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[40]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[41]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[42]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[43]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[44]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[45]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[46]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[47]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[48]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[49]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>


                <div class="Marquee-tag">
                  <img
                    src={images[35]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>

                <div class="Marquee-tag">
                  <img
                    src={images[36]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[37]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[38]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[39]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[40]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[41]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[42]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[43]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[44]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[45]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[46]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[47]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[48]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>
                <div class="Marquee-tag">
                  <img
                    src={images[49]}
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />}
                    alt="nys-logo-partner"
                    className=" scroll-logo-home-nystai" />
                </div>

              </div>

            </div>

          </section>
        </section>

        <Card2 />

        <Footerproduct />

      </body >
    </>
  )
}

const Card = () => {
  const images = getImages();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1
        }
      },

    ]
  };
  return (
    <>
      <section>
        <section className="pt-5 pb-5" style={{ overflow: "hidden", backgroundColor: "#151515", color: "#f5f5f5" }} >
          <div className="container common-top-div">
            <h6 className="head-h-divtopic " >
              <span style={{ color: "#1b6763" }}>NYST</span>AI-IoT PRODUCTS
            </h6>
            <h6 className="sechead-h-divtop  " >
              Smart, Connected, Secure Solutions for a Smarter World!
            </h6>

          </div>
          <div className="slider main-slider-nys" >
            <Slider
              ref={sliderRef}
              {...settings}
              style={{ marginLeft: "12%" }}
            >

              <div className="item">
                <div className="card slick-card-nys">
                  <AsyncImage
                    src={images[11]}
                    className="card-img-top slick-card-img-nys" alt="..."
                    Transition={Blur}
                    loader={<div style={{ background: '#888' }} />} />
                  <div className="mt-3 slick-card-body-nys">
                    <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Access control</h6>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="card slick-card-nys" >
                    <AsyncImage
                      className="card-img-top slick-card-img-nys" alt="..."
                      src={images[12]}
                      Transition={Blur}
                      loader={<div style={{ background: '#888' }} />} />
                    <div className="mt-3 slick-card-body-nys">
                      <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Door Sensor</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="item">
                  <div className="card slick-card-nys" >
                    <AsyncImage
                      className="card-img-top slick-card-img-nys" alt="..."
                      src={images[13]}
                      Transition={Blur}
                      loader={<div style={{ background: '#888' }} />} />
                    <div className="mt-3 slick-card-body-nys">
                      <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Fire sensor</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="card slick-card-nys" >
                    <AsyncImage
                      className="card-img-top slick-card-img-nys" alt="..."
                      src={images[14]}
                      Transition={Blur}
                      loader={<div style={{ background: '#888' }} />} />
                    <div className="mt-3 slick-card-body-nys">
                      <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Glass Break Sensor</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="item">
                  <div className="card slick-card-nys" >
                    <AsyncImage
                      className="card-img-top slick-card-img-nys" alt="..."
                      src={images[15]}
                      Transition={Blur}
                      loader={<div style={{ background: '#888' }} />} />
                    <div className="mt-3 slick-card-body-nys">
                      <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>HYBRID AIoT NVR</h6>
                    </div>
                  </div>
                </div>
              </div>


              <div className="item">

                <div className="card slick-card-nys">
                  <AsyncImage
                    src={images[16]}
                    className="card-img-top slick-card-img-nys" alt="..."
                    Transition={Blur}

                    loader={<div style={{ background: '#888' }} />} />
                  <div className="mt-3 slick-card-body-nys">
                    <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Smart Switch</h6>
                  </div>
                </div>

              </div>


              <div className="item">

                <div className="card slick-card-nys">
                  <AsyncImage
                    src={images[17]}
                    className="card-img-top slick-card-img-nys" alt="..."
                    Transition={Blur}

                    loader={<div style={{ background: '#888' }} />} />
                  <div className="mt-3 slick-card-body-nys">
                    <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Wifi Camera</h6>
                  </div>
                </div>

              </div>

              <div className="item">

                <div className="card slick-card-nys">
                  <AsyncImage
                    src={images[18]}
                    className="card-img-top slick-card-img-nys" alt="..."
                    Transition={Blur}

                    loader={<div style={{ background: '#888' }} />} />
                  <div className="mt-3 slick-card-body-nys">
                    <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>Wired Camera</h6>
                  </div>
                </div>

              </div>
              <div className="item">

                <div className="card slick-card-nys">
                  <AsyncImage
                    src={images[19]}
                    className="card-img-top slick-card-img-nys" alt="..."
                    Transition={Blur}

                    loader={<div style={{ background: '#888' }} />} />
                  <div className="mt-3 slick-card-body-nys">
                    <h6 className="card-text text-white" style={{ fontWeight: "bolder", letterSpacing: "1px" }}>INTERACTIVE FLAT PANEL DISPLAY</h6>
                  </div>
                </div>

              </div>


            </Slider>

          </div>

          <div className="arrow d-flex align-items-center justify-content-center mb-5">
            <button
              onClick={previous}
              style={{
                color: currentSlide === 0 ? 'white' : '#2d2d2d',
                backgroundColor: currentSlide === 0 ? '#2d2d2d' : 'white'
              }}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              onClick={next}
              style={{
                color: currentSlide >= totalSlides - settings.slidesToShow ? 'white' : '#2d2d2d',
                backgroundColor: currentSlide >= totalSlides - settings.slidesToShow ? '#2d2d2d' : 'white'
              }}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>

        </section>
      </section>
    </>
  )
}

const Card2 = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  };
  return (
    <>
      <div class="section-testmonials">
        <div class="column-testmonials">
          <div class="section-details">
            <h4 class="name-section">DON’T JUST TAKE
            </h4>
            <h2 class="title-section"> OUR WORD  <br /><b>FOR IT</b></h2>
          </div>

          <div class="swiper-button-testmonials-prev">
            <div className="arrow   d-flex align-items-end justify-content-end ">
              <button
                onClick={previous}
                style={{
                  color: currentSlide === 0 ? 'white' : '#2d2d2d',
                  backgroundColor: currentSlide === 0 ? '#2d2d2d' : 'white'
                }}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
              <button
                onClick={next}
                style={{
                  color: currentSlide >= totalSlides - settings.slidesToShow ? 'white' : '#2d2d2d',
                  backgroundColor: currentSlide >= totalSlides - settings.slidesToShow ? '#2d2d2d' : 'white'
                }}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>

        <div class="swiper-testmonials">
          <Slider
            ref={sliderRef}
            {...settings}
            className="py-2 "
          >
            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4> vasudevan p.k</h4>
                          <h6>Electrical contractor</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "The most recommended water saver.The device has been installed in my house a year back and it's doing a great job."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4> KAVERY GROUP OF COMPANIES</h4>
                          <h6>Ginnings Mills</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "Best Wireless Tank Water Level manager. Recommend this rather than go for long wires to the sump and overhead tanks. No manual intervention required."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4> Ishwarya RajendraKumark</h4>
                          <h6>Home Maker</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "The most recommended water saver.The device has been installed in my house a year back and it's doing a great job."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4> Hari Prasath.S</h4>
                          <h6>Software Developer</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "I've a excellent experience with Adhiba Technologies and their innovative smart class sensors. The quality and functionality of their sensors have greatly enhanced !!!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4>Selva Kumar.P</h4>
                          <h6>Civil Engineer</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "Wireless Tank Manager - Adhiba Labs Private Limited I have been using it for the last 6 months and it's very nice, no worries about water wastage.."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                        </div>
                        <div class="title-slide">
                          <h4> Logaraj Logu</h4>
                          <h6>Auditor</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "Working perfect! We installed in our lodge
                      We have been using SS Sensors type for past 5 years

                      Recommend for commercial purposes!!!!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-3">
              <div className="item">
                <div class="swiper-slide">
                  <div class="card-slide">
                    <div class="head-slide">
                      <div class="header-slide">
                        <div class="header-slide-circle" >
                          <img src={testitri} alt="nys-pro-image" className="img-fluid" />
                          {/*  <img src={testitri} className="img-fluid"/> */}
                        </div>
                        <div class="title-slide">
                          <h4> Boopathi.S</h4>
                          <h6>Farmer</h6>
                        </div>
                      </div>
                    </div>
                    <p class="text-slide">
                      "Really a good product &  must recommended one.i had Installed this device 6months back & working with perfect conditions."
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </>
  )
}