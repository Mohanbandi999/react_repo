import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "potter",
    email: "john@gmail.com",
  });

  return (
    <div>
      <h1>useContext ParentComponent</h1>
      <ChildComponent userDetails={userDetails} />
    </div>
  );
};

export default ParentComponent;
