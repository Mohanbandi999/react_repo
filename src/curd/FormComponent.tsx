import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';



const FormComponent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://645d193a250a246ae3179078.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, username, phone }),
      });

      if (response.ok) {
        // Handle success
        const newItem = await response.json();
        console.log('New item:', newItem);
      } else {
        // Handle error
        throw new Error('Failed to create item');
      }
    } catch (error) {
      // Handle error
      console.error('Error creating item:', error);
    }
  };



  

  return (
    <div style={{ marginTop: '16px' }}>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '16px' }}>
        <TextField label="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <TextField label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <TextField label="Username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <TextField label="Phone number" type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </div>
  );
};

export default FormComponent;
