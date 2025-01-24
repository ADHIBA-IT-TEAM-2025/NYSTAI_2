import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { FaUser, FaEnvelope, FaBuilding, FaCity, FaGlobe, FaAddressCard, FaCommentAlt, FaBox } from 'react-icons/fa';
import './support.css'
import 'bootstrap/dist/js/bootstrap.js';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import emailjs from '@emailjs/browser';
import Select from 'react-select';
import 'react-toastify/dist/ReactToastify.css';
import { faMobile } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
const HeadingForm = () => {
    const [activeForm, setActiveForm] = useState("Support");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        message: '',
        businessName: '',
        product: '',
        deviceModel: '',
        serialNumber: '',
        firmwareVersion: '',
        softwareVersion: '',
        privacy: false,
        district: '',
        state: '',
        pincode: '',
        gstNumber: '',
        interestedIn: '',
        currentProducts: '',
        additionalInfo: '',
        FormType: activeForm
    });
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState('');

    const isRequired = activeForm === 'Partner' || activeForm === 'Sales';

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Check if the field being changed is 'gstNumber' and capitalize it
        const updatedValue = name === 'gstNumber' ? value.toUpperCase() : value;

        setFormData({
            ...formData,
            [name]: updatedValue
        });
    };



    const handlePhoneChange = (phone) => {
        setFormData({
            ...formData,
            phone: String(phone), // Ensure phone is treated as a string
        });
    };

    const handleRecaptcha = (token) => {
        setRecaptchaVerified(!!token);
        setRecaptchaError('');
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, privacy: e.target.checked });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            city: '',
            address: '',
            message: '',
            businessName: '',
            product: '',
            deviceModel: '',
            serialNumber: '',
            firmwareVersion: '',
            softwareVersion: '',
            privacy: false,
            district: '',
            state: '',
            pincode: '',
            gstNumber: '',
            interestedIn: '',
            currentProducts: '',
            additionalInfo: '',
            FormType: activeForm
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaVerified) {
            setRecaptchaError('Please verify you are not a robot.');
            return;
        }
        if (!formData.phone) {
            toast.error('Phone number is required.');
            return;
        }
        const formEle = e.target;
        const formDataObj = new FormData(formEle);
        // Append any additional data to formData
        formDataObj.append("FormType", activeForm); // Sales, Support, or Partner

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbwiWqy8jkGQhb2ZP7bQ65cpYDiyMLucp6tj2xzf5zc5DK5dKzpM72dV8tJpO5ccsi6A/exec", {
                method: "POST",
                body: formDataObj,
            });

            const result = await response.text();


            toast.success('Form submitted successfully!');
            handleReset();
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit the form. Please try again.');
        }
        try {
            // Send the form data via EmailJS
            await emailjs.sendForm(
                "service_lyfqebm",
                "template_izyyodh",
                e.target,
                "7LZ7Pyk8u84wlH4qs"
            )


            handleReset();
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit the form. Please try again.');
        }

    };
    const getPlaceholderText = (field) => {
        if (activeForm === 'Partner') {
            if (field === 'name') return 'Owner Name';
            if (field === 'businessName') return 'Organization Name';
            if (field === 'email') return 'Business Email'; // Change placeholder for Partner form
        } else {
            if (field === 'name') return 'Name';
            if (field === 'businessName') return 'Business Name';
            if (field === 'email') return 'Email'; // Default placeholder
        }
        return ''; // Default return if field does not match
    };

    // Render different form fields based on activeForm
    const renderFields = () => {
        const formFields = [];

        if (activeForm === "Partner") {

            formFields.push(
                <div className="form-group col-lg-6" key="district">
                    <FaCity className="form-icon" />
                    <input
                        type="text"
                        name="district"
                        placeholder="District"
                        value={formData.district}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="state">
                    <FaGlobe className="form-icon" />
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="pincode">
                    <FaAddressCard className="form-icon" />
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        maxLength={6}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="gstNumber">
                    <FaCommentAlt className="form-icon" />
                    <input
                        type="text"
                        name="gstNumber"
                        placeholder="GST No"
                        value={formData.gstNumber}
                        onChange={(e) => handleChange(e)}
                        pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z1-9]{1}[Z]{1}[A-Z0-9]{1}$"
                        maxLength={15}
                        required
                    />
                </div>

            );
            formFields.push(
                <div className="form-group col-lg-12 mb-3" key="interestedIn">
                    <FaBox className="form-icon" />
                    <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Interested In</option>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>
                        <option value="Product 4">Product 4</option>
                    </select>
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="currentProducts">
                    <FaCommentAlt className="form-icon1" />
                    <textarea
                        name="currentProducts"
                        placeholder="What products do you currently sell?"
                        value={formData.currentProducts}
                        onChange={handleChange}
                        required
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="additionalInfo">
                    <FaCommentAlt className="form-icon1" />
                    <textarea
                        name="additionalInfo"
                        placeholder="Additional Information / Questions"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        required
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
            );
        }
        if (activeForm === "Support") {
            formFields.push(
                <div className="form-group col-lg-12 mb-3" key="product">
                    <FaBox className="form-icon" />
                    <select
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select Product</option>
                        <option value="Product 1">Product 1</option>
                        <option value="Product 2">Product 2</option>
                        <option value="Product 3">Product 3</option>
                        <option value="Product 4">Product 4</option>
                    </select>
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="deviceModel">
                    <FaBox className="form-icon" />
                    <input
                        type="text"
                        name="deviceModel"
                        placeholder="Device Model"
                        value={formData.deviceModel}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="serialNumber">
                    <FaBox className="form-icon" />
                    <input
                        type="text"
                        name="serialNumber"
                        placeholder="Serial Number"
                        value={formData.serialNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="firmwareVersion">
                    <FaBox className="form-icon" />
                    <input
                        type="text"
                        name="firmwareVersion"
                        placeholder="Firmware Version"
                        value={formData.firmwareVersion}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
            formFields.push(
                <div className="form-group col-lg-6" key="softwareVersion">
                    <FaBox className="form-icon" />
                    <input
                        type="text"
                        name="softwareVersion"
                        placeholder="Software Version"
                        value={formData.softwareVersion}
                        onChange={handleChange}
                        required
                    />
                </div>
            );
        }

        return formFields;
    };

    const renderForm = () => (
        <form className="contact-form " onSubmit={handleSubmit}>

            <div className="mt-4">
                <span style={{ fontSize: '1rem' }}>
                    {activeForm === "Sales" && "Fill out the form below for Sales inquiries."}
                    {activeForm === "Support" && "Fill out the form below for Support inquiries."}
                    {activeForm === "Partner" && "Fill out the form below for Partner inquiries."}
                </span>
            </div>



            <div className="form-row row mt-3">
                <div className="form-group col-lg-6 phone-input-group ">
                    <FaUser className="form-icon" />
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder={getPlaceholderText('name')}
                        value={formData.name}
                        onChange={handleChange}

                    />
                </div>

                <div className="form-group col-lg-6 phone-input-group ">
                    <FaBuilding className="form-icon" />
                    <input
                        type="text"
                        name="businessName"
                        placeholder={getPlaceholderText('businessName')}
                        value={formData.businessName}
                        onChange={handleChange}
                        required={isRequired}
                    />
                </div>


            </div>
            <div className="form-row row">
                <div className="form-group col-lg-6 phone-input-group mb-3">
                    <PhoneInput
                        country={'in'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: 'phone',
                            required: true,
                            placeholder: 'Phone Number',
                        }}
                    />
                </div>

                <div className="form-group col-lg-6">
                    <FaEnvelope className="form-icon" />
                    <input
                        type="email"
                        name="email"
                        placeholder={getPlaceholderText('email')}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>



            </div>
            <div className="form-row row">
                <div className="form-group col-lg-6">
                    <FaAddressCard className="form-icon1" />
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
                <div className="form-group col-lg-6">
                    <FaCommentAlt className="form-icon1" />
                    <textarea
                        name="message"
                        placeholder="Let us know how can we help you"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
            </div>
            <div className="form-row row">
                {renderFields()}
            </div>
            <div className="form-row row full-width">
                <label className="privacy-policy">
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <p>
                        I consent to receive emails about news, marketing & product
                        updates from Delta in accordance with the
                    </p>
                </label>
            </div>
            <div className="captcha-row">
                <ReCAPTCHA
                    sitekey="6Lc7niYqAAAAAPxGa2UC1tP2dUv4I9cdMXLgMgMd"
                    onChange={handleRecaptcha}
                />
                {recaptchaError && <div className="recaptcha-error">{recaptchaError}</div>}
                <div className="d-flex pt-4">
                    <button type="button" className="button-reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" className="button-submit ms-3">Submit</button>
                </div>
            </div>
            <input type="hidden" name="FormType" value={activeForm} />
        </form>
    );


    return (
        <div className="container">
        <div className="card-form-click row">
            <div className="col-lg-4 col-12 mt-2">
                <a onClick={() => setActiveForm("Sales")} className={activeForm === "Sales" ? "active" : ""}>
                    <div class="darksoul-card1">
                        <div class="circle1"></div>
                        <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                        <h2 class="content">SALES</h2>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-12 mt-2">
                <a onClick={() => setActiveForm("Support")} className={activeForm === "Support" ? "active" : ""}>
                    <div class="darksoul-card1">
                        <div class="circle1"></div>
                        <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                        <h2 class="content">SUPPORT</h2>
                    </div>
                </a>
            </div>
            <div className="col-lg-4 col-12 mt-2">
                <a onClick={() => setActiveForm("Partner")} className={activeForm === "Partner" ? "active" : ""}>
                    <div class="darksoul-card1">
                        <div class="circle1"></div>
                        <FontAwesomeIcon icon={faMobile} className="card-click-icon" />
                        <h2 class="content">PARTNER</h2>
                    </div>
                </a>
            </div>

        </div>

        <div className="row justify-content-center">
            {renderForm()}
        </div>
        <ToastContainer />
    </div>

    );
};

export default HeadingForm;
