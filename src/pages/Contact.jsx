import { useState } from 'react';

const ContactForm = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

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
    // Here, you can integrate the form submission logic, like sending the data to an API.
    console.log('Form submitted:', formFields);
  };

  return (
    <form className='contact' onSubmit={handleSubmit}>
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

      <button id = 'submit' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
