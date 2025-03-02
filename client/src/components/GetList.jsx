import React, { useState } from 'react';
import { Space, Table } from "antd";
import { Link } from "react-router-dom";
function GetList() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataSource = [
        {
          key: '1',
          fullname: 'Mike',
          age: 32,
          phone: "05468446844",
          email: 'enessirinbusiness@gmail.com',
        },
        {
          key: '2',
          fullname: 'John',
          age: 42,
          phone: "05468446844",
          email: 'enessirinbusiness@gmail.com',
        },
      ];
      
      const columns = [
        {
          title: 'Full Name',
          dataIndex: 'fullname',
          key: 'fullname',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },

          
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => (
                <Space size="small">
                  <Link to={`/update-person/${record._id}`}>
                  <button className='bg-blue-800 p-2 cursor-pointer rounded-md text-white hover:bg-blue-900 transition-colors'>Update</button>
                  </Link>
                  <button className='bg-red-800 p-2 cursor-pointer rounded-md text-white hover:bg-red-900 transition-colors'>Delete</button>
                </Space>
              ),
            },
          ];
      
      
  return (
    <div>
        <Link to="/create-person">
        <button className='bg-blue-700 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-blue-800 transition-colors' setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} >+ Add Person</button>
        </Link>
      <Table className='mt-8' dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default GetList
