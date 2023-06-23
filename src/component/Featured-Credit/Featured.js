import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lit from "../../assets/lit.png";
import aura from "../../assets/aura.png";
import axis from "../../assets/axis.png";
import "./Featured.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Featured() {
    return (
        <div>
            <Container className="featured-container bg-white">
                <Row className="Credit-div ">
                    <Col>
                        <p className="cards-featured "><b>Featured Credit Cards</b></p>
                        <p className="text-gray-700">We have some cards handpicked to deliver
                            you with the best services and benefits.</p>
                    </Col>
                </Row>
                <Row className="featured-Credit-div-last">
                    <Col className="first-div">
                        <img className="logo"
                            src={axis}
                            alt="" />
                        <div className="flipkart">
                            <p className="div-pera "><b>Axis Bank Flipkart Visa Credit Card</b></p>
                            <p className="">
                                Welcome Benifits Worth Rs 1000 Including Rs 500
                                Worth Flipkart Gift Voucher.
                                Unlimited 5% Cashback On Flipkart & Myntra. 4% Cashback On Cleartrip Curefit,
                                Pvr, Swiggy, Tata 1mg, Tatasky Uber..
                            </p>
                            <button className="Learn bg-[#1b70de]">Learn More</button>
                        </div>
                    </Col>
                    <Col className="first-div1">
                        <img className="logo"
                            src={lit}
                            alt="" />
                        <div className="flipkart">
                            <p className="div-pera "><b>AU Bank LIT Credit Card</b></p>
                            <p className="">
                                Eligibility to get 3 Months of Free Membership of: ZEE5,
                                Amazon Prime, Cult.fit. Get extra 5% cash back for using LIT Credit Card for travel,
                                dining & groceries, along with one reward point for INR 100 spent...
                            </p>
                            <button className="Learn bg-[#1b70de]">Learn More</button>
                        </div>
                    </Col>
                    <Col className="first-div">
                        <img className="logo"
                            src={aura}
                            alt="" />
                        <div className="flipkart">
                            <p className="div-pera "><b>IndusInd Platinum Aura credit card</b></p>
                            <p className="">
                                Earn 4X rewards points. ₹2400 savings on fuel surcharge. Get 1.5 Reward Point
                                for every ₹150 spent. Buy 1 Get 1 free on movie ticket. Comprehensive Insurance Benefits...
                            </p>
                            <button className="Learn bg-[#1b70de]">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Featured