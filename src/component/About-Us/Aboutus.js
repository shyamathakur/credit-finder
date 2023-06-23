import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "../../assets/Cards.webp";
import "./Aboutus.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Aboutus() {
    return (
        <div>
            <Container className="aboutus-container bg-white">
                <Row className="aboutus-row">
                    <Col className="aboutus-col1">
                        <p className="aboutus-about font-bold">About Us</p>
                        <p className="aboutus">We are Credit Finder. We are here to empower people when it comes
                            to tackling finances and credits. We aim to equip people with the best information and help
                            them make informed decisions about various credit solutions available in the market.<br />
                        </p>
                        <button className="aboutus-read-more bg-[#1b70de]">Read More</button>
                    </Col>
                    <Col className="aboutus-co2">
                        <img src={Cards} alt="aboutus" className="aboutus-card-image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutus;