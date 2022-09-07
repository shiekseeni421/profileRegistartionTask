import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";

function EditPage() {
  let { setFormValues, formValues } = UseUserValues();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ defaultValues: formValues });

  let navigate = useNavigate();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    for (let i in data) {
      formValues[i] = data[i];
    }
    formValues["Document"] = formValues["Document"][0]["name"];

    if (formValues["status"] === "Cancel") {
      formValues["status"] = "Pending";
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
        <h1 className="text-center main-heading">Edit Account</h1>
        <div className="field-container">
          <h1 className="heading">Personal details</h1>
          <div input-container>
            <label className="Label-styles">Name</label>
            <input
              placeholder="Enter your Name"
              className="input-field"
              {...register("name", { required: true })}
            />
            <p className="error">
              {errors.name?.type === "required" && "Name is required"}
            </p>
          </div>

          <div>
            <label className="Label-styles">Phone Number</label>
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
            <label className="Label-styles">Gender</label>
            <select
              placeholder="Enter your Gender"
              className="input-field"
              {...register("gender", { required: true })}
            >
              <option value="select your Gender">Select</option>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
            <p className="error">
              {errors.gender?.type === "required" && "gender is required"}
            </p>
          </div>

          <div>
            <label className="Label-styles">Date of Birth</label>
            <input
              className="input-field"
              name="dob"
              type="date"
              {...register("dob", {
                required: "Date of Birth is required",
                matches: {
                  value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                  message:
                    "Date of Birth must be a valid date in the format YYYY-MM-DD",
                },
              })}
            />
            {errors.dob && <p className="error">{errors.dob.message}</p>}
          </div>
          <div>
            <label className="Label-styles">marital Status</label>
            <select
              placeholder="Enter your Gender"
              className="input-field"
              {...register("maritalStatus", { required: true })}
            >
              <option value="select your Status">Select</option>
              <option value="Married">Married</option>
              <option value="un Married">Un Married</option>
            </select>
            <p className="error">
              {errors.maritalStatus?.type === "required" &&
                "maritalStatus is required"}
            </p>
          </div>
          <div input-container>
            <label className="Label-styles">State</label>
            <input
              placeholder="Enter your State"
              className="input-field"
              {...register("State", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.State?.type === "required" && "Name is required"}
            </p>
          </div>

          <div input-container>
            <label className="Label-styles">City</label>
            <input
              placeholder="Enter your City"
              className="input-field"
              {...register("City", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.City?.type === "required" && "Name is required"}
            </p>
          </div>

          <div input-container>
            <label className="Label-styles">Pin Code</label>
            <input
              placeholder="Enter your Pin Code"
              className="input-field"
              {...register("PinCode", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.PinCode?.type === "required" && "Name is required"}
            </p>
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
        </div>

        <h1 className="heading">Education details</h1>
        <div className="field-container">
          <div input-container>
            <label className="Label-styles">Enter You SSC Marks %</label>
            <input
              placeholder="Enter your Marks %"
              className="input-field"
              {...register("SSC", { required: true })}
            />
            <p className="error">
              {" "}
              {errors.SSC?.type === "required" && "Marks is required"}
            </p>
          </div>
          <div input-container>
            <label className="Label-styles">
              Enter You Inter or Diploma Marks %
            </label>
            <input
              placeholder="Enter your Marks %"
              className="input-field"
              {...register("InterDiploma", { required: true })}
            />
            <p className="error">
              {errors.InterDiploma?.type === "required" && "Marks is required"}
            </p>
          </div>
          <div input-container>
            <label className="Label-styles">Enter You Graduation Marks %</label>
            <input
              placeholder="Enter your Marks %"
              className="input-field"
              {...register("Graduation", { required: true })}
            />
            <p className="error">
              {errors.Graduation?.type === "required" && "Marks is required"}
            </p>
          </div>
        </div>

        <div>
          <h1 className="heading">Professional details</h1>
          <div>
            <label>Enter Present role</label>
            <input
              placeholder="Role"
              className="input-field"
              {...register("role", { required: true })}
            />
            <p className="error">
              {errors.role?.type === "required" && "* required"}
            </p>
          </div>
          <div>
            <label>Enter Total Experience</label>
            <input
              placeholder="Experience"
              className="input-field"
              {...register("Experience", { required: true })}
            />
            <p className="error">
              {errors.Experience?.type === "required" && "* required"}
            </p>
          </div>

          <div>
            <label>Enter Total Experience in React</label>
            <input
              placeholder="React"
              className="input-field"
              {...register("ReactEXp", { required: true })}
            />
            <p className="error">
              {errors.ReactEXp?.type === "required" && "* required"}
            </p>
          </div>

          <div>
            <label>Enter Total Experience in DoodelBlue</label>
            <input
              placeholder="DoodelBlue"
              className="input-field"
              {...register("DoodelBlue", { required: true })}
            />
            <p className="error">
              {errors.DoodelBlue?.type === "required" && "* required"}
            </p>
          </div>

          <div>
            <label>Enter Your Skills</label>
            <input
              placeholder="Skills"
              className="input-field"
              {...register("Skills", { required: true })}
            />
            <p className="error">
              {errors.Skills?.type === "required" && "* required"}
            </p>
          </div>

          <div>
            <label>Enter Your Anual Income </label>
            <input
              placeholder="Anual Income LPA"
              className="input-field"
              {...register("Income", { required: true })}
            />
            <p className="error">
              {errors.Income?.type === "required" && "* required"}
            </p>
          </div>

          <div>
            <label className="Label-styles">Date of Joining</label>
            <input
              className="input-field"
              name="doj"
              type="date"
              {...register("doj", {
                required: "Date of Joining is required",
                matches: {
                  value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
                  message:
                    "Date of Joining must be a valid date in the format YYYY-MM-DD",
                },
              })}
            />
            {errors.doj && <p className="error">{errors.dob.message}</p>}
          </div>
        </div>

        <div>
          <h1>KYC</h1>
          <div>
            <label> Upload Aathar/PAN card</label>
            <input
              className="input-field"
              type="file"
              accept="image/*"
              {...register("Document", { required: true })}
            />
            <p className="error">
              {errors.Document?.type === "required" && "* required"}
            </p>
          </div>
        </div>

        <input type="submit" className="btn" />
      </form>
    </div>
  );
}

export default EditPage;
