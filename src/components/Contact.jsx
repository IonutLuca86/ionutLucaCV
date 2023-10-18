import '../components/Contact.css'
import {BsCalendarDate,BsTelephone} from 'react-icons/bs';
import {FaMapLocationDot} from 'react-icons/fa6';
import {AiOutlineMail,AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const [values, setValues] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const newErrors = {};
    if (values.user_name.trim() === '') {
      newErrors.user_name = 'Name is required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
      newErrors.user_email = 'Invalid email address';
    }
    if (values.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {       
      
      setValues({user_name: "", user_email: "", message: ""});
      console.log('Form is valid. Sending email...');
      emailjs.sendForm('service_0tge9sb', 'template_vvprw0i', e.target,'OkwVV7KBWHyGzrMTS')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Thank you for your message! I will get back to you shortly!")
    }, function(error) {
       console.log('FAILED...', error);
       alert("Failed to send message! Try again!")
    });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };

  return(
    <div className="about-container">
            <div className='about-title'>
                <p className="text-large blue">Contact info</p>
            </div>
                
                <div className="vl-contacts"></div>
                <div className="about-text-container"> 
                <div className='contact-info'>
                    <div className='skills-list'>
                        <div className='skills'>
                        <p className='text-large gray'><BsCalendarDate/></p>
                        <p className='text-normal gray ml-3'> 1986-06-18</p>
                    </div>
                      <div className='skills'>
                        <p className='text-large gray'><FaMapLocationDot/></p>
                        <p className='text-normal gray ml-3'> Stockholm,Sweden</p>
                    </div>
                      <div className='skills'>
                        <p className='text-large gray'><BsTelephone/></p>
                        <p className='text-normal gray'> (+46) 076 587 90 94</p>
                    </div>
                    </div>
                                      
                    <div className='skills-list'>
                    <div className='skills'>
                        <p className='text-large gray'><AiOutlineMail/></p>
                        <a href= "mailto: ic.luca@outlook.com" className='link'>
                        <p className='text-normal gray ml-3'> ic.luca@outlook.com</p></a>
                    </div>
                      <div className='skills'>
                        <p className='text-large gray'><AiOutlineLinkedin/></p>
                        <a href="https://www.linkedin.com/in/ionut-luca-b4938924b/" className='link ' target='blank'>
                            <p className='text-normal gray'> Add me on LinkedIn</p></a>
                    </div>
                     <div className='skills'>
                        <p className='text-large gray'><AiFillGithub/></p>
                        <a href="https://github.com/IonutLuca86" target='blank' className='link '>
                            <p className='text-normal gray'> Follow me on Github</p></a>
                    </div>
                    </div>
                     </div>
                     <div>
                        <p className='text-normal gray ml-3'> Or you can send me a direct message from here and i will get in touch with you :</p>
                    </div> 
                    <div className='form-container'> 
   <form onSubmit={handleSubmit} className="contact-form">
      <input type="hidden" name="from_name" value="CV website" />
      <label className="text-normal gray">Name:</label>
      <input
        type="text"
        name="user_name"
        id="name"
        className="form-input text-normal gray"
        required
        value={values.user_name}
        onChange={handleChange}
      />
      <span className="error-message">{errors.user_name}</span>
      <label className="text-normal gray">Email:</label>
      <input
        type="email"
        name="user_email"
        className="form-input text-normal gray"
        required
        value={values.user_email}
        onChange={handleChange}
      />
      <span className="error-message">{errors.user_email}</span>
      <label className="text-normal gray">Message:</label>
      <textarea
        name="message"
        className="form-message text-normal gray"
        value={values.message}
        onChange={handleChange}
      />
      <span className="error-message">{errors.message}</span>
      <button
        type="submit"
        id="sendBtn"
        className="text-normal form-button"
      >
        Send
      </button>
    </form>
                    
                   </div>
             
                </div>
        </div>
  )

}