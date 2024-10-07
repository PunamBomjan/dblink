"use client";
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react'; // Import icons from lucide-react

import React from 'react';

const Contact: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Log values to console for debugging
      console.log(values);
      alert('Form submitted successfully!'); // Feedback for users
      resetForm(); // Reset the form fields
    },
  });

  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      delay: 200,
      reset: true,
    });

    // Apply the reveal effect to the form
    sr.reveal('.contact-form', { interval: 200 });
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br to-yellow-300 from-purple-600 py-4 px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md flex flex-col md:flex-row contact-form">
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-8 text-purple-600">Contact Info</h2>

          {/* Phone Number */}
          <div className="flex items-center mb-6">
            <Phone className="h-6 w-6 mr-2 text-gray-600" />
            <p className="text-lg">+977 9826740064</p>
          </div>

          {/* Email Address */}
          <div className="flex items-center mb-6">
            <Mail className="h-6 w-6 mr-2 text-gray-600" />
            <p className="text-lg">Nftticketingwebpro@gmail.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center mb-6">
            <MapPin className="h-6 w-6 mr-2 text-gray-600" />
            <p className="text-lg">06453 Baneshowr, Kathmandu, Nepal</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-8 w-8 text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-8 w-8 text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-8 w-8 text-blue-600" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-8 w-8 text-red-600" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 p-4">
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <label className="block">
              <input 
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg bg-yellow-500 text-black"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              ) : null}
            </label>
            <label className="block">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg bg-yellow-500 text-black"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </label>
            <label className="block">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg bg-yellow-500 text-black"
                rows={5}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
              ) : null}
            </label>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
