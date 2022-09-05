import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";

function RegisterPage() {
  let { setFormValues, formValues } = UseUserValues();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  let navigate = useNavigate();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    for (let i in data) {
      formValues[i] = data[i];
    }
    formValues["image"] = formValues["image"][0]["name"];

    if (formValues["approveStatus"] === "Pending") {
      formValues["approvedStatus"] = "Pending";
    }
    setFormValues(formValues);

    let stringifiedTodoList = localStorage.getItem("UserDetails");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
      let arrayValue = [];
      arrayValue.push(formValues);
      localStorage.setItem("UserDetails", JSON.stringify(arrayValue));
      let path = "/profile";
      navigate(path);
    } else {
      let filterData = parsedTodoList.filter((item, i) => {
        if (parsedTodoList[i]["email"] === formValues["email"]) {
          return parsedTodoList[i];
        }
      });
      if (filterData.length === 0) {
        let arrayValue = [];
        for (let i of parsedTodoList) {
          arrayValue.push(i);
        }
        arrayValue.push(formValues);
        console.log(arrayValue);
        localStorage.clear();
        localStorage.setItem("UserDetails", JSON.stringify(arrayValue));
        let path = "/profile";
        navigate(path);
      } else {
        let arrayValue = [];
        for (let i of parsedTodoList) {
          if (formValues["email"] === i["email"]) {
            arrayValue.push(formValues);
          } else {
            arrayValue.push(i);
          }
        }
        localStorage.clear();
        localStorage.setItem("UserDetails", JSON.stringify(arrayValue));
        let path = "/profile";
        navigate(path);
      }
    }
  };

  return (
    <div className="register-Container">
      <form
        className="register-from-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="heading">Personal details</h1>
          <div>
            <input
              placeholder="Enter your Name"
              className="input-field"
              {...register("name", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.name?.type === "required" && "Name is required"}
            </p>
          </div>

          <div>
            <input
              placeholder="Enter your Phone Number"
              className="input-field"
              {...register("Number", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.Number?.type === "required" && "Number is required"}
            </p>
          </div>

          <div>
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
              <p className="error">{errors.password.message}</p>
            )}
          </div>

          <div>
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
              <p className="error">{errors.password_repeat.message}</p>
            )}
          </div>
        </div>

        <div>
          <h1 className="heading">professional details</h1>
          <div>
            <input
              placeholder="Enter Your Experience"
              className="input-field"
              {...register("experience", { required: true })}
            />
            <p className="error">
              {errors.experience?.type === "required" &&
                "Experience is required"}
            </p>
          </div>
          <div>
            <input
              placeholder="Enter Your Experience in react"
              className="input-field"
              {...register("ReactEX", { required: true })}
            />
            <p>
              {" "}
              {errors.React?.type === "required" &&
                "React Experience is required"}
            </p>
          </div>
          <div>
            <input
              placeholder="Enter Your Experience in doodleblue"
              className="input-field"
              {...register("doodleblueEx", { required: true })}
            />
            <p className="error">
              {errors.doodleblueEx?.type === "required" &&
                "Experience in doodleblue is required"}
            </p>
          </div>
          <div>
            <input
              placeholder="Enter Your Stacks"
              className="input-field"
              {...register("Stacks", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.React?.type === "required" && "Stacks is required"}
            </p>
          </div>
        </div>

        <div>
          <h1>Upload Document</h1>
          <div>
            <input
              className="input-field"
              type="file"
              {...register("image", { required: true })}
            />
            <p className="error">
              {errors.file?.type === "required" && "File is required"}
            </p>
          </div>
        </div>

        <input type="submit" className="btn" />
      </form>
    </div>
  );
}

export default RegisterPage;
