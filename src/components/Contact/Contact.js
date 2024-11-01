import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Start realizing your vision today!</h4>
      </div>
      <div className={styles.section}>
        <h4>Email</h4>
        <p>sales@realsteelbuildings.net</p>
      </div>
      <div className={styles.section}>
        <h4>Phone</h4>
        <p>808-896-2308</p>
        <p>Monday to Friday - 8am - 4pm</p>
      </div>
    </div>
  );
};

export default Contact;
