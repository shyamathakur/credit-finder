import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineCreditCard } from "react-icons/ai";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { GiAlarmClock } from "react-icons/gi";
import { FiThumbsUp } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TodayCard.css";

function TodayCard() {
    return (
        <div>
            <Container className="todaycard-container bg-white">
                <Row className="Credit-div">
                    <Col>
                        <p className="today font-bold">Get your card today</p>
                        <p className="text-gray-700 quick-today">Trust us it’s quick and easy. Just
                            <span style={{ color: "#1b70de" }}> follow </span> the below steps to get yours.</p>
                    </Col>
                </Row>
                <Row className="today-Credit-div-last ">
                    <Col className="credit-child-div">
                        <div className="fithump">
                            <HiOutlineCubeTransparent className="today-icon-icon" />
                            <div className="today-pera-div">
                                <p className="div-pera "><b>Contact with Us</b></p>
                                <p className="">
                                    Communicate with us with your needs to initiate the process for getting a card.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="credit-child-div">
                        <div className="fithump">
                            <GiAlarmClock className=" today-icon-icon" />
                                    <div className="today-pera-div">
                                <p className="div-pera "><b>Get a call back</b></p>
                                <p className="">
                                    Our executives will call you to help you start your application process once you have informed us about your needs.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="credit-child-div">
                        <div className="fithump">
                            <AiOutlineCreditCard className=" today-icon-icon" />
                                    <div className="today-pera-div">
                                <p className="div-pera "><b>Wait for approval</b></p>
                                <p className="">
                                    After completing the application your eligibility will be checked. This process takes a maximum of 7 days.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="credit-child-div">
                        <div className="fithump">
                            <FiThumbsUp className="today-icon-icon font-bold" />
                            <div className="today-pera-div">
                                <p className="div-pera"><b>Congrats</b></p>
                                <p className="">
                                    Once approved just wait for your card to get delivered, enjoy unlimited benefits.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TodayCard