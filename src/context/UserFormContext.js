import React, { createContext, useContext, useState } from "react";

const UserFormFunctionality = createContext({});

export function UseUserValues() {
  return useContext(UserFormFunctionality);
}

export function UserFormProvider({ children }) {
  const [formValues, setFormValues] = useState({});

  return (
    <UserFormFunctionality.Provider value={{ formValues, setFormValues }}>
      {children}
    </UserFormFunctionality.Provider>
  );
}
