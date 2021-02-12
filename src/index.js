import React from "react"
import ReactDom from "react-dom"
import MainContainer from "./components/MainContainer";
import { BrowserRouter as Router} from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer";

ReactDom.render(
    <React.StrictMode>
        <Router>
            <MainContainer/>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)