import React, {useState} from "react";
import emailjs from "emailjs-com";
import validate from "../validate";
import useForm from "./useForm";
import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";

function Contact(){
    let [valid, setValid] = useState(false);

    function validateForm() {
        setValid(true);
    }

    //emailjs integration
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
            {!valid ? <ContactForm validateForm={validateForm}/> : <ContactSuccess />}
        </div>
    );
}

export default Contact;