import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './curd/ListComponent';
import FormComponent from './curd/FormComponent';
import UpdateComponent from './curd/UpdateComponent';
import { Route, Routes } from 'react-router-dom';
import Navbar from './curd/Navbar';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

function App() {
  return (
    <div className="App">
      <Navbar/>
     

<Routes>
        <Route path="/add" element={<FormComponent/>} /> 
        <Route path="/list" element={<ListComponent users={[]} onSelectUser={function (user: User): void {
          throw new Error('Function not implemented.');
        } }/>} /> 
        <Route path="/update/:userId" element={<UpdateComponent  />} /> 
   
         
      </Routes>
    
    </div>
    
  );
}

export default App;
