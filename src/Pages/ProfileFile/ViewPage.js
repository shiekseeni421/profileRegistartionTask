import React from "react";
import { useNavigate } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";
import { FaUserCircle } from "react-icons/fa";

function ViewPage() {
  const { formValues } = UseUserValues();
  let navigate = useNavigate();

  const myJSON = JSON.stringify(formValues);
  const blob1 = new Blob([myJSON], { type: "text/plain" });

  let goToEditPage = () => {
    let path = "/editProfile";
    navigate(path);
  };

  let goLoginPage = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div className="p-2 container">
      <nav class="navbar navbar-expand-lg navbar-light bg-black d-flex  justify-content-between px-5">
        <p className="d-flex text-uppercase text-white mainHeading">
          Dash Board
        </p>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={goLoginPage}
        >
          Log Out
        </button>
      </nav>
      <div className="Profile-contact">
        <div className=" text-center">
          <FaUserCircle className="profile-Icon" />
          <h4>{formValues["name"]}</h4>
        </div>

        <div className="row">
          <h4 className="ms-3 text-start fw-bold my-4 col-6">
            Personal Details
          </h4>
          <div className="ms-3 data-Container col-6 ">
            <strong className="text-start mt-2">Date of birth :</strong>
            <div className="mt-2 answer-Container">{formValues["dob"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Contact :</strong>
            <div className="mt-2 answer-Container">{formValues["Number"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Email :</strong>
            <div className="mt-2 answer-Container">{formValues["email"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Gender :</strong>
            <div className="mt-2 answer-Container">{formValues["gender"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Marital Status :</strong>
            <div className="mt-2 answer-Container">
              {formValues["maritalStatus"]}
            </div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">State :</strong>
            <div className="mt-2 answer-Container">{formValues["State"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">City :</strong>
            <div className="mt-2 answer-Container">{formValues["City"]} </div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Pin Code :</strong>
            <div className="mt-2 answer-Container">{formValues["PinCode"]}</div>
          </div>
        </div>

        <div className="row">
          <h4 className="ms-3 text-start fw-bold my-4 col-6">
            Education Details
          </h4>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">10th ( % ) :</strong>
            <div className="mt-2 answer-Container">{formValues["SSC"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">12th ( % ) :</strong>
            <div className="mt-2 answer-Container">
              {formValues["InterDiploma"]}
            </div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Graduation :</strong>
            <div className="mt-2 answer-Container">
              {formValues["Graduation"]}
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="ms-3 text-start fw-bold my-4">
            {" "}
            Professional Details
          </h4>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Role :</strong>
            <div className="mt-2 answer-Container">{formValues["role"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Experience :</strong>
            <div className="mt-2 answer-Container">
              {formValues["Experience"]} Years
            </div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">DOJ :</strong>
            <div className="mt-2 answer-Container">{formValues["doj"]}</div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Skills :</strong>
            <div className="mt-2 answer-Container">
              {formValues["Skills"]} Years
            </div>
          </div>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2"> Anual Income :</strong>
            <div className="mt-2 answer-Container">
              {formValues["Income"]} LPA
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="ms-3 text-start fw-bold my-4 col-6">Document</h4>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">kyc :</strong>
            <div className="mt-2 answer-Container">
              {" "}
              {formValues["Document"]}
            </div>
          </div>
        </div>

        <div className="row">
          <h4 className="ms-3 text-start fw-bold my-4 col-6">Profile Status</h4>
          <div className="ms-3 data-Container col-6">
            <strong className="text-start mt-2">Status :</strong>
            <div className="mt-2 answer-Container"> {formValues["status"]}</div>
          </div>
        </div>

        <div className="text-center my-3">
          <button
            type="button"
            class="btn btn-outline-primary mx-3"
            onClick={goToEditPage}
          >
            Edit Profile
          </button>
          <buuton className="btn btn-danger">
            <a
              className="text-decoration-none text-white"
              href={URL.createObjectURL(blob1)}
              download="user1.text"
            >
              download
            </a>
          </buuton>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
