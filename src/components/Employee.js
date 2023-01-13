import { Button, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
const Employee = () => {
  const [Data, setData] = useState([]);
  const GetEmployeeData = () => {
    const url = "http://localhost:5000";
    axios
      .get(url)
      .then(response => {
        const result = response.data;
        const {status, message, data} = result;
        if(status !== "SUCCESS"){
          alert(message, status);
        }else{
          setData(data);
          console.log(result);
        }
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    GetEmployeeData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="mt-5 mb-4">
          <Button className="mt-5 mb-4">
            <AiOutlinePlusCircle size={20} />
            Add New Employee
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mic</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
