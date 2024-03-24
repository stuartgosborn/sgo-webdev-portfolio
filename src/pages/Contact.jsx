import { useState } from 'react';
import ContactCompoent from '../components/ContactComponent'; 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can integrate the logic to send the data to an API or handle it as required
    await console.log('Form submitted:', formFields);

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
    <ContactCompoent
      formFields={formFields}
      errors={errors}
      submitted={submitted}
      handleInputChange={handleInputChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      handleFormReset={handleFormReset}
    />
  );
};

export default ContactForm;
