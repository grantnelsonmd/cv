import React, {useState} from "react";
import validate from "../validate";
import useForm from "./useForm";

export default function ContactForm({validateForm}) {
    const {handleChange, values, handleSubmit, errors} = 
    useForm(validateForm, validate);

    let [submitted, updateSubmitted] = useState(false);

    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1 className="form-section">Contact Me</h1>
                <div className="form-section">
                    <label className="form-label">Name <span className="form-error">{errors.name && errors.name}</span></label>
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
                    <label className="form-label">E-Mail <span className="form-error">{errors.email && errors.email}</span></label>
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
                    <label className="form-label">Message <span className="form-error">{errors.message && errors.message}</span></label>
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
                    <button className="form-btn" type="submit" value="Send">{submitted? "Thank you" : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}