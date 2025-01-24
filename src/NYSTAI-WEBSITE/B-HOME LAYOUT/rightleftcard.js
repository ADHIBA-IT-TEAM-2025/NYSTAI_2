import React, { useRef, useEffect } from "react";
import './nystai-home.css'
import gsap from "gsap";
import { Power2 } from 'gsap';
import leftimg from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/textcard1-1-6683ef8e4e735.png';
import rightimg from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/Smart-secutoy.png';

export default function Rightleft() {
    const lineRef = useRef();
    const box01Ref = useRef();
    const box02Ref = useRef();
    const itemsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            box01Ref.current,
            {
                opacity: 0,
                clipPath: "polygon(0 0, 0% 0, 0 100%, 0 100%)",
                ease: Power2,
            },
            {
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: Power2,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }
        );
        console.log("itemsRef", itemsRef.current);
        itemsRef.current.map((item, index) => {
            gsap.fromTo(
                item,
                {
                    autoAlpha: 0,
                    scale: 1.5,
                    ease: Power2,
                    clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
                },
                {
                    duration: 0.5,
                    autoAlpha: 1,
                    scale: 1,
                    ease: Power2,
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    scrollTrigger: {
                        trigger: item,
                        start: "top center+=100",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });
    });

    const addToRefs = (item) => {
        if (item && !itemsRef.current.includes(item)) {
            console.log("item", item);
            itemsRef.current.push(item);
        }
    };

    return (
        <>
            <section className="testi-moni-nystai mt-3">
                <div>
                    <div class="row g-0 ">
                        <div class="col-md-6">
                            <div className="App test02">
                                <div ref={lineRef}></div>
                                <div className="image-container22">
                                    <img src={leftimg} alt="nys-image" className="image" ref={addToRefs} />
                                </div>
                                <div ref={box02Ref}></div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-center justify-content-center" >
                            <div className="">
                                <div class="card-body m-5">
                                    <p style={{ textTransform: "uppercase" }}>Unified Platform</p>
                                    <h5 style={{ textTransform: "uppercase" }} class="card-title "> Integrated Video, Alarm,<br /> Access Control</h5>
                                    <p class="card-text">NYSTAI-IoT offers a seamless solution by unifying video surveillance, alarms, and access control for streamlined, secure management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="row g-0">
                        <div class="col-md-6 d-flex align-items-center justify-content-center order-2 order-lg-1" >
                            <div className="">
                                <div class="card-body imtext-card-ist-ser m-5" >
                                    <p style={{ textTransform: "uppercase" }}>Smart Security</p>
                                    <h5 style={{ textTransform: "uppercase" }} class="card-title "> Complete Video, Alarm, <br />Access Integration</h5>
                                    <p class="card-text">NYSTAI-IoT simplifies your security setup by integrating alarms, video monitoring, and access control into one efficient, unified platform.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-lg-2">
                            <div className="App test02">
                                <div ref={lineRef}></div>
                                <div className="image-container22 ">
                                    <img src={rightimg} alt="nys-image" className="image" ref={addToRefs} />
                                </div>
                                <div ref={box02Ref}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



