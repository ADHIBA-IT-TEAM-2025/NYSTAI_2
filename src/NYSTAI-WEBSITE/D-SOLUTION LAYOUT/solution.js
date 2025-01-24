// import React, { useEffect, useRef } from 'react';
// import './solution.css'
// // import solutionvide from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution-1 (1) (1).webm'
// import Rightleft from '../B-HOME LAYOUT/rightleftcard';
// // import maincar1 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution-1 (1) (1).webm'
// // import maincar2 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution-1 (2) (1).webm'
// // import maincar3 from '../IMAGES-VIDEOS/C-IMG-SOLUTION-LAYOUT/solution-1 (3) (1).webm'
// import Footerproduct from '../A-LAYOUT/footer';

// export default function Solutionnystai() {

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     const videoRef = useRef(null);

//     const handleMouseOver = () => {
//         videoRef.current.play();
//     };

//     const handleMouseOut = () => {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//     };

//     const videoRef1 = useRef(null);

//     const handleMouseOver1 = () => {
//         videoRef1.current.play();
//     };

//     const handleMouseOut1 = () => {
//         videoRef1.current.pause();
//         videoRef1.current.currentTime = 0;

//     };

//     const videoRef2 = useRef(null);

//     const handleMouseOver2 = () => {
//         videoRef2.current.play();
//     };

//     const handleMouseOut2 = () => {
//         videoRef2.current.pause();
//         videoRef2.current.currentTime = 0;
//     };

//     return (

//         <>

//             <section >
//                 <section class="showcase">
//                     <video src={solutionvide} autoPlay
//                         loop
//                         muted></video>
//                 </section>
//             </section>

//             <section >
//                 <section class=" card-video-solu-nystai mt-5 mb-5">

//                     <h4 class=" h6-video-solu-nystai" >right monitoring.</h4>
//                     <h6 class=" h4-video-solu-nystai mb-5" >CONTINUE YOUR JOURNEY</h6>
//                     <div class="container">
//                         <div class="row row-cols-1 row-cols-md-3 g-4">
//                             <div class="col">
//                                 <div class="card">
//                                     <div class="card-img-top" style={{ height: "410px" }}>
//                                         <video
//                                             height="410" width="435"
//                                             autoPlay={false}
//                                             loop={true}
//                                             onMouseOver={handleMouseOver1}
//                                             onMouseOut={handleMouseOut1}
//                                             muted={true}
//                                             ref={videoRef1}
//                                             src={maincar1}
//                                         ></video>
//                                     </div>
//                                     <div class="card-body">
//                                         <h5 class="card-title">SMART HOME</h5>
//                                         <p class="card-text">
//                                             No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.Seamlessly integrates with all third-party devices & networks from all brands at no extra cost.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div class="card">
//                                     <div class="card-img-top" style={{ height: "410px" }}>
//                                         <video
//                                             height="410" width="435"
//                                             autoPlay={false}
//                                             loop={true}
//                                             onMouseOver={handleMouseOver2}
//                                             onMouseOut={handleMouseOut2}
//                                             muted={true}
//                                             ref={videoRef2}
//                                             src={maincar2}
//                                         ></video>
//                                     </div>
//                                     <div class="card-body">
//                                         <h5 class="card-title"> HOME SECURITY</h5>
//                                         <p class="card-text">
//                                             No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.Seamlessly integrates with all third-party devices & networks from all brands at no extra cost.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div class="col">
//                                 <div class="card">
//                                     <div class="card-img-top" style={{ height: "410px" }}>
//                                         <video
//                                             height="410" width="435"
//                                             autoPlay={false}
//                                             loop={true}
//                                             onMouseOver={handleMouseOver}
//                                             onMouseOut={handleMouseOut}
//                                             muted={true}
//                                             ref={videoRef}
//                                             src={maincar3}
//                                         ></video>
//                                     </div>
//                                     <div class="card-body">
//                                         <h5 class="card-title">FIRE ALARM</h5>
//                                         <p class="card-text">
//                                             No additional IT infrastructure is required, which results in reduced CAPEX & OPEX costs.Seamlessly integrates with all third-party devices & networks from all brands at no extra cost.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </section>

//             <section class=" bg-gray-900 text-start  flex flex-col justify-center">
//                 <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2  max-w-5xl mx-auto">
//                     <div class="card card-hover-nys-ser">
//                         <div class="circle"></div>
//                         <div class="relative lg:pr-44">
//                             <h2 class="capitalize text-white  ">strategy & <br />digital marketing</h2>
//                             <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
//                         </div>
//                     </div>
//                     <div class="card card-hover-nys-ser">
//                         <div class="circle"></div>
//                         <div class="relative lg:pl-48">
//                             <h2 class="capitalize text-white  ">visual <br /> graphic design</h2>
//                             <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
//                         </div>
//                     </div>
//                     <div class="card card-hover-nys-ser">
//                         <div class="circle"></div>
//                         <div class="relative lg:pr-44">
//                             <h2 class="capitalize text-white  ">strategy & <br />digital marketing</h2>
//                             <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
//                         </div>
//                     </div>
//                     <div class="card card-hover-nys-ser">
//                         <div class="circle"></div>
//                         <div class="relative lg:pl-48">
//                             <h2 class="capitalize text-white  ">effective<br /> business growth</h2>
//                             <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <div class=" common-top-div">
//                     <h6 class="head-h-divtopic">
//                         <span style={{ color: "#1b6763" }}>NYST</span>AIoT
//                     </h6>

//                     <h6 class="sechead-h-divtop">
//                         The Maiden Unified platform for Video Alarm and Access control Solutions
//                     </h6>
//                 </div>
//                 <Rightleft />
//             </section>

//             <Footerproduct />
//         </>


//     );
// };

