import React from "react"
import './Footer.css'

function Footer(){
    let currYear: number = new Date().getFullYear();
    return (<div className="footer">
        <p>Copyright ⓒ Fay Nguyen {currYear}</p>
    </div>)
}

export default Footer;