import React, { useState } from 'react';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });

    // Email validation on every change
    if (name === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors({ ...errors, email: 'Invalid email address' });
      } else {
        // Remove error if email is valid
        const newErrors = { ...errors };
        delete newErrors.email;
        setErrors(newErrors);
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      setErrors({ ...errors, [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required` });
    } else {
      // Remove error if field is not empty
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate the logic to send the data to an API or handle it as required
    console.log('Form submitted:', formFields);
    
    // Clear the input fields after submission
    setFormFields({
      name: '',
      email: '',
      message: ''
    });

    // Set submitted state to true
    setSubmitted(true);
  };
  const handleFormReset = () => {
    // Reset the form fields and set submitted state to false
    setFormFields({
      name: '',
      email: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <p><strong>Thank you for your inquiry!</strong></p>
          <p><strong>You message has been submitted. Once received, I will respond as soon as possible.</strong></p>
          <p><strong><em>Have a great day!</em></strong></p>
          <button onClick={handleFormReset}>Submit Another Message</button>
        </div>
      ) : (
        <> 
        <h1>Contact</h1>
        <form className='contact' name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formFields.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder='Name here...'
              />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formFields.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder='Email here...'
              />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              value={formFields.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder='Message here...'
              />
            {errors.message && <p>{errors.message}</p>}
          </div>

          <button id='submit' type="submit">Submit</button>
        </form>
      </>
      )}
    </div>
  );
};

export default ContactForm;
