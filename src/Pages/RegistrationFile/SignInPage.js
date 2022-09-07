import React, { useRef } from "react";
import { UseUserValues } from "../../context/UserFormContext";
import { useForm } from "react-hook-form";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});
  const { formValues, setFormValues } = UseUserValues();
  let navigate = useNavigate();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    let stringifiedTodoList = localStorage.getItem("UserDetails");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null) {
      formValues["email"] = data["email"];
      formValues["password"] = data["password"];
      formValues["password_repeat"] = data["password_repeat"];
      formValues["status"] = "Pending";
      formValues["id"] = "0";
      setFormValues(formValues);
      let path = "/RegisterPage";
      navigate(path);
    } else {
      let filterData = parsedTodoList.filter((item, i) => {
        if (parsedTodoList[i]["email"] === data["email"]) {
          return parsedTodoList[i];
        }
      });
      if (filterData.length === 1) {
        alert("User is Present please LogIn");
        let path = "/";
        navigate(path);
      } else {
        let length = parsedTodoList.length;
        formValues["id"] = length;
        formValues["email"] = data["email"];
        formValues["password"] = data["password"];
        formValues["status"] = "Pending";
        setFormValues(formValues);
        let path = "/RegisterPage";
        navigate(path);
      }
    }
  };

  let goLoginPage = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light d-flex justify-content-between px-5">
        <a className="navbar-brand">Dash Board</a>
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={goLoginPage}
        >
          Log Out
        </button>
      </nav>

      <div className="signin-container">
        <form className="fromContainer" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="loginHeading">Signin</h1>
          <div className="input-container">
            <label className="Label-styles">Email</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Type Your Email"
              className="input-field"
              {...register("email", {
                required: "Enter your e-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div className="input-container">
            <label className="Label-styles">Password</label>
            <br />
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              className="input-field"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div className="input-container">
            <label className="Label-styles">Confirm Password</label>
            <br />
            <input
              placeholder="Enter your Confirm password"
              name="password_repeat"
              type="password"
              className="input-field"
              {...register("password_repeat", {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.password_repeat && (
              <p className="error-message">{errors.password_repeat.message}</p>
            )}
          </div>
          <button className="signin-btn">Sign In</button>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
