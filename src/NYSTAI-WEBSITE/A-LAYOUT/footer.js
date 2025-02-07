import React, { useState } from "react";
import './footer.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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

  const menuData = [
    {
      title: "Company",
      children: [
        { name: "About Us", path: "/about-us" },
        { name: "Career", path: "/career" },
        { name: "Compliance", path: "/compliance" },
        { name: "Quality Policy", path: "/quality-policy" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "Nystai eLearning", path: "/nystai-elearning" },
      ],
    },
    {
      title: "Support",
      children: [
        { name: "Contact Us", path: "/support/contact-us" },
        { name: "Submit a Ticket", path: "/support/submit-ticket" },
        { name: "Consultations", path: "/support/consultations" },
        { name: "Where to Buy", path: "/support/where-to-buy" },
        { name: "FAQ & Help", path: "/support/faq-help" },
        { name: "BLOG", path: "/support/blog" },
      ],
    },
    {
      title: "Protect Plan",
      children: [
        { name: "Virtual Guard", path: "/protect-plan/virtual-guard" },
        { name: "Alarm", path: "/protect-plan/alarm" },
        { name: "Camera & Alarm", path: "/protect-plan/camera-alarm" },
        { name: "Access Control", path: "/protect-plan/access-control" },
        { name: "Ai-VMS", path: "/protect-plan/ai-vms" },
        { name: "Electric Fence", path: "/protect-plan/electric-fence" },
      ],
    },
    {
      title: "Solutions",
      children: [
        { name: "Residential", path: "/solutions/residential" },
        { name: "Industrial & Warehouse", path: "/solutions/industrial-warehouse" },
        { name: "Banking", path: "/solutions/banking" },
        { name: "Retail", path: "/solutions/retail" },
        { name: "Education", path: "/solutions/education" },
        { name: "Health Care", path: "/solutions/health-care" },
      ],
    },
  ];

  return (
    <>

      <body className="body-footer-content big-screen-footer">
        <footer className="nystai-foo-com">

          <div class="content-footer-com">

            <div class="link-boxes">
              <ul class="box">
                <li class="link_name">Company</li>
                <li><Link to="/SUPPORT">About Us</Link></li>
                <li><Link to="/SUPPORT">Career</Link></li>
                <li><Link to="/SUPPORT">Compliance</Link></li>
                <li><Link to="/SUPPORT">Quality Policy</Link></li>
                <li><Link to="/footblog">Case Studies</Link></li>
                <li><Link to="/SUPPORT">Nystai eLearning</Link></li>
              </ul>
              <ul class="box">
                <li class="link_name">Support</li>
                <li><Link to="/SUPPORT">Contact Us</Link></li>
                <li><Link to="/SUPPORT">Submit a Ticket</Link></li>
                <li><Link to="/SUPPORT">Consultations</Link></li>
                <li><Link to="/SUPPORT"> Where to Buy</Link></li>
                <li><Link to="/SUPPORT">FAQ & Help</Link></li>
                <li><Link to="/footblog">BLOG</Link></li>
              </ul>
              <ul class="box">
                <li class="link_name">Protect Plan</li>
                <li><Link to="/hybriddet">Virtual Guard</Link></li>
                <li><Link to="/Alarmdet">Alarm</Link></li>
                <li><Link to="/Camerdet">Camera & Alarm</Link></li>
                <li><Link to="/Accessdet">Access Control</Link></li>
                <li><Link to="/vmsde">Ai-VMS</Link></li>
                <li><Link to="/electricdet">Electric Fence</Link></li>
              </ul>
              <ul class="box">
                <li class="link_name">Solutions</li>
                <li><Link to="/nystai-solution-home">Residential</Link></li>
                <li><Link to="/nystai-solution-Industrial">Industrial & Warehouse</Link></li>
                <li><Link to="/nystai-solution-banking">Banking</Link></li>
                <li><Link to="/nystai-solution-retail">Retail</Link></li>
                <li><Link to="/nystai-solution-education">Education</Link></li>
                <li><Link to="/nystai-solution-Hospital">Health Care</Link></li>
              </ul>

              <ul class="box input-box">
                <li class="link_name">Media</li>

                <div className="d-flex align-items-center justify-content-center" style={{ flexDirection: "column" }}>
                  <li><Link to="/SUPPORT"><input type="button" value="Subscribe Newsletter" /></Link></li>

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
                        <a href="http://www.youtube.com/@NYSTAI" target="-blank">
                          <FontAwesomeIcon
                            icon={faYoutube}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#FF0000" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/share/1BmNDtcsuY/" target="_blank">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#1877F2" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/nystaiiot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#E4405F" }}
                          />
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div className="col-6 mt-4">
                    <ul style={{ listStyle: "none" }}>

                      <li>
                        <a href="https://x.com/Nystai_iot?t=fFMeQXZ3W5-2T95uZ_iQHg&s=09" target="_blank">
                          <FontAwesomeIcon
                            icon={faXTwitter}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#fff" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://wa.me/+918189977700" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#1DA1F2" }}
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/nystai-iot-leading-aiot-security-solutions-a18a07339" target="_blank">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            className="me-3 mb-3"
                            style={{ fontSize: "25px", color: "#0077B5" }}
                          />
                        </a>
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
                <a href="#">  <Link to="/nystai-privacy-policy">Privacy Policy</Link> |</a>
                <a href="#"> <Link to="/nystai-warrenty">Warrenty</Link>|</a>
                <a href="#"> <Link to="/nystai-terms-condition">TERMS & SERVICE</Link></a>
              </span>
            </div>
          </div>

        </footer>
      </body>

      {/* MOBILE-FOOTER */}
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
              <a href="https://www.instagram.com/nystaiiot?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#E1306C" }}
                  className="icon-scocial-text-nystai"
                />
              </a>
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
              <a href="https://www.linkedin.com/in/nystai-iot-leading-aiot-security-solutions-a18a07339" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#FFA500" }}
                  className="icon-scocial-text-nystai"
                />
              </a>
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
            <div className="text-white">Warranty</div>
            <div className="text-white">TERMS & SERVICE</div>
            <hr className="container hr-mobile-foo" />
            <div className="text-white mb-3">Copyright © 2024<br /> All Rights Reserved by <br />ADHIBA TECHNOLOGIES PRIVATE LIMITED</div>
          </div>
        </div>
      </body>
 
    </>
  )
}

