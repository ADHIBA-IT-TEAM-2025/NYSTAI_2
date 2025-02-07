
import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Homeslider.css';
import banner1 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/smarthome-banner.png';
import banner2 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/video-and-alarm-banner.png';
import banner3 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Intruder-alarm-banner.png';
import banner4 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Fire-alarm-Banner.png';
import banner5 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Industrial-banner.png';
import banner6 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/warehouse-banner.png';
import banner7 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Banking-Banner.png';
import banner8 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/bannners jpng/Access-Control-banner.png';
import { AsyncImage } from 'loadable-image';
import { Blur } from 'transitions-kit';

export default function Trial() {

    const nextDomRef = useRef(null);
    const prevDomRef = useRef(null);
    const carouselDomRef = useRef(null);
    const SliderDomRef = useRef(null);
    const thumbnailBorderDomRef = useRef(null);
    const runTimeOutRef = useRef(null);
    const runNextAutoRef = useRef(null);
    const timeRunning = 1000;
    const timeAutoNext = 4000;

    useEffect(() => {
        nextDomRef.current = document.getElementById('next');
        prevDomRef.current = document.getElementById('prev');
        carouselDomRef.current = document.querySelector('.carousel-nystai-home1');
        SliderDomRef.current = carouselDomRef.current.querySelector('.list');
        thumbnailBorderDomRef.current = document.querySelector('.carousel-nystai-home1 .thumbnail-nystai-slider-home1');

        nextDomRef.current.onclick = function () {
            showSlider('next');
            resetAutoPlay();
        };

        prevDomRef.current.onclick = function () {
            showSlider('prev');
            resetAutoPlay();
        };

        function autoNextSlide() {
            nextDomRef.current.click();
        }

        function resetAutoPlay() {
            clearTimeout(runNextAutoRef.current);
            runNextAutoRef.current = setTimeout(autoNextSlide, timeAutoNext);
        }

        runNextAutoRef.current = setTimeout(autoNextSlide, timeAutoNext);

        return () => {
            clearTimeout(runNextAutoRef.current);
        };
    }, []);

    function showSlider(type) {
        let SliderItemsDom = SliderDomRef.current.querySelectorAll('.item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel-nystai-home1 .thumbnail-nystai-slider-home1 .item');

        if (type === 'next') {
            SliderDomRef.current.appendChild(SliderItemsDom[0]);
            thumbnailBorderDomRef.current.appendChild(thumbnailItemsDom[0]);
            carouselDomRef.current.classList.add('next');
        } else {
            SliderDomRef.current.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDomRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDomRef.current.classList.add('prev');
        }

        clearTimeout(runTimeOutRef.current);
        runTimeOutRef.current = setTimeout(() => {
            carouselDomRef.current.classList.remove('next');
            carouselDomRef.current.classList.remove('prev');
        }, timeRunning);

        let interval = 100;
        let steps = timeRunning / interval;
        let currentStep = 0;

        let progressTimer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                clearInterval(progressTimer);
            }
        }, interval);
    }

    return (
        <>

            <div className="carousel-nystai-home1" style={{ overflow: "hidden" }}>

                <div className="list" >
                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner1}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">SMART HOME</div>
                            <div className="des">
                                SMART HOME From the everyday safety & security to the totally unforgettable, know what’s happening at home from wherever you are.
                            </div>
                        </div>
                    </div>
                    

                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner4}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">FIRE Alarm</div>
                            <div className="des">
                                No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.
                            </div>
                        </div>
                    </div>


                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner2}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">VIDEO & ALARM LINKAGE</div>
                            <div className="des">
                                Seamlessly integrates with all third-party devices & networks from all brands at no extra cost.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner3}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">INTRUDER ALARM</div>
                            <div className="des">
                                Better protection starts with smarter prevention its engineered to intelligently identify and deter real threats, Using light and sound to scare away lurkers before they become burglars.
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner5}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">INDUSTRIAL</div>
                            <div className="des">
                                Increase situational awareness with multi-dimensional Alarm & Reduce property loss with risk detection and evacuation.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner6}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">WARE HOUSE</div>
                            <div className="des">
                                No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner7}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">BANKING</div>
                            <div className="des">
                                Have peace of mind knowing your customers' assets are secure. Protect important documents with access-controlled counter cabinets.
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <AsyncImage
                            className="img" alt="..."
                            src={banner8}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="title">ACCESS CONTROLS</div>
                            <div className="des">
                                No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.
                            </div>
                        </div>
                    </div>

                </div>

                <div className="thumbnail-nystai-slider-home1">
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner1}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">SMART HOME</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner2}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">VIDEO & ALARM LINKAGE</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner3}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">INTRUDER ALARM</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner4}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">FIRE ALARM</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner5}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">INDUSTRIAL</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner6}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">WARE HOUSE</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner7}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">BANKING</div>
                        </div>
                    </div>
                    <div className="item">

                        <AsyncImage
                            className="img" alt="..."
                            src={banner8}
                            Transition={Blur}
                            loader={<div style={{ background: '#888' }} />} />
                        <div className="content">
                            <div className='bar-item-text-line'></div>
                            <div className="description">ACCESS CONTROLS</div>
                        </div>
                    </div>


                </div>

                <div className="arrows">
                    <button id="prev" ref={prevDomRef}><FontAwesomeIcon icon={faAngleLeft} /></button>
                    <button id="next" ref={nextDomRef}><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>
            </div>

        </>
    );
}






