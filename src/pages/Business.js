import React from "react";
import { Slide } from 'react-slideshow-image';
import { ReactTinyLink } from "react-tiny-link";
import "../styles/Business.css"
import activity_1 from '../resources/images/activity_1.jpg';
import convention_1 from '../resources/images/convention_1.jpg';
import convention_2 from '../resources/images/convention_2.jpg';
import convention_3 from '../resources/images/convention_3.jpg';
import convention_4 from '../resources/images/convention_4.jpg';
import meeting_1 from '../resources/images/meeting_1.jpg';
import talk from '../resources/images/talk.jpg';

const slideImages = [
    activity_1, convention_1, convention_2, convention_3, convention_4, meeting_1, talk
]

const Business = () => {
    return (
        <div>
            <div className="business-slideshow">
                <Slide duration={3000} className="business-slide" easing="ease">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[6]})`}}>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="business-bottom-container">
                <div className="business-text-container">
                    <h2>Our Business</h2>
                    <p>
                        Our business network consists of
                        suppliers and exporters from all over the world.
                        <br/>
                        We are experts in instruments marketing and we have been
                        distributing medical devices throughout Singapore.
                        <br/>
                        Our customers include major hospitals and polyclinics in Singapore.
                        <br/>
                        <br/>
                        Some of our products are also available on Shopee! Check it out:
                        <br/>
                        <div className="shopee-card">
                            <ReactTinyLink
                                cardSize="small"
                                showGraphic={true}
                                maxLine={2}
                                minLine={1}
                                url="https://shopee.sg/indolapharma"
                            />
                        </div>
                    </p>
                    <div className="padder"/>
                </div>
            </div>
        </div>
    )
}

export default Business