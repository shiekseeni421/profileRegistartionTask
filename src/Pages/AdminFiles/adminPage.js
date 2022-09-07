import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";

import "./index.scss";

function AdminPage() {
  let stringifiedTodoList = localStorage.getItem("UserDetails");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  let navigate = useNavigate();

  let GetData = (e) => {
    let id = e.target.id;
    let path = `/adminViewProfile/${id}`;
    navigate(path);
  };

  let LogoutFunction = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="admin-Container">
      <h1 className="adminHeading">Admin portal</h1>
      {parsedTodoList === null ? (
        <p className="NO-Data">No Data is Present</p>
      ) : (
        <div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>SNO</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Total Experience ?</th>
                <th>Skills</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {parsedTodoList.map((item, i) => (
                <tr
                  key={item["id"]}
                  id={item["id"]}
                  onClick={(e) => {
                    GetData(e);
                  }}
                >
                  <td id={item["id"]}>{item["id"]}</td>
                  <td id={item["id"]}>{item["name"]}</td>
                  <td id={item["id"]}>{item["email"]}</td>
                  <td id={item["id"]}>{item["role"]}</td>
                  <td id={item["id"]}>{item["Experience"]} years</td>
                  <td id={item["id"]}>{item["Skills"]}</td>
                  <td id={item["id"]}>{item["status"]}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <button
            className="btn btn-danger d-block m-auto"
            onClick={LogoutFunction}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
