import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsCashCoin, BsFillFuelPumpFill, } from "react-icons/bs";
import { AiOutlineGift, AiOutlineCreditCard } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Categories.css";

function Categories() {
    return (
        <div>
            <Container className="categories-div-div">
                    <Row className="categories">
                        <p className="categ font-bold">Categories </p>
                        <p className="travel text-gray-700">
                            Shopping, food, travel or fuel…we have a card for every need of yours<br />
                            Choose the one that serves you the best
                        </p>
                    </Row>
                    <Row className="row-div ">
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <AiOutlineCreditCard className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>Best Credit Cards</p>
                        </Col>
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <BsCashCoin className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>Cash Back</p>
                        </Col>
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <BsFillFuelPumpFill className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>Fuel</p>
                        </Col>
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <AiOutlineGift className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>Rewards</p>
                        </Col>
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <TbPlane className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>Travel</p>
                        </Col>
                        <Col className="icon-div justify-items-cente">
                            <div className="icon">
                                <FaRupeeSign className="icon-icon text-[#1b70de]" />
                            </div>
                            <p>No Annual Fee</p>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Categories