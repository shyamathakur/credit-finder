import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yellow from "../../assets/yellow.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Solution.css";

function Solution() {
    return (
        <div className="solution-navbar-head ">
            <Container >
                <Row className="solution-row-first items-center xs={12} md={12} lg={12} sm={12} xl={12}">
                    <Col className="solution-make lg={6} xs={6} sm={6}">
                        <div className='solution-make-div-div'>
                            <p className="solution-informed"><b>
                                To equip people with the best information and help them get
                                the best Credit Solutions for their needs</b></p>
                            <p className="solution-helps">We are Credit Finder. We are here to empower people when it
                                comes to tackling finances and credits. We aim to equip people with best information
                                and help them make informed decisions about various solutions available in the market.
                                We are here to help people begin their credit journey easy way and help them manage their
                                finances. We have also partnered with various Credit Card providers for our people to get
                                easy access to credit card best suited for their specific needs. We make sure that our people
                                get benefits on every purchase they make. For this we have an extensive team of experts who
                                are equipped with knowledge and experience in the subject and are always available to provide support.</p>
                        </div>
                    </Col>
                    <Col className=" lg={6} xs={6} sm={6}">
                        <img className='Solution-img-div' src={yellow} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Solution;