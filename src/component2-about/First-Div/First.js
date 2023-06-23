import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { RiArrowDropDownLine } from "react-icons/ri";
import "./First.css";
import NavAbout from "../Nav/NavAbout"

function First() {
    return (
        <div className="navbar-head-about">
            <NavAbout />
            <Container >
                <Row className="row-first items-center xs={12} md={12} lg={12} sm={12} xl={12}">
                    <Col className="make lg={12} xs={12} sm={12}">
                        <div className='make-div-div-about'>
                            <p className="informed"> About</p>
                            <p className="credit"><b>Credit Finder</b></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default First