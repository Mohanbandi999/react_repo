import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './curd/ListComponent';
import FormComponent from './curd/FormComponent';
import UpdateComponent from './curd/UpdateComponent';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

import ParentComponent from './listcontext/ParentComponent';

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
        <Route path="/list" element={<ListComponent  /> } />
        <Route path="/update/:userId" element={<UpdateComponent />} /> 
        <Route path="/parent" element={<ParentComponent/>} /> 
        
          
      </Routes>
      
    
    </div>
    
  );
}

export default App;
