import React from "react";

function Footer(){
    let year = new Date().getFullYear();

    return(
        <div className="footer-main">
            <h1 id="footer-text">© {year} Grant Nelson</h1>
        </div>
    )
}

export default Footer;