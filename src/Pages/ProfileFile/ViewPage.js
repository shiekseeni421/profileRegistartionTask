import React from "react";
import { useNavigate } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";

function ViewPage() {
  const { formValues } = UseUserValues();
  let navigate = useNavigate();
  let NewObject = {
    name: formValues["name"],
    email: formValues["email"],
    TotalExperience: formValues["experience"],
    experienceInDoodleblue: formValues["doodleblueEx"],
    skils: formValues["Stacks"],
  };
  const myJSON = JSON.stringify(NewObject);

  const blob1 = new Blob([myJSON], { type: "text/plain" });
  let goToEditPage = () => {
    let path = "/RegisterPage";
    navigate(path);
  };

  let goLoginPage = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <a className="navbar-brand">User Profile</a>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={goLoginPage}
        >
          Log Out
        </button>
      </nav>
      <div className="Profile-contact">
        <p className="QuestionHeading">
          Total Experience:-{" "}
          <span className="Answer">{formValues["experience"]} years</span>{" "}
        </p>

        <p className="QuestionHeading">
          Total Experience in React:-{" "}
          <span className="Answer">{formValues["ReactEX"]} years</span>
        </p>

        <p className="QuestionHeading">
          Total Experience in doodleblue:-{" "}
          <span className="Answer">{formValues["doodleblueEx"]} years</span>
        </p>

        <p className="QuestionHeading">
          Stacks:- <span className="Answer">{formValues["Stacks"]}</span>
        </p>
        <button
          type="button"
          class="btn btn-outline-primary mx-3"
          onClick={goToEditPage}
        >
          Edit Profile
        </button>
        <a href={URL.createObjectURL(blob1)} download="user1.text">
          download
        </a>
      </div>
    </div>
  );
}

export default ViewPage;
