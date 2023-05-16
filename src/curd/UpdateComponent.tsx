import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

const UpdateComponent: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [userone, setUserone] = useState<User | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
 
 console.log(userId)
  useEffect(() => {
    const fetchItem = async () => {
      try {
       
        const response = await fetch(`https://645d193a250a246ae3179078.mockapi.io/users/${userId}`);
        const data = await response.json();
        setUserone(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchItem();
  }, []);

  useEffect(() => {
    if (userone) {
      setName(userone.name);
      setEmail(userone.email);
      setUsername(userone.username);
    }
  }, [userone]);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      if (!userone) {
        console.error('User not found');
        return;
      }
  
      // Create an updatedUser object with the new values
      const updatedUser = {
        id: userone.id || 0, // Provide a default value for id if it's undefined
        name,
        email,
        username,
      };
  
      // Send a PUT request to update the user
      const response = await fetch(`https://645d193a250a246ae3179078.mockapi.io/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (response.ok) {
        // Update the user in the state with the new values
        setUserone(updatedUser);
        console.log('User updated successfully!');
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
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
