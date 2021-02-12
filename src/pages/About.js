import React from "react";
import personal_1 from "../resources/images/personal_1.jpg"
import "../styles/About.css"

const About = () => {
    return (
        <div class="aboutpage">
            <div className="about-text-container">
                <h2>About Indola Pharma Link</h2>
                    <p>Established in 2005, we introduce ourselves as one of the leading distributors
                    and marketing agents for various medical device companies
                    from all over the world. <br/>As specialists in orthopaedic
                    surgical equipments and implants, we are committed to delivering quality
                    services to our customers and suppliers as well enjoying good
                    reputation among our valued customers.
                    </p>

                    <p>Our organization has 5 of the following principles as our core: Quality, Respect to Individual, Innovation, Commitment and Service.
                    </p>

                    <p>Our business network consists of suppliers and
                    exporters from all over the world. <br/>
                    We are experts in instruments marketing
                    and have been distributing medical devices and surgical products throughout Singapore. <br/>
                    Our contacts range from various established manufacturers to distributors
                    throughout the world and are in touch with the latest achievement in international science
                    and technology.
                    </p>

                    <p>Indola Pharma Link owns a competent marketing force and an established distribution network. <br/>
                    The network is spread throughout the country with medical detailing personnel and executives reaching out to the medical
                    profession and trade. <br/>
                    Our marketing executives reach out to medical professionals to create and
                    develop brand awareness. <br/>
                    Our aim is placing quality products with quality services globally.
                    </p>
            </div>
            <div className="image-container">
                <img id="personal_1" src={personal_1} alt="personal"/>
            </div>
            <p id='padding'><br/></p>
        </div>
    )
}

export default About