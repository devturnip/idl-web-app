import React from "react"
import ReactDom from "react-dom"
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router} from "react-router-dom";
import { Helmet } from "react-helmet"
import "./App.css"
import idl_logo from "./idl_logo.ico"

const TITLE = "INDOLA PHARMA LINK"

ReactDom.render(
    <React.StrictMode>
        <Helmet>
            <title>{ TITLE }</title>
            <link rel="shortcut icon" type="image/png" href={ idl_logo } sizes="16x16"/>
        </Helmet>
        <Router>
            <MainContainer/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)