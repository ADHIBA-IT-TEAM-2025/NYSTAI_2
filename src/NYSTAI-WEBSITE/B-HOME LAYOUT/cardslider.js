import React, { useRef, useState } from "react";
import './Homeslider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardslider1 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Video & alarm.png';
import cardslider2 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Smart-Home.png';
import cardslider3 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Fire alarm.png';
import cardslider4 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/kitchen safety.png';
import cardslider5 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Lighting.png';
import cardslider6 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/intruder alarm.png';
import cardslider7 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/cardbghome-2-6683ef3b3698d.webp';
import cardslider8 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/bugler alarm.webp';
import cardslider9 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/sound and light alarm.png';
import cardslider10 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/industrial.webp';
import cardslider11 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Water-leakage.png';
import cardslider12 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Tank-Manager.png';
import cardslider13 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/locker-safety.png';
import cardslider14 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Video Doorbell.png';
import cardslider15 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/car-camera.png';
import cardslider16 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Invisible-barrier.png';
import cardslider17 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Electric-Fence.png';
import cardslider18 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/access.webp';
import cardslider19 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/ofice-automation.png';
import cardslider20 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/Interactive Learning.png';
import cardslider21 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/images for .com/smoke.png';

export default function Slickcard() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 21;

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        autoplay: true,
        loop: false,
        autoplaySpeed: 4000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="common-top-div">
                <h6 className="head-h-divtopic ">
                    <span style={{ color: "#1b6763" }}>NYST</span>AI-IoT
                </h6>

                <h6 className="sechead-h-divtop ">
                    The Maiden Unified platform for Video + Alarm and Access control Solutions
                </h6>
            </div>

            <section className="section-hover-card-nystai-home" style={{ overflow: "hidden" }}>
                <div className="slider">
                    <Slider
                        ref={sliderRef}
                        {...settings}
                    >
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider1}
                                        className="full-width img-fluid" alt="Cardhover1" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">Video and Alarm Linkage </div>
                                        <div className="rt-profile-text">
                                            Video and Alarm Linkage integrates security systems by triggering video surveillance when an alarm is activated, enhancing monitoring.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider2}
                                        className="full-width img-fluid" alt="Cardhover2" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Smart Home</div>
                                        <div className="rt-profile-text">
                                            Smart Home uses interconnected devices to automate and control systems like lighting, security, and appliances remotely.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider3}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">  Fire Alarm </div>
                                        <div className="rt-profile-text">
                                            Fire Alarm detects smoke, heat, or fire, alerting occupants through audible or visual signals to ensure safety.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider4}
                                        className="full-width img-fluid" alt="Cardhover4" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Kitchen Safety </div>
                                        <div className="rt-profile-text">
                                            Kitchen Safety involves practices like proper food handling, fire prevention, and appliance use to avoid accidents and ensure a safe cooking environment.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider5}
                                        className="full-width img-fluid" alt="Cardhover5" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Lighting
                                        </div>
                                        <div className="rt-profile-text">
                                            Lighting enables remote control and automation of lights through connected devices, optimizing energy usage and enhancing convenience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider6}
                                        className="full-width img-fluid" alt="Cardhover6" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Intruder Detection
                                        </div>
                                        <div className="rt-profile-text">
                                            Intruder Detection systems use sensors, cameras, and IoT technology to monitor for unauthorized access, triggering alarms or notifications for enhanced security.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider7}
                                        className="full-width img-fluid" alt="Cardhover7" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Perimeter Alarm
                                        </div>
                                        <div className="rt-profile-text">
                                            Perimeter Alarm monitors the outer boundaries of a property, detecting unauthorized entry or breaches and alerting to potential security threats.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider8}
                                        className="full-width img-fluid" alt="Cardhover8" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Bugler Alarm
                                        </div>
                                        <div className="rt-profile-text">
                                            Bugler Alarm is a security system designed to detect unauthorized entry into a property, typically through sensors, alarms, and monitoring systems.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider9}
                                        className="full-width img-fluid" alt="Cardhover2" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 "> Sound & Light Alarm
                                        </div>
                                        <div className="rt-profile-text">
                                            Sound & Light Alarm uses both audible alerts and flashing lights to notify of security breaches or emergencies, ensuring maximum visibility and attention.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider10}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Industrial
                                        </div>
                                        <div className="rt-profile-text">
                                            Industrial IoT sensors monitor machinery and environments, providing real-time data to optimize maintenance, enhance efficiency, and reduce downtime.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider11}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Water Leakage

                                        </div>
                                        <div className="rt-profile-text">
                                            Water Leakage detection systems use sensors to identify and alert about leaks, preventing damage and reducing water wastage in buildings.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider12}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Tank Manager

                                        </div>
                                        <div className="rt-profile-text">
                                            Tank Manager uses sensors and IoT technology to monitor and control liquid levels, ensuring efficient operation and preventing overflows.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider13}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Locker Safety

                                        </div>
                                        <div className="rt-profile-text">
                                            Locker Safety systems use electronic locks, access controls, and monitoring to protect contents, prevent unauthorized access, and ensure secure storage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider14}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Video Doorbell

                                        </div>
                                        <div className="rt-profile-text">
                                            Video Doorbell combines a doorbell with a camera, allowing users to see and communicate with visitors remotely via a NYSTAI app.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider15}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Car Camera

                                        </div>
                                        <div className="rt-profile-text">
                                            Car Camera records video footage of the road and surroundings, providing evidence in case of accidents and enhancing driving safety.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider16}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Invisible Barriers

                                        </div>
                                        <div className="rt-profile-text">
                                            Invisible Barriers use advanced technology, such as infrared or ultrasonic sensors, to create undetectable perimeters for security and safety without physical barriers.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider17}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Electric Fence

                                        </div>
                                        <div className="rt-profile-text">
                                            Electric Fence provides security by emitting a low-voltage electric shock to deter unauthorized entry, protecting property or livestock.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider18}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Access Control

                                        </div>
                                        <div className="rt-profile-text">
                                            Access Control systems manage and restrict entry to secure areas using methods like key cards or PINs to enhance security.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider19}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Office Automation

                                        </div>
                                        <div className="rt-profile-text">
                                            Office Automation uses technology to streamline and automate routine tasks like data entry, communication, and scheduling, improving efficiency and productivity.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider20}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Interactive Learning

                                        </div>
                                        <div className="rt-profile-text">
                                            Interactive Learning engages students through hands-on activities, multimedia, and real-time feedback, enhancing understanding and retention of educational material.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="item">
                                <div className="rt-profile-card">
                                    <img
                                        src={cardslider21}
                                        className="full-width img-fluid" alt="Cardhover3" />
                                    <div className="rt-profile-body">
                                        <div className="rt-profile-name mb-3 ">
                                            Smoke Sensor
                                        </div>
                                        <div className="rt-profile-text">
                                            NYSTAI Smoke Sensor detects the presence of smoke in the air, triggering alarms to alert occupants and help prevent fire-related damage.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>

                    <div className="arrow d-flex align-items-center justify-content-center mb-5">
                        <button
                            onClick={previous}
                            style={{
                                color: currentSlide === 0 ? 'black' : 'grey',
                                backgroundColor: currentSlide === 0 ? 'grey' : 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button
                            onClick={next}
                            style={{
                                color: currentSlide >= totalSlides - settings.slidesToShow ? 'black' : 'grey',
                                backgroundColor: currentSlide >= totalSlides - settings.slidesToShow ? 'grey' : 'black'
                            }}
                        >
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </section>


        </>
    );
}

