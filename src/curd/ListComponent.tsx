import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  name: string;
  email:string;
  username:string;
  phone:string
}

interface ListComponentProps {
    users: User[];
    onSelectUser: (user: User) => void;
  }

  

const ListComponent:  React.FC<ListComponentProps> = ({  onSelectUser })=> {
  const [items, setItems] = useState<User[]>([]);
  const[userone,setUserone]=useState<User>();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  
  
  const navigate = useNavigate();

  const navToDash = (userId:any) => {
    navigate(`/update/${userId}`);
   
  };

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

  const handleDeleteUser = (userId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== userId));
  };

  

 
  
  

  const handleSelectUser = (item:any) => {
    console.log(item);
  };

 


  return (
    <ul>
      {items.map((item) => (
         <div key={item.id}>
        <li key={item.id}>{item.id} { item.email}  {item.name} { item.username} { item.phone} 
        <button type="button" onClick={() => navToDash(item.id)} >View</button>

        <button type="button" onClick={() => handleDeleteUser(item.id)} >Delete</button>
        
        </li>
        </div>
      ))}
      
    </ul>
    
  );
};

export default ListComponent;


