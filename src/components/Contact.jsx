import React from "react";
import {init} from "emailjs-com";

function Contact(){
    let user = "user_pRU8DqoslX8I9cL2nyPta";
    let apiKey = "17a90a938f601c0997c82991db3bcc39";

    init(user);

    return(
        <div className="col-md-9 col-sm-12 my-auto" id="about-page">
            <p><a href="mailto: grantnelsonmd@gmail.com">I look forward to hearing from you.</a></p>
        </div>
    )
}

export default Contact;