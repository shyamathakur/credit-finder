import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import Cards from "../assets/Cards.webp";
import lit from "../assets/lit.png";
import finance from "../assets/finance.png";
import aura from "../assets/aura.png";
import axis from "../assets/axis.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCashCoin, BsFillFuelPumpFill, BsPersonWorkspace, BsTelephoneX } from "react-icons/bs";
import { AiOutlineGift, AiOutlineCreditCard, AiOutlineMail } from "react-icons/ai";
import { TbPlane } from "react-icons/tb";
import { FaRupeeSign, FaRegComments } from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiOutlineCubeTransparent } from "react-icons/hi";
import { GiAlarmClock } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import "../Css/Navbar.css";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function Navbar() {
    const onFinish = (values) => {
        alert("your Login Success ")
        window.location.reload(false);
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Container className="navbar ">
                <Row className="flex justify-between items-center px-60 py-5">
                    <div className=" w-[50%]">
                        <img src={logo} alt='' className=" logo w-[200px]" />
                    </div>
                    <div className="logo flex items-center text-gray-300 gap-4 w-[50%]">
                        <p>Home</p>
                        <p>About</p>
                        <div className="dropdown">
                            <p className="dropbtn items-center">
                                Card Provides<RiArrowDropDownLine className="text-[32px]" /></p>
                            <div className="dropdown-content">
                                <p href="#">Axis Bank</p>
                                <p href="#">Au Bank</p>
                                <p href="#">IndusInd Bank</p>
                            </div>
                        </div>
                        <p>Blog</p>
                    </div>
                </Row>
                <hr className="hr h-[1px]" />
                <Row className="flex items-center px-60 gap-6">
                    <div className="make w-[50%] text-white px-20">
                        <div>
                            <p className="text-[40px]"> Make an informed Choice with</p>
                            <p className="text-[80px] font-bold">Credit Finder  </p>
                            <p>
                                <span className="text-[20px]">We are here to help you find the right credit card that <br />
                                    best matches your needs and helps you save on every</span><br />
                                <span className="text-[20px]">purchase.</span>
                            </p>
                        </div>
                    </div>
                    <div className="w-[50%] ">
                        <img src={image} alt="" className="image-girl text-38xl" />
                    </div>
                </Row>
            </Container>
            <div className="bg-white grid justify-items-center px-60 py-10 my-20">
                <div className="categories justify-items-center">
                    <p className="text-[50px] font-bold">Categories </p>
                    <p className="text-gray-700 text-[18px]">
                        Shopping, food, travel or fuel…we have a card for every need of yours<br />
                        Choose the one that serves you the best
                    </p>
                </div>
                <div className="credit-div flex grid-flow-row gap-3">
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <AiOutlineCreditCard className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>Best Credit Cards</p>
                    </div>
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <BsCashCoin className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>Cash Back</p>
                    </div>
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <BsFillFuelPumpFill className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>Fuel</p>
                    </div>
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <AiOutlineGift className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>Rewards</p>
                    </div>
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <TbPlane className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>Travel</p>
                    </div>
                    <div className="icon-div w-100px justify-items-cente">
                        <div className="icon">
                            <FaRupeeSign className="text-[#1b70de] text-[40px]" />
                        </div>
                        <p>No Annual Fee</p>
                    </div>
                </div>
            </div>
            <div className="bg-white grid justify-items-center px-60  my-20">
                <div className=" flex">
                    <div className="w-[50%] kick-jouney">
                        <p className="text-[50px] font-bold">Kick Off Your Credit Journey Easy Way</p>
                        <p className="text-gray-700 text-[18px] my-8">
                            We have partnered with various providers to bring you numerous options. Get<br />
                            exciting rewards and benefits on every transaction you make.
                        </p>
                        <p className="Feature flex text-white justify-items-center  bg-[#1b70de]">More Feature <HiOutlineArrowNarrowRight /></p>
                    </div>
                    <div className="convenient-div-main w-[50%] gap-6">
                        <div className="convenient-div flex">
                            <div className="convenient1 w-100px justify-items-cente">
                                <p className="flex justify-items-center text-[25px] gap-4"><FiThumbsUp className="text-[#1b70de] text-[40px] font-bold" /> <b>Convenient</b></p>
                                <p className="w-[190px] mx-10 text-gray-700">We are here to save you from putting extra time and efforts to get a credit card.</p>
                            </div>
                            <div className="convenient w-100px justify-items-cente">
                                <p className="flex justify-items-center text-[25px] gap-4"><HiOutlineCubeTransparent className="text-[#1b70de] text-[40px] font-bold" /><b>Transparent</b></p>
                                <p className="w-[190px] mx-10 text-gray-700">We believe in transparency of the process so that we can earn your trust.</p>
                            </div>
                        </div>
                        <div className="convenient-div2 flex">
                            <div className="convenient w-100px justify-items-cente">
                                <p className="flex justify-items-center text-[25px] gap-4"><GiAlarmClock className="text-[#1b70de] text-[40px] font-bold" /> <b>Quick</b></p>
                                <p className="w-[190px] mx-10 text-gray-700">We don’t want you to keep waiting for fulfilling your needs.</p>
                            </div>
                            <div className="convenient w-100px justify-items-cente">
                                <p className="flex justify-items-center text-[25px] gap-4"><BiSupport className="text-[#1b70de] text-[40px]" /> <b>Support</b></p>
                                <p className="w-[190px] mx-10 text-gray-700">Our experts are always available to solve any user query</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid justify-items-center px-60 my-10">
                <div className="Credit-div justify-items-center">
                    <p className="text-[50px] font-bold">Featured Credit Cards</p>
                    <p className="text-gray-700 text-[18px] my-3">We have some cards handpicked to deliver you with the best services and benefits.</p>
                </div>
                <div className="Credit-div-last flex px-40 py-10 my-20">
                    <div className="first-div  w-[33.3%] py-10">
                        <img className="logo"
                            src={axis}
                            alt="" />
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[18px] div-pera "><b>Axis Bank Flipkart Visa Credit Card</b></p>
                            <p className="py-5 justify-items-center">
                                Welcome Benifits Worth Rs 1000 Including Rs 500
                                Worth Flipkart Gift Voucher.
                                Unlimited 5% Cashback On Flipkart & Myntra. 4% Cashback On Cleartrip Curefit,
                                Pvr, Swiggy, Tata 1mg, Tatasky Uber..
                            </p>
                            <p className="Learn flex text-white justify-items-center  bg-[#1b70de]">Learn More</p>
                        </div>
                    </div>
                    <div className="first-div w-[33.3%]">
                        <img className="logo"
                            src={lit}
                            alt="" />
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[18px] div-pera "><b>AU Bank LIT Credit Card</b></p>
                            <p className="py-5">
                                Eligibility to get 3 Months of Free Membership of: ZEE5,
                                Amazon Prime, Cult.fit. Get extra 5% cash back for using LIT Credit Card for travel,
                                dining & groceries, along with one reward point for INR 100 spent...
                            </p>
                            <p className="Learn flex text-white justify-items-center  bg-[#1b70de]">Learn More</p>
                        </div>
                    </div>
                    <div className="first-div  w-[33.3%] py-10">
                        <img className="logo"
                            src={aura}
                            alt="" />
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[18px] div-pera "><b>IndusInd Platinum Aura credit card</b></p>
                            <p className="py-5">
                                Earn 4X rewards points. ₹2400 savings on fuel surcharge. Get 1.5 Reward Point
                                for every ₹150 spent. Buy 1 Get 1 free on movie ticket. Comprehensive Insurance Benefits...
                            </p>
                            <p className=" Learn text-white justify-items-center  bg-[#1b70de]">Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid justify-items-center px-60  my-10">
                <div className="Credit-div justify-items-center">
                    <p className="text-[50px] font-bold">Get your card today</p>
                    <p className="text-gray-700 text-[18px] my-3">Trust us it’s quick and easy. Just <span style={{ color: "#1b70de" }}>follow</span> the below steps to get yours.</p>
                </div>
                <div className="Credit-div-last flex px-40 py-10 my-20">
                    <div className="credit-child-div w-[25%]">
                        <div className="fithump">
                            <HiOutlineCubeTransparent className="text-[#1b70de] text-[40px] font-bold" />
                        </div>
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[20px] div-pera "><b>Contact with Us</b></p>
                            <p className="py-5 justify-items-center">
                                Communicate with us with your needs to initiate the process for getting a card.
                            </p>
                        </div>
                    </div>
                    <div className="credit-child-div w-[25%]">
                        <div className="fithump">
                            <GiAlarmClock className="text-[#1b70de] text-[40px] font-bold" />
                        </div>
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[20px] div-pera "><b>Get a call back</b></p>
                            <p className="py-5">
                                Our executives will call you to help you start your application process once you have informed us about your needs.
                            </p>
                        </div>
                    </div>
                    <div className="credit-child-div w-[25%]">
                        <div className="fithump">
                            <AiOutlineCreditCard className="text-[#1b70de] text-[40px] font-bold" />
                        </div>
                        <div className=" justify-items-center text-center px-10 py-5 ">
                            <p className="text-[20px] div-pera "><b>Wait for approval</b></p>
                            <p className="py-5">
                                After completing the application your eligibility will be checked. This process takes a maximum of 7 days.
                            </p>
                        </div>
                    </div>
                    <div className="credit-child-div w-[25%]">
                        <div className="fithump">
                            <FiThumbsUp className="text-[#1b70de] text-[40px] font-bold" />
                        </div>
                        <div className="justify-items-center text-center px-10 py-5">
                            <p className="text-[20px] div-pera"><b>Congrats</b></p>
                            <p className="py-5">
                                Once approved just wait for your card to get delivered, enjoy unlimited benefits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white grid justify-items-center px-60  my-10">
                <div className="flex items-center gap-6">
                    <div className=" w-[50%] px-20">
                        <div>
                            <p className="text-[80px] font-bold">About Us</p>
                            <p className="text-[18px]">We are Credit Finder. We are here to empower people when it comes
                                to tackling finances and credits. We aim to equip people with the best information and help
                                them make informed decisions about various credit solutions available in the market.<br />
                            </p>
                        </div>
                        <p className="Feature flex text-white justify-items-center my-10 bg-[#1b70de]">Read More</p>
                    </div>
                    <div className="w-[50%] ">
                        <img src={Cards} alt="" className="image-girl text-38xl" />
                    </div>
                </div>
            </div>
            <div className="navbar-last-img">
                <div className="flex items-center px-60 gap-6">
                    <div className="w-[50%] ">
                        <img src={finance} alt="" className="finance text-38xl" />
                    </div>
                    <div className="make w-[50%] text-white px-20">
                        <p className="text-[30px]">Your Details</p>
                        <p>Help us to reach out to you.</p>
                        <hr className="my-6" />
                        <Form name="normal_login"
                            className="login-form text-white my-10"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}>
                            <div className="flex gap-[9rem]">
                                <div className="w-[50%]">
                                    <p className="text-white text-[18px]">FirstName</p>
                                    <Form.Item
                                        name="firstname"
                                        rules={[
                                            { required: true, message: 'Please input your firstname!', },
                                        ]}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="firstname" />
                                    </Form.Item>
                                </div>
                                <div className="w-[50%]">
                                    <p className="text-white text-[18px]">LastName</p>
                                    <Form.Item
                                        name="lastname"
                                        rules={[
                                            { required: true, message: 'Please input your lastname!', },
                                        ]}>
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="lastname"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="flex gap-[2rem] justify-between">
                                <div>
                                    <p className="text-white text-[18px]">Email Address *</p>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please input your email!', },
                                        ]}>
                                        <Input prefix={<AiOutlineMail className="site-form-item-icon" />}
                                            type="email"
                                            placeholder="email" />
                                    </Form.Item>
                                </div>
                                <div>
                                    <p className="text-white text-[18px]">Job Title *</p>
                                    <Form.Item
                                        name="company name"
                                        rules={[
                                            { required: true, message: 'Please input your company name!', },
                                        ]}>
                                        <Input
                                            prefix={<BsPersonWorkspace className="site-form-item-icon" />}
                                            placeholder="company name"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <p className="text-white text-[18px]">Telephone *</p>
                            <Form.Item
                                name="telephone"
                                rules={[
                                    { required: true, message: 'Please input your telephone!', },
                                ]}>
                                <Input prefix={<BsTelephoneX className="site-form-item-icon" />} placeholder="telephone" />
                            </Form.Item>
                            <p className="text-white text-[18px]">Comments / Questions *</p>
                            <Form.Item
                                name="Comments"
                                rules={[
                                    { required: true, message: 'Please input your Comments!', },
                                ]}>
                                <Input
                                    prefix={<FaRegComments className="site-form-item-icon" />}
                                    type="Comments"
                                    placeholder="Comments" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button my-5">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="  py-20 bg-black">
                <div className="flex px-60  justify-between items-center">
                    <div className=" w-[50%]">
                        <img src={logo} alt='' className="logo w-[200px]" />
                    </div>
                    <div className="logo flex items-center text-white gap-4 w-[50%]">
                        <p>Home</p>
                        <p>About</p>
                        <div className="dropdown">
                            <p className="dropbtn items-center">Card Provides</p>
                        </div>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="justify-items-center">
                    <hr className="hr h-[1px]" />
                    <p className="text-white justify-items-center" style={{textAlign: 'center',marginTop:'20px'}}>Copyright © 2023 Credit Finder</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
