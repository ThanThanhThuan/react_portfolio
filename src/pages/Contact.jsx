import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
        }
        if (!formData.message) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            // Here you would normally send data to backend
            console.log(formData);
            setFormData({ name: '', email: '', message: '' });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container">
            <h1>Contact Me</h1>
            {isSubmitted && <div style={{ color: 'green', margin: '1rem 0' }}>Message sent successfully!</div>}

            <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '500px', marginTop: '1rem' }}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" name="message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>

                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;