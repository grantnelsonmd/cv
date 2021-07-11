import React, {useState} from "react";
import validate from "../validate";
import useForm from "./useForm";
import emailjs from "emailjs-com";
import ContactSuccess from "./ContactSuccess";

export default function ContactForm(formSubmitted) {
    const {handleChange, handleSubmit, values, errors} = 
    useForm(submit, validate);
    const [successfulSubmit, setSuccessfulSubmit] = useState(false);

    function submit(e){
        setSuccessfulSubmit(true);
        sendEmail(e);
    }

    //emailjs integration
    let userId = "user_pRU8DqoslX8I9cL2nyPta";
    let templateId = "contact-form-template";

    function sendEmail(e) {
        emailjs.sendForm('gmail', templateId, e.target, userId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            {!successfulSubmit ? 
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1 className="form-section">Contact Me</h1>
                <div className="form-section">
                    <label className="form-label">
                    Name 
                    <span className="form-error">{errors.name && errors.name}</span>
                    </label>
                        <input 
                        className="form-input" 
                        type="text" 
                        name="name"
                        value={values.name}
                        onChange={handleChange} 
                        autoComplete="off"
                        />
                </div>
                <div className="form-section">
                    <label className="form-label">
                    E-Mail 
                    <span className="form-error">{errors.email && errors.email}</span>
                    </label>
                        <input 
                        className="form-input" 
                        type="text" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="off"
                        />
                </div>
                <div className="form-section">
                    <label className="form-label">
                    Message 
                    <span className="form-error">{errors.message && errors.message}</span>
                    </label>
                        <textarea 
                        className="form-input" 
                        type="text" 
                        name="message" 
                        value={values.message}
                        onChange={handleChange}
                        autoComplete="off"
                        />
                </div>
                <div className="form-section">
                    <button className="form-btn" type="submit" value="Send">Submit</button>
                </div>
            </form>
            :
            <ContactSuccess />}
        </div>
    )
}