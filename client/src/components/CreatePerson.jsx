import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";
function CreatePerson() {
  const navigate = useNavigate();
  const savePerson = async (values) => {
    return await axios.post(
      `${import.meta.env.VITE_API_URL}/create-person`,
      values
    );
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    savePerson(values);
    alert("Saved");
    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="m-auto flex flex-col items-center h-screen">
      <Link to="/">
        <button className="absolute left-5 bg-blue-700 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-800 transition-colors ">
          Home
        </button>
      </Link>
      <div className="border rounded-2xl px-30 py-20">
        <h1 className="text-center mb-16 text-3xl font-bold">
          Create a person
        </h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input style={{ width: "200px" }} placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                type: "number",
                required: true,
                message: "Please input your age!",
              },
            ]}
          >
            <InputNumber
              style={{ width: "200px" }}
              min={18}
              placeholder="Age"
              max={99}
            />
          </Form.Item>

          <Form.Item
            label="Tel"
            name="phone"
            rules={[
              {
                type: "number",
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <InputNumber
              style={{ width: "200px" }}
              placeholder="e.x. 5211456598"
              maxLength={10}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input style={{ width: "200px" }} placeholder="Email" />
          </Form.Item>
          <Form.Item label={null}>
            <Button style={{ width: "200px" }} type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CreatePerson;
