import { Button, Table } from "react-bootstrap";
import React from "react";
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Employee = () => {
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
