import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import smile from "../../assets/smile.png";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { RiArrowDropDownLine } from "react-icons/ri";
import "./First.css";
import Nav from "../NavHome/NavHome"

function First() {
    return (
        <div className="navbar-head ">
                <Nav/>
            <Container >
                <Row className="row-first items-center xs={12} md={12} lg={12} sm={12} xl={12}">
                    <Col className="make lg={6} xs={6} sm={6}">
                        <div className='make-div-div'>
                            <p className="informed"> Make an informed Choice with</p>
                            <p className="credit"><b>Credit Finder</b></p>
                                <p className="helps">We are here to help you find the right credit card that 
                                    best matches your needs and helps you save on every purchase.</p>
                        </div>
                    </Col>
                    <Col className=" lg={6} xs={6} sm={6}">
                        <img className='img-div' src={smile} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default First