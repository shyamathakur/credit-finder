import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import creditcard from "../../assets/creditcard.png";
import "./Finding.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Understand() {
    return (
        <div>
            <Container className="Understand-container bg-white">
                <Row className="Understand-co2">
                    <img src={creditcard} alt="Understand" className="Understand-card-image" />
                </Row>
                <Row className="Understand-row">
                    <Col className="Understand-col1">
                        <p className="Understand-about font-bold">How to Choose the Right Credit Card for You: Tips for Finding the Best
                            Card for Your Needs</p>
                        <p>Leave a Comment / Credit Card / By admin</p>
                        <p className="Understand">Choosing the right credit card can be a daunting task, given the numerous options available in the market.
                            Here are some tips that can help you find the best card for your needs:</p>
                        <p>  1. Understand your spending habits: Before selecting a credit card, you should understand your spending habits. If you frequently travel or dine out,
                            you might want to consider a card that offers travel
                            or dining rewards. On the other hand, if you shop frequently online, a card that offers cashback on online purchases may be more suitable.</p>
                        <p> 2. Check the fees: Credit cards often come with fees such as annual fees, balance transfer fees, late payment fees, and foreign transaction fees.
                            Before selecting a card, make sure you understand the fees
                            and how they can impact your overall cost.</p>
                        <p>     3. Look at the rewards: Many credit cards offer rewards such as cashback, points, or miles for purchases made with the card. Compare the rewards
                            offered by different cards to find the one that offers the
                            best rewards for your spending habits.</p>
                        <p> 4. Consider the interest rate: If you plan to carry a balance on your credit card, the interest rate is an important factor to consider. Look for
                            a card with a low-interest rate or a 0% introductory rate.</p>
                        <p>  5. Check for additional benefits: Some credit cards come with additional benefits such as travel insurance, purchase protection, extended warranties,
                            or airport lounge access. Consider these benefits when selecting a card.</p>
                        <p>    6. Read the terms and conditions: Before applying for a credit card, make sure you read the terms and conditions carefully. Look for any hidden fees,
                            restrictions, or limitations that may affect your ability to use the card.</p>
                        <p>  7. Check your credit score: Your credit score can impact your ability to get approved for a credit card and the interest rate you receive. Check your
                            credit score before applying for a card and make sure it meets the card’s requirements.</p>
                        <p>By following these tips, you can find a credit card that meets your needs and helps you maximize your rewards while minimizing your costs.</p>

                        <button className="Understand-read-more bg-[#1b70de]">Read More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Understand;