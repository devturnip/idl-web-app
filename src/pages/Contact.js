import React from "react";
import "../styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact">
            <div className="map">
                <h2>Find us!</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.73478179781!2d103.88378161513246!3d1.33534376199293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178dfa6b6985%3A0x5659453ad116e5f3!2sTrivex!5e0!3m2!1sen!2skr!4v1613037295029!5m2!1sen!2skr"
                        width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0">
                </iframe>
            </div>
            <div className="contact-text">
                <p>
                    Indola Pharma Link Singapore Pte Ltd
                    <br/>
                    8 Burn Road #10-09 Trivex
                    <br/>
                    Singapore 369977
                    <br/>
                    Tel : +65 66369007
                    <br/>
                    Fax : +65 66369008
                    <br/>
                    Email 1 : indola@singnet.com.sg
                    <br/>
                    Email 2 : indola@gmail.com.sg
                    <br/>
                    Susanty HP : +65 90478019
                    <br/>
                </p>
            </div>
        </div>
    )
}

export default Contact