import React from "react";
import "../styles/Activities.css"
import give_1 from "../resources/images/give_1.jpg"

const Activities = () => {
    return (
        <div className="activities-container">
            <div className="activities-text">
                <h2>Mission</h2>
                <p>
                    At Indola Pharma Link, we believe in giving back to the community. <br/>
                    Over the past few years we have been active in donating to those who are in need. <br/>
                    Some of our activities include donating basic necessities to orphanages in Indonesia,
                    as well as donating food and items to the needy.
                </p>
            </div>
            <div className="activities-photos">
                <img id="give_1" src={give_1} alt="give_1"/>
            </div>
        </div>
    )
}

export default Activities;