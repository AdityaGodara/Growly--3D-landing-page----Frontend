import { AnimatePresence, m, motion } from 'framer-motion';
import { slideAnimation } from '../config/motion';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessType: '',
        number: '',
        message: ''
    });

    const [errors, setErrors] = useState({}); 
    const [isSubmitted, setIsSubmitted] = useState(false); 
    const [success, setSuccess] = useState(false); 
    const [submitText, setSubmitText] = useState('Send enquiry');
    const [loading, setLoading] = useState(false); 

    const validateForm = () => {
        const currentErrors = {}; 

        // Name Validation
        if (!formData.name.trim()) {
            currentErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            currentErrors.name = 'Name must be at least 2 characters long';
        }

        // Email Validation
        if (!formData.email.trim()) {
            currentErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            currentErrors.email = 'Email address is invalid';
        }

        // Phone Number Validation (matches 10 to 15 digits)
        const phoneRegex = /^\d{10,15}$/;
        if (!formData.number.trim()) {
            currentErrors.number = 'Phone number is required';
        } else if (!phoneRegex.test(formData.number.trim())) {
            currentErrors.number = 'Phone number must be 10 to 15 digits (no spaces/dashes)'; // Updated message for exact digits
        }

        // Message Validation
        if (!formData.message.trim()) {
            currentErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            currentErrors.message = 'Message must be at least 10 characters long';
        }

        // Business Type Validation
        if (!formData.businessType || formData.businessType.trim() === "") {
            currentErrors.businessType = 'Please select a business type';
        }

        setErrors(currentErrors); 
        return Object.keys(currentErrors).length === 0; 
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));


        if (isSubmitted) {
            validateForm();
        }
    };

    const sendMail = async (data) => {
        setLoading(true); 
        setSubmitText("Sending...");
        try {
            const response = await axios.post('https://growly-backend-nkch.onrender.com/equiry', data);
            if (response.status === 200) {
                setSuccess(true);

                setFormData({
                    name: '',
                    email: '',
                    businessType: '',
                    number: '',
                    message: ''
                });
                setErrors({}); 
                setIsSubmitted(false); 
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSuccess(false);

        } finally {
            setLoading(false);
            setSubmitText("Send enquiry"); 
        }
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        setIsSubmitted(true); 

        const isValid = validateForm(); 

        if (isValid) {
            console.log('Form data is valid:', formData);
            await sendMail(formData); 
        } else {
            console.log('Form has validation errors.');
            setSubmitText("Send enquiry"); 
            setLoading(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                <motion.div className="form-container" id="demo-form">
                    <div className="heading">
                        {success ? <span className="success-message" style={{color: "green"}}>Enquiry sent successfully!</span> : "Book Free Demo Now!"}
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <motion.input
                            placeholder="Full Name"
                            id="name"
                            name="name"
                            type="text" 
                            className={`input ${errors.name ? 'input-error' : ''}`} 
                            onChange={handleChange}
                            value={formData.name} 
                            {...slideAnimation('left')}
                        />
                        {errors.name && <span className="error-message" style={{color: 'red'}}>{errors.name}</span>}

                        <motion.input
                            placeholder="E-mail"
                            id="email"
                            name="email"
                            type="email"
                            className={`input ${errors.email ? 'input-error' : ''}`}
                            onChange={handleChange}
                            value={formData.email}
                            {...slideAnimation('right')}
                        />
                        {errors.email && <span className="error-message" style={{color: 'red'}}>{errors.email}</span>}

                        <motion.input
                            placeholder="Phone Number (e.g: 6382936722)"
                            id="num"
                            name="number"
                            type="tel" // Changed type to "tel" for phone number
                            className={`input ${errors.number ? 'input-error' : ''}`}
                            pattern="[0-9]{10,15}" // Pattern only for initial browser hint, validation is in JS
                            onChange={handleChange}
                            value={formData.number}
                            {...slideAnimation('left')}
                        />
                        {errors.number && <span className="error-message" style={{color: 'red'}}>{errors.number}</span>}

                        <motion.select
                            id="business-type"
                            name="businessType"
                            className={`input mt-1 block w-full pl-3 pr-10 p-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md ${errors.businessType ? 'input-error' : ''}`}
                            onChange={handleChange}
                            value={formData.businessType}
                            {...slideAnimation('right')}
                        >
                            <option value="" disabled>Business Type...</option>
                            <option value="sole-proprietorship">Sole Proprietorship</option>
                            <option value="partnership">Partnership</option>
                            <option value="llc">Limited Liability Company (LLC)</option>
                            <option value="s-corp">S Corporation</option>
                            <option value="c-corp">C Corporation</option>
                            <option value="non-profit">Non-Profit Organization</option>
                            <option value="freelancer">Freelancer/Independent Contractor</option>
                            <option value="startup">Startup</option>
                            <option value="other">Other</option>
                        </motion.select>
                        {errors.businessType && <span className="error-message" style={{color: 'red'}}>{errors.businessType}</span>}

                        <motion.textarea
                            placeholder="Message"
                            id="message"
                            name="message"
                            className={`input ${errors.message ? 'input-error' : ''}`}
                            onChange={handleChange}
                            value={formData.message}
                            {...slideAnimation('left')}
                        />
                        {errors.message && <span className="error-message" style={{color: 'red'}}>{errors.message}</span>}

                        <motion.button
                            type="submit"
                            className="login-button"
                            disabled={loading}
                            {...slideAnimation('up')}
                        >
                            {loading ? 'Sending...' : submitText}
                        </motion.button>
                    </form>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Form;
