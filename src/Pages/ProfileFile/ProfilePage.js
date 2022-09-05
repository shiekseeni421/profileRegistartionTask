import React from "react";
import { FaUserCircle, FaEnvelopeSquare } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UseUserValues } from "../../context/UserFormContext";

import "./index.scss";

export default function ProfilePage() {
  const { formValues } = UseUserValues();
  return (
    <div className="profile-container">
      <div className="profile-page">
        <FaUserCircle className="profile-Icon" />
        <p className="profile-Name">{formValues["name"]}</p>

        <div className="information-container">
          <FaEnvelopeSquare />
          <p>{formValues["email"]}</p>
        </div>
        <div className="information-container">
          <AiFillPhone />
          <p>{formValues["Number"]}</p>
        </div>
        <Link to="/viewMorePage" className="btn">
          view More
        </Link>
      </div>
      {/* <Loader type="spinner-default" bgColor={"#eb4034"} size={100} /> */}
    </div>
  );
}
