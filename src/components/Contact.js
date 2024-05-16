import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    // state to manage form inputs
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    // state for form submission status
    const [formSubmitted, setFormSubmitted] = useState(false);

    // handling input changes for form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        console.log("Form submitted:", form);
        // Reset form fields
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section className="contact">
            <h1>Contact Me</h1>
            {formSubmitted ? (
                <div className="thankYouMessage">
                    <p>
                        Thank you for reaching out! I will get back to you soon.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="contactForm">
                    <div className="formGroup">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton">
                        Send
                    </button>
                </form>
            )}
        </section>
    );
};

export default Contact;
