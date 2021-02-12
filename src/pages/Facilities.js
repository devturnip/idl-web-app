import React from "react";
import "../styles/Facilities.css"
import cert from "../resources/cert.jpg"
import gdpmds from "../resources/gdpmds.jpg"

const Facilities = () => {
    return (
        <div className="facilities-page">
            <h2>Our Facilities</h2>
            <p>
                Good Distribution Practice (GDP) is a part of quality assurance which ensures that
            products are consistently stored, transported and handled under suitable condition as
            required by the marketing authorization or product specification.
            </p>
            <p>
                In order to provide such assurance, companies will require more than just a set of quality manuals.
                A set of comprehensive systems are required to provide assurance which includes appropriate procedures,
                suitably qualified personnel, correct processes / facilities / equipment as well as clear and timely documentation.
            </p>

            <p>
                At Indola Pharma Link, we possess:
                <ul>
                    <li className="fitem">Our own storage facilities certified to GDPMDS.</li>
                    <li className="fitem">Certificates for both import and export activities.</li>
                    <li className="fitem">Registered for distribution services.</li>
                    <li className="fitem">Our own transport system for local distribution with an experienced transport team.</li>
                </ul>
            </p>
            <img className="cert-images" src={cert} alt ="cert"/>
            <img className="cert-images" src={gdpmds} alt ="gdpmds"/>
        </div>
    )
}

export default Facilities