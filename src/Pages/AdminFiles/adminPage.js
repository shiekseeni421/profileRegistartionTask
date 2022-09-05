import React, { useState, useEffect, useRef } from "react";
import Table from "react-bootstrap/Table";
import "./index.scss";

function AdminPage() {
  let stringifiedTodoList = localStorage.getItem("UserDetails");
  let parsedTodoList = JSON.parse(stringifiedTodoList);

  let GetData = (e) => {
    let id = e.target.id;
    console.log(id);
  };

  return (
    <div className="admin-Container">
      <h1 className="adminHeading">Admin portal</h1>
      {parsedTodoList === null ? (
        <p className="NO-Data">No Data is Present</p>
      ) : (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Total Experience ?</th>
              <th>Total Experience in React ?</th>
              <th>Total Experience in doodleblue ?</th>
              <th>Stacks</th>
            </tr>
          </thead>
          <tbody>
            {parsedTodoList.map((item, i) => (
              <tr
                key={i}
                id={i}
                onClick={(e) => {
                  GetData(e);
                }}
              >
                <td>{item["name"]}</td>
                <td>{item["email"]}</td>
                <td>{item["Number"]}</td>
                <td>{item["experience"]} years</td>
                <td>{item["ReactEX"]} years</td>
                <td>{item["doodleblueEx"]} years</td>
                <td>{item["Stacks"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default AdminPage;
