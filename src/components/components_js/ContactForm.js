import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../components_css/ContactForm.css';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3uatax8', 'template_t94dikc', form.current, 'RtDBbwf84_FZuK31o')
      .then((result) => {
        console.log(result.text);

        setFormData({
          from_name: '',
          from_email: '',
          message: '',
        });

        setSubmitSuccess(true);

      }, (error) => {
        console.log(error.text);
      });
  };

  const handleChange = (e) => {
    // Update form data as the user types
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className='contact_form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input required className='from_name' type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder='Enter your name' />
      <label>Email</label>
      <input required className='from_email' type="email" name="from_email" value={formData.from_email} onChange={handleChange} placeholder='Enter your email' />
      <label>Message</label>
      <textarea required className='msg' name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder='Enter your message' />
      <button class="btn btn--outline btn--medium btn--form" type="submit" value="Submit">Send message</button>
      {submitSuccess && <p className="success-message">Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;