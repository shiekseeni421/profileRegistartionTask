import React from "react";
import { UseUserValues } from "../../context/UserFormContext";
import { useForm } from "react-hook-form";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const { formValues, setFormValues } = UseUserValues();
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    let stringifiedTodoList = localStorage.getItem("UserDetails");
    let parsedTodoList = JSON.parse(stringifiedTodoList);

    if (parsedTodoList === null) {
      formValues["email"] = data["email"];
      formValues["approvedStatus"] = "Pending";
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
        formValues["email"] = data["email"];
        setFormValues(formValues);
        let path = "/RegisterPage";
        navigate(path);
      }
    }
  };

  return (
    <div className="signin-container">
      <form className="fromContainer" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Type Your Email"
            className="input-field"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
          />
          <p> {errors.email?.type === "required" && "email is required"}</p>
        </div>
        <button className="signin-btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
