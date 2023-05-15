import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email:string;
  username:string;
}

interface ListComponentProps {
    users: User[];
    onSelectUser: (user: User) => void;
  }

const ListComponent:  React.FC<ListComponentProps> = ({ users, onSelectUser })=> {
  const [items, setItems] = useState<User[]>([]);
  
  const navigate=useNavigate();
  const navtodash=()=>{
    
    navigate('/update')
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://645d193a250a246ae3179078.mockapi.io/users');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.id} { item.email}  {item.name} { item.username} 
        <button type="button" onClick={navtodash} >View</button>
        <button type="button" onClick={navtodash} >Delete</button>
        </li>
      ))}
      
    </ul>
    
  );
};

export default ListComponent;
