import React, { createContext, useContext, useState } from "react";

const UserFormFunctionality = createContext({});

export function UseUserValues() {
  return useContext(UserFormFunctionality);
}

export function UserFormProvider({ children }) {
  const [formValues, setFormValues] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <UserFormFunctionality.Provider
      value={{ formValues, handleChange, setFormValues }}
    >
      {children}
    </UserFormFunctionality.Provider>
  );
}
