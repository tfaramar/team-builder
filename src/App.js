import  React, { useState } from 'react';
import './App.css';
import Form from './Form.js';

const App = () => {

  const [member, setMember] = useState({name:"", email:"", role:""});

  let team = [
    {name:"Steve Zissou", email:"Steve@Life.Aquatic", role:"Oceaographer"},
    {name:"Klaus Daimler", email:"Klaus@Life.Aquatic", role:"First Mate"},
    {name:"Vikram Ray", email:"Vikram@Life.Aquatic", role:"Icthyologist"},
    {name:"Vladimir Wolodarsky", email:"Vlad@Life.Aquatic", role:"Navigator"},
    {name:"Jane Winslett-Richardson", email:"Jane@BBC.uk", role:"Journalist"}
  ]


  return (


    <div className = "App">
      <Form member = {member} setMember = {setMember} team={team}/>

      {team.map((member) =>  <div className = "member-card">
                              <h3>Name: {member.name}</h3>
                              <p>Email: {member.email}</p>
                              <p>Role: {member.role}</p>
                            </div>)}
    </div>  
  );
}

export default App;
