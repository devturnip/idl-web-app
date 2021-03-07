import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "../pages/About"
import Products from "../pages/Products"
import Facilities from "../pages/Facilities";
import Business from "../pages/Business";
import Contact from "../pages/Contact";
import NotMatch from "../pages/NotMatch";
import Activities from "../pages/Activities";
import Footer from "./Footer";

import idl_logo from '../resources/idl_logo.jpg';

function MainContainer() {
    return (
        <React.Fragment>
            <Router>
                <header role="logotext">
                    <img id="logo" src={idl_logo} />
                </header>
                <NavBar/>
                <Switch>
                    <Route exact path="/"><Business/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path ="/products"><Products/></Route>
                    <Route path ="/facilities"><Facilities/></Route>
                    <Route path ="/business"><Business/></Route>
                    <Route path ="/contact"><Contact/></Route>
                    <Route path ="/activities"><Activities/></Route>
                    <Route component={NotMatch}></Route>
                </Switch>
                <Footer/>
            </Router>
        </React.Fragment>
    );
}

export default MainContainer