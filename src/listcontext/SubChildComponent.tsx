import React, { useContext } from 'react';
import { Context } from '../Context';


interface SubChildCompmonentProps {
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const SubChildCompmonent = () => {

    const data=useContext(Context);
    console.log(data);

    const { firstName, lastName, email } = data as {
        firstName: string;
        lastName: string;
        email: string;
      };

  return (
    <div>
      <h3>Sub child component</h3>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default SubChildCompmonent;
