import React, { useState } from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'
import appstore1 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (2).svg'
import appstore2 from '../IMAGES-VIDEOS/A-IMG-HOME-LAYOUT/common/appstore-1 (1).svg'
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footerproduct() {
  const currentYear = new Date().getFullYear()


  // State for keeping track of active panels in single-open and nested accordions
  const [activeSingle, setActiveSingle] = useState(null);
  const [nestedActive, setNestedActive] = useState({});

  const toggleMultiPanel = (index) => {
    document.querySelectorAll(".multi-panel .panel")[index].classList.toggle("active");
  };

  const toggleSinglePanel = (index) => {
    setActiveSingle(activeSingle === index ? null : index);
  };

  const toggleNestedPanel = (parentIndex, childIndex = null) => {
    setNestedActive((prevState) => {
      const newState = { ...prevState };
      if (childIndex !== null) {
        newState[parentIndex] = {
          ...(newState[parentIndex] || {}),
          [childIndex]: !newState[parentIndex]?.[childIndex],
        };
      } else {
        newState[parentIndex] = !newState[parentIndex];
      }
      return newState;
    });
  };
  return (
    <>

      <body className="body-footer-content big-screen-footer">
        <footer className="nystai-foo-com">

          <div class="content-footer-com">

            <div class="link-boxes">
              <ul class="box">
                <li class="link_name">Company</li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Quality Policy</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Nystai eLearning</a></li>
              </ul>
              <ul class="box">
                <li class="link_name">Support</li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Submit a Ticket</a></li>
                <li><a href="#">Consultations</a></li>
                <li><a href="#"> Where to Buy</a></li>
                <li><a href="#">FAQ & Help</a></li>
                <li><a href="#">BLOG</a></li>
              </ul>
              <ul class="box">
                <li class="link_name">Protect Plan</li>
                <li><a href="#">Virtual Guard</a></li>
                <li><a href="#">Alarm</a></li>
                <li><a href="#">Camera & Alarm</a></li>
                <li><a href="#">Access Control</a></li>
                <li><a href="#">Ai-VMS</a></li>
                <li><a href="#">Electric Fence</a></li>
              </ul>
              <ul class="box">
                <li class="link_name">Solutions</li>
                <li><a href="#">Residential</a></li>
                <li><a href="#">Industrial & Warehouse</a></li>
                <li><a href="#">Banking</a></li>
                <li><a href="#">Retail</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Health Care</a></li>
              </ul>

              <ul class="box input-box">
                <li class="link_name">Media</li>

                <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>
                  <li><input type="button" value="Subscribe Newsletter" /></li>

                  <a class=" mb-2" href="https://play.google.com/store/apps/details?id=com.sdfornystalnew&pcampaignid=web_share" target="_blank" rel="noreferrer">
                    <img class="news-app-promo__play-store" src={appstore1} width="161" height="auto" border="0" alt="nys-img" />
                  </a>
                  <a class=" mb-2" href="https://apps.apple.com/in/app/nystai/id6503040541" target="_blank" rel="noreferrer">
                    <img class="news-app-promo__app-store" src={appstore2} width="161" height="auto" border="0" alt="nys-img" />
                  </a>
                </div>

              </ul>
              <ul class="box">

                <div className="row">
                  <div className="col-6 mt-4">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <p target="_blank" rel="noreferrer">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#FF0000" }}
                          />
                        </p>
                      </li>
                      <li>
                        <p target="_blank" rel="noreferrer">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#1877F2" }}
                          />
                        </p>
                      </li>
                      <li>
                        <p target="_blank" rel=" noreferrer">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#E4405F" }}
                          />
                        </p>
                      </li>

                    </ul>
                  </div>
                  <div className="col-6 mt-4">
                    <ul style={{ listStyle: "none" }}>

                      <li>
                        <p target="_blank" rel=" noreferrer">
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#fff" }}
                          />
                        </p>
                      </li>
                      <li>
                        <p target="_blank" rel=" noreferrer">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#1DA1F2" }}
                          />
                        </p>
                      </li>
                      <li>
                        <p target="_blank" rel=" noreferrer">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#0077B5" }}
                          />
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

              </ul>
            </div>
          </div>

          <div class="bottom-details">
            <div class="bottom_text">
              <span class="copyright_text">Copyright © 2024 All Rights Reserved by ADHIBA TECHNOLOGIES PRIVATE LIMITED</span>
              <span class="policy_terms">
                <a href="#">Privacy Policy |</a>
                <a href="#">Warrenty</a>
                <a href="#">|TERMS & SERVICE</a>
              </span>
            </div>
          </div>

        </footer>
      </body>



      <body className="body-footer-content MOBILE-footer">
        <div className="accordion-container">
          {/* Nested Accordion */}
          <div className="section-title">GET IN TOUCH</div>
          <div className="nested-accordion">
            {[
              {
                title: "Company",
                children: [
                  "About Us",
                  "Career",
                  "Compliance",
                  "Quality Policy",
                  "Case Studies",
                  "Nystai eLearning",
                ],
              },
              {
                title: "Support",
                children: [
                  "Contact Us",
                  "Submit a Ticket",
                  "Consultations",
                  "Where to Buy",
                  "FAQ & Help",
                  "BLOG",
                ],
              },
              {
                title: "Protect Plan",
                children: [
                  "Virtual Guard",
                  "Alarm",
                  "Camera & Alarm",
                  "Access Control",
                  "Ai-VMS",
                  "Electric Fence",
                ],
              },
              {
                title: "Solutions",
                children: [
                  "Residential",
                  "Industrial & Warehouse",
                  "Banking",
                  "Retail",
                  "Education",
                  "Health Care",
                ],
              },
            ].map((parent, parentIndex) => (
              <div
                key={parentIndex}
                className={`panel ${nestedActive[parentIndex] ? "active" : ""}`}
              >
                <div
                  className="panel-header"
                  onClick={() => toggleNestedPanel(parentIndex)}
                >
                  {parent.title}
                </div>
                <div className="panel-content">
                  {parent.children.map((child, childIndex) => (
                    <div
                      key={childIndex}
                      className={`sub-panel ${nestedActive[parentIndex]?.[childIndex] ? "active" : ""
                        }`}
                    >
                      <div
                        className="panel-header"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNestedPanel(parentIndex, childIndex);
                        }}
                      >
                        {child}
                      </div>
                      <div className="panel-content">
                        {parent.title === "Support" && (
                          <ul className="box">
                            {[
                              "Contact Us",
                              "Submit a Ticket",
                              "Consultations",
                              "Where to Buy",
                              "FAQ & Help",
                              "BLOG",
                            ].map((supportItem, index) => (
                              <li key={index}>
                                <a href="#">{supportItem}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {parent.title === "Protect Plan" && (
                          <ul className="box">
                            <li className="link_name">Protect Plan</li>
                            <li>
                              <a href="#">Virtual Guard</a>
                            </li>
                            <li>
                              <a href="#">Alarm</a>
                            </li>
                            <li>
                              <a href="#">Camera & Alarm</a>
                            </li>
                            <li>
                              <a href="#">Access Control</a>
                            </li>
                            <li>
                              <a href="#">Ai-VMS</a>
                            </li>
                            <li>
                              <a href="#">Electric Fence</a>
                            </li>
                          </ul>
                        )}
                        {parent.title === "Solutions" && (
                          <ul className="box">
                            <li className="link_name">Solutions</li>
                            <li>
                              <a href="#">Residential</a>
                            </li>
                            <li>
                              <a href="#">Industrial & Warehouse</a>
                            </li>
                            <li>
                              <a href="#">Banking</a>
                            </li>
                            <li>
                              <a href="#">Retail</a>
                            </li>
                            <li>
                              <a href="#">Education</a>
                            </li>
                            <li>
                              <a href="#">Health Care</a>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">

            <div className=" justify-content-center align-items-center social-icons">
              <p>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#E1306C" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#25D366" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#FF0000" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#1877F2" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faTelegramPlane}
                  style={{ color: "#0088CC" }}
                  className="icon-scocial-text-nystai icon-telegram"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ color: "#000" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faBlog}
                  style={{ color: "#FFA500" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#3e65cf" }}
                  className="icon-scocial-text-nystai"
                />
              </p>
            </div>


            <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>

              <a class=" mb-2" href="https://play.google.com/store/apps/details?id=com.sdfornystalnew&pcampaignid=web_share" target="_blank" rel="noreferrer">
                <img class="news-app-promo__play-store" src={appstore1} width="161" height="auto" border="0" alt="nys-img" />
              </a>
              <a class=" mb-2" href="https://apps.apple.com/in/app/nystai/id6503040541" target="_blank" rel="noreferrer">
                <img class="news-app-promo__app-store" src={appstore2} width="161" height="auto" border="0" alt="nys-img" />
              </a>
            </div>
            <hr className="container hr-mobile-foo" />
            <div className="text-white">Privacy Policy </div>
            <div className="text-white">Warrenty</div>
            <div className="text-white">TERMS & SERVICE</div>
            <hr className="container hr-mobile-foo" />
            <div className="text-white mb-3">Copyright © 2024<br /> All Rights Reserved by <br />ADHIBA TECHNOLOGIES PRIVATE LIMITED</div>
          </div>
        </div>
      </body>


    </>
  )
}



























