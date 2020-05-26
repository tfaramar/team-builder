import  React, { useState } from 'react';
import './App.css';
import Form from './Form.js';

const lifeAquatic = [
  {name:"Steve Zissou", email:"Steve@Life.Aquatic", role:"Oceaographer"},
  {name:"Klaus Daimler", email:"Klaus@Life.Aquatic", role:"First Mate"},
  {name:"Vikram Ray", email:"Vikram@Life.Aquatic", role:"Icthyologist"},
  {name:"Vladimir Wolodarsky", email:"Vlad@Life.Aquatic", role:"Navigator"},
  {name:"Jane Winslett-Richardson", email:"Jane@BBC.uk", role:"Journalist"}
]

const App = () => {

  const [team, updateTeam] = useState(lifeAquatic);

  const removeTeamMember = (overboardMem) => {
    const newTeam = team.filter(member => {
      if (member.email !== overboardMem.email){
        return member;
      }
    });
    updateTeam(newTeam);
  }

  return (


    <div className = "App">
      <Form addTeamMember={updateTeam} team={team}/>

      {team.map((member) =>  <div className = "member-card">
                              <h3>Name: {member.name}</h3>
                              <p>Email: {member.email}</p>
                              <p>Role: {member.role}</p>
                              <button onClick={() => removeTeamMember(member)}> Man Overboard </button>
                            </div>)}
    </div>  
  );
}

export default App;
