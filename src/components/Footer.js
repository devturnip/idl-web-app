import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import idl_logo from '../resources/idl_logo.jpg';

const Footer = () => {
    return(
        <div class="fixed-bottom">
            <Container>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavbarBrand class="navbar-brand">
                    <img id="logo_footer" src={idl_logo} />
                </NavbarBrand>
                <span class="navbar-text">
                    <p id="ft-a" class="footer-text">
                    Indola Pharma Link Singapore Pte Ltd, 8 Burn Road #10-09 Trivex, Singapore 369977
                        Tel : +65 66369007 Fax : +65 66369008, Susanty HP : +65 90478019
                    Email : <a href="mailto: indolaoffice@gmail.com">indolaoffice@gmail.com</a> or
                        <a href="mailto: indola@singnet.com.sg"> indola@singnet.com.sg</a>
                    </p>
                    <p id="ft-b" class="footer-text">
                    Copyright © 2010-2021 Indola Pharma Link Pte Ltd, Singapore
                    </p>
                </span>
                </nav>
            </Container>
        </div>
    )
}

export default Footer;