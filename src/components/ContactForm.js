import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

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
      <input className='from_name' type="text" name="from_name" value={formData.from_name} onChange={handleChange}/>
      <label>Email</label>
      <input className='from_email' type="email" name="from_email" value={formData.from_email} onChange={handleChange}/>
      <label>Message</label>
      <textarea className='msg' name="message" value={formData.message} onChange={handleChange}/>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ContactForm;