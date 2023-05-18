import React from "react";
import SubChildCompmonent from "./SubChildComponent";

interface ChildComponentProps {
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const ChildComponent = (props: ChildComponentProps) => {
  return (
    <div>
      <h2>Child component</h2>
      <SubChildCompmonent  />
    </div>
  );
};

export default ChildComponent;
