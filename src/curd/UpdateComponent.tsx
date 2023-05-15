import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

interface UpdateComponentProps {
    selectedUser: User | null;
    onUpdateUser: (updatedUser: User) => void;
  }

  const UpdateComponent: React.FC<UpdateComponentProps> = ({ selectedUser, onUpdateUser }) => {
    const [name, setName] = useState(selectedUser?.name || '');
    const [email, setEmail] = useState(selectedUser?.email || '');
    const [username, setUsername] = useState(selectedUser?.username || '');

    
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      // Create the updatedUser object with the modified data
      const updatedUser: User = {
        ...selectedUser!,
        name,
        email,
        username,
      };
  
      // Call the onUpdateUser function to update the user data
      onUpdateUser(updatedUser);
    };

  return (
    <div>
    <h2>Update User</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
);
};

export default UpdateComponent;
