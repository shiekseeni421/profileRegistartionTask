import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";

import "./index.scss";

function LoginPage() {
  let { setFormValues, formValues } = UseUserValues();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  let navigate = useNavigate();

  const onSubmit = async (data) => {
    let stringifiedTodoList = localStorage.getItem("UserDetails");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    let email = data["userEmail"];
    let index = email.indexOf("@");
    let slicePart = email.slice(0, index);

    if (slicePart === "admin123") {
      if (data["UserPassword"] === "admin123") {
        let path = "/adminPortal";
        navigate(path);
      } else {
        alert("Wrong Password");
      }
    } else {
      if (parsedTodoList === null) {
        alert("Please sign In");
      } else {
        let filterData = parsedTodoList.filter((item, i) => {
          if (parsedTodoList[i]["email"] === data["userEmail"]) {
            return parsedTodoList[i];
          }
        });
        if (filterData.length === 1) {
          for (let i in filterData[0]) {
            formValues[i] = filterData[0][i];
            setFormValues(formValues);
          }
          if (filterData[0]["password"] === data["UserPassword"]) {
            let path = "/profile";
            navigate(path);
          } else {
            alert("enter Correct Password");
          }
        } else {
          alert("User is Not Present please SignIN");
        }
      }
    }
  };
  return (
    <div className="loginContainer">
      <form className="fromContainer" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="loginHeading">Login</h1>
        <div className="input-container">
          <label>Email</label>
          <br />
          <input
            type="text"
            name="userEmail"
            placeholder="Type Your Email"
            {...register("userEmail", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          <p className="error-text">
            {" "}
            {errors.userEmail?.type === "required" && "userEmail is required"}
          </p>
        </div>
        <div className="input-container">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="UserPassword"
            placeholder="Type Your Password"
            {...register("UserPassword", {
              required: "You must specify a password",
              minLength: {
                value: 4,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <p className="error-text">
            {errors.UserPassword?.type === "required" &&
              "UserPassword is required"}
          </p>
        </div>
        <button className="btn">Log IN</button>

        <Link to="/signin" as={NavLink} className="sign-In">
          create an account
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
