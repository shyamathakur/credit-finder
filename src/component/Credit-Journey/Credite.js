import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiOutlineArrowNarrowRight, HiOutlineCubeTransparent } from "react-icons/hi";
import { GiAlarmClock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import "./Credit.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Credite() {
    return (
        <Container className="credit-container bg-white">
            <Row className="kick-jouney">
                <Col>
                    <p className="kick-head"><b>Kick Off Your Credit Journey Easy Way</b></p>
                    <p className="partnered text-gray-700">
                        We have partnered with various providers to bring you numerous options. Get
                        exciting rewards and benefits on every transaction you make.
                    </p>
                    <button className="Feature ">More Feature <HiOutlineArrowNarrowRight /></button>
                </Col>
            </Row>
            <Row className="convenient-div-main">
                <Col className="conta">
                    <Col className="convenient1">
                        <p className="conventien-home-div"><FiThumbsUp className="icon-size text-[#1b70de]" /> <b className="icon-text">Convenient</b></p>
                        <p className="text-gray-700">We are here to save you from putting extra time and efforts to get a credit card.</p>
                    </Col>
                    <Col className="convenient ">
                        <p><HiOutlineCubeTransparent className="icon-size text-[#1b70de]" /><b className="icon-text">Transparent</b></p>
                        <p className="text-gray-700">We believe in transparency of the process so that we can earn your trust.</p>
                    </Col>
                </Col>
                <Col className="conta">
                    <Col className="convenient ">
                        <p><GiAlarmClock className="icon-size text-[#1b70de]" /> <b className="icon-text">Quick</b></p>
                        <p className="text-gray-700">We don’t want you to keep waiting for fulfilling your needs.</p>
                    </Col>
                    <Col className="convenient ">
                        <p><BiSupport className="icon-size text-[#1b70de]" /> <b className="icon-text">Support</b></p>
                        <p className="text-gray-700">Our experts are always available to solve any user query</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Credite