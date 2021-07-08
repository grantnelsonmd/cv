import React, {useState} from "react";
import emailjs from "emailjs-com";

function Contact(){
    let [submitted, updateSubmitted] = useState(false);
    let userId = "user_pRU8DqoslX8I9cL2nyPta";
    let templateId = "contact-form-template";

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', templateId, e.target, userId)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        updateSubmitted(true);
        e.target.reset();
      }

    return(
        <div>
            <form className="contact-form" onSubmit={sendEmail}>
                <h1 className="form-section">Contact Me</h1>
                <div className="form-section">
                    <label className="form-label">Name</label>
                        <input className="form-input" type="text" name="name" />
                </div>
                <div className="form-section">
                    <label className="form-label">E-Mail</label>
                        <input className="form-input" type="text" name="email" />
                </div>
                <div className="form-section">
                    <label className="form-label">Message</label>
                        <textarea className="form-input" type="text" name="message" />
                </div>
                <div className="form-section">
                    <button className="form-btn" type="submit" value="Send">{submitted? "Thank you" : "Submit"}</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;