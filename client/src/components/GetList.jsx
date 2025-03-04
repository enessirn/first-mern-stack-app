import React, { useState, useEffect } from "react";
import axios from "axios";
import { Space, Table } from "antd";
import { Link } from "react-router-dom";
function GetList() {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    try {
      const data = await axios.get(import.meta.env.VITE_API_URL);
      setPersons(data.data);
    } catch (error) {
      console.log("Get api error:", error);
    }
  };
  useEffect(() => {
    const getList = async () => {
      getPersons()
    }
    getList();
  }, []);

  const deletePerson = async (id) => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/delete-person/` + id
    );

    if (response.status === 200) {
      alert("Deleted");
      getPersons();
    }
  };
  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <Space size="small">
          <Link to={`/update-person/${record._id}`}>
            <button className="bg-blue-800 p-2 cursor-pointer rounded-md text-white hover:bg-blue-900 transition-colors">
              Update
            </button>
          </Link>
          <button
            onClick={() => deletePerson(record._id)}
            className="bg-red-800 p-2 cursor-pointer rounded-md text-white hover:bg-red-900 transition-colors"
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Link to="/create-person">
        <button className="bg-blue-700 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-800 transition-colors">
          + Add Person
        </button>
      </Link>
      <Table
        className="mt-8"
        dataSource={persons && persons}
        columns={columns}
      />
    </div>
  );
}

export default GetList;
