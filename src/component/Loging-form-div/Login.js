import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ss from "../../assets/finance.png";
import { BsPersonWorkspace, BsTelephoneX } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import "./Login.css";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const onFinish = (values) => {
        alert("your Login Success ")
        window.location.reload(false);
        console.log('Received values of form: ', values);
    };
    return (
        <div className="login-div-div">
            <Container className="login-container-div">
                <Row className="login-first-row-div">
                        <img src={ss} alt="" className="login-img-ss" />
                </Row>
                <Row className="login-second-row-div">
                    <Col>
                        <p className="text-white">Your Details</p>
                        <p className="text-white">Help us to reach out to you.</p>
                        <hr className="" />
                        <Form name="normal_login"
                            className="login-form text-white"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}>
                            <div className="login-form-div-first">
                                <div className="login-form-div-child">
                                    <p className="text-white ">FirstName</p>
                                    <Form.Item className="login-form-first-div-first-child"
                                        name="firstname"
                                        rules={[
                                            { required: true, message: 'Please input your firstname!', },
                                        ]}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                            placeholder="firstname" />
                                    </Form.Item>
                                </div>
                                <div className="login-form-div-child">
                                    <p className="text-white">LastName</p>
                                    <Form.Item className="login-form-first-div-first-child"
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
                            <div className="login-form-second">
                                <div>
                                    <p className="text-white">Email Address *</p>
                                    <Form.Item className="login-form-first-div-first-child"
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
                                    <p className="text-white">Job Title *</p>
                                    <Form.Item className="login-form-first-div-first-child"
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
                            <p className="text-white">Telephone *</p>
                            <Form.Item
                                name="telephone"
                                rules={[
                                    { required: true, message: 'Please input your telephone!', },
                                ]}>
                                <Input prefix={<BsTelephoneX className="site-form-item-icon" />}
                                    placeholder="telephone" />
                            </Form.Item>
                            <p className="text-white">Comments / Questions *</p>
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
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login