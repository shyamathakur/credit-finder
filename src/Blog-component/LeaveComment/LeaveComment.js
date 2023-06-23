import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./LeaveComment.css";
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';

function LeaveComment() {
    const { TextArea } = Input;
    const onFinish = (values) => {
        alert("your Login Success ")
        window.location.reload(false);
        console.log('Received values of form: ', values);
    };
    const onChange = e => {
        console.log(e);
    };
    return (
        <div className="LeaveComment-div-div">
            <Container className="LeaveComment-container-div">
                <Row className="LeaveComment-second-row-div">
                        <p className="leave-head"><b>Leave a Comment</b></p>
                        <p className="">Your email address will not be published. Required fields are marked *</p>
                        <Form name="normal_login"
                            className="LeaveComment-form "
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}>
                            <p className="">Telephone *</p>
                            <div>
                                <TextArea placeholder="textarea with clear icon" onChange={onChange} />
                            </div>
                            <div className="LeaveComment-form-div-first">
                                <div className="LeaveComment-form-div-child">
                                    <p className=" ">FirstName</p>
                                    <Form.Item className="LeaveComment-form-first-div-first-child"
                                        name="firstname"
                                        rules={[
                                            { required: true, message: 'Please input your firstname!', },
                                        ]}>
                                        <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                            placeholder="firstname" />
                                    </Form.Item>
                                </div>
                                <div className="LeaveComment-form-div-child">
                                    <p className="">Email Address *</p>
                                    <Form.Item className="LeaveComment-form-first-div-first-child"
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please input your email!', },
                                        ]}>
                                        <Input prefix={<AiOutlineMail className="site-form-item-icon" />}
                                            type="email"
                                            placeholder="email" />
                                    </Form.Item>
                                </div>
                                <div className="LeaveComment-form-div-child">
                                    <p className="">Job Title *</p>
                                    <Form.Item className="LeaveComment-form-first-div-first-child"
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
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="LeaveComment-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                </Row>
            </Container>
        </div>
    )
}

export default LeaveComment;