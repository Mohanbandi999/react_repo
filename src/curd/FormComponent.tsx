import React, { useState } from 'react';



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
    <form onSubmit={handleSubmit} >
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
      <div>
        <label htmlFor="username">Phone number:</label>
        <input type="number" id="username" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
