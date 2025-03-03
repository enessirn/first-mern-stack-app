import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";

function UpdatePerson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/get-person/" + id);
        form.setFieldsValue(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchPerson();
  }, [id, form]);

  const onFinish = async (values) => {
    try {
      await axios.put("http://localhost:5000/update-person/" + id, values)
      .then(alert("Updated"))
      .then(navigate("/"));
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="m-auto flex flex-col items-center h-screen">
      <Link to="/">
        <button className="absolute left-5 bg-blue-700 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-800 transition-colors">
          Home
        </button>
      </Link>
      <div className="border rounded-2xl px-30 py-20">
        <h1 className="text-center mb-16 text-3xl font-bold">Update the person</h1>
        
        {/* Form bileşenine `form` prop'u verildi */}
        <Form
          form={form}
          name="updatePerson"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[{ required: true, message: "Please input your full name!" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ type: "number", required: true, message: "Please input your age!" }]}
          >
            <InputNumber min={18} max={99} placeholder="Age" />
          </Form.Item>

          <Form.Item
            label="Tel"
            name="phone"
            rules={[{ required: true, message: "Please input your phone number!" }]}
          >
            <Input placeholder="e.x. 5211456598" maxLength={10} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", required: true, message: "Please input your Email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default UpdatePerson;
