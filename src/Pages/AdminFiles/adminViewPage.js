import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function AdminViewPage() {
  const params = useParams();
  const userId = params.userId;
  let navigate = useNavigate();

  let stringifiedTodoList = localStorage.getItem("UserDetails");
  let parsedTodoList = JSON.parse(stringifiedTodoList);

  console.log(parsedTodoList);

  let filterData = parsedTodoList.filter((item, i) => {
    if (parsedTodoList[i]["id"] == userId) {
      return parsedTodoList[i];
    }
  });
  console.log(filterData);

  let DataApproved = () => {
    let arrayElement = [];
    for (let i of parsedTodoList) {
      if (i["id"] == userId) {
        i["status"] = "Approved";
        arrayElement.push(i);
      } else {
        arrayElement.push(i);
      }
    }
    localStorage.clear();
    localStorage.setItem("UserDetails", JSON.stringify(arrayElement));
    navigate("/adminPortal");
  };

  let DataCancel = () => {
    let arrayElement = [];
    for (let i of parsedTodoList) {
      if (i["id"] == userId) {
        i["status"] = "Cancel";
        arrayElement.push(i);
      } else {
        arrayElement.push(i);
      }
    }
    localStorage.clear();
    localStorage.setItem("UserDetails", JSON.stringify(arrayElement));
    navigate("/adminPortal");
  };

  let goLoginPage = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-black d-flex justify-content-between px-5">
        <h1 className="navbar-brand text-light ">Admin Dash Board</h1>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={goLoginPage}
        >
          Log Out
        </button>
      </nav>
      <div className="text-center text-bg-light Profile-contact">
        <div id="ViewContainer" className="container">
          <div className=" mx-3 ">
            <div className="d-flex align-items-center">
              <FaUserCircle className="profile-Icon" />
              <h4 className="m-0 ms-3">{filterData[0]["name"]}</h4>
            </div>
            <div className="mt-5">
              <h4 className="ms-3 text-start fw-bold my-4">Personal Details</h4>
              <div className="row ms-3">
                <strong className="col-md-3 text-start mt-2">
                  Date of birth :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["dob"]}
                </div>
                <strong className="col-md-3 text-start mt-2">Gender :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["gender"]}
                </div>
                <strong className="col-md-3 text-start mt-2">Contact :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["Number"]}
                </div>
                <strong className="col-md-3 text-start mt-2">Email :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["email"]}
                </div>
                <strong className="col-md-3 text-start mt-2">Gender :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["gender"]}
                </div>
                <strong className="col-md-3 text-start mt-2">
                  Marital Status :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["maritalStatus"]}
                </div>

                <strong className="col-md-3 text-start mt-2">State :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["State"]}
                </div>

                <strong className="col-md-3 text-start mt-2">City :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["City"]}
                </div>

                <strong className="col-md-3 text-start mt-2">Pin Code :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["PinCode"]}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="ms-3 text-start fw-bold my-4">
                Education Details
              </h4>
              <div className="row ms-3">
                <strong className="col-md-3 text-start mt-2">
                  10th ( % ) :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["SSC"]} %
                </div>
                <strong className="col-md-3 text-start mt-2">
                  12th ( % ) :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["InterDiploma"]} %
                </div>
                <strong className="col-md-3 text-start mt-2">
                  University :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["Graduation"]} %
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="ms-3 text-start fw-bold my-4">
                Professional Details
              </h4>
              <div className="row ms-3">
                <strong className="col-md-3 text-start mt-2">Role :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["role"]}
                </div>
                <strong className="col-md-3 text-start mt-2">
                  Experience :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {" "}
                  {filterData[0]["Experience"]} Years
                </div>
                <strong className="col-md-3 text-start mt-2">
                  Experience in React :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {" "}
                  {filterData[0]["ReactEXp"]} Years
                </div>
                <strong className="col-md-3 text-start mt-2">DOJ :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["doj"]}
                </div>
                <strong className="col-md-3 text-start mt-2">Skills :</strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["Skills"]}
                </div>
                <strong className="col-md-3 text-start mt-2">
                  Anual Income :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["Income"]} LPA
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="ms-3 text-start fw-bold my-4">KYC Document</h4>
              <div className="row ms-3">
                <strong className="col-md-3 text-start mt-2">
                  Pan/Aathar :
                </strong>
                <div className="col-md-9 text-start mt-2">
                  {filterData[0]["Document"]}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={DataApproved}>
          Approved
        </button>
        <button className="btn btn-outline-danger mx-3" onClick={DataCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AdminViewPage;
