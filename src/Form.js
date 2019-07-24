import React, { useState } from "react";
import { template } from "handlebars";

function Form({member, setMember, team}) {

    //use an object to track multiple fields:

    //create an onChange handler
    const handleChange = event => {
        //console.log(event.target.value)
        const updatedMember = { ...member, [event.target.name]: event.target.value };
        setMember(updatedMember);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("team member", member);
        team.push(member);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input type="text" name="name" value={member.name} onChange={handleChange} required /> 
        </label>
        <label>
            Email
            <input type="email" name="email" value={member.email} onChange={handleChange}/>
        </label>
        <label>
            Role
            <input type="text" name="role" value={member.role} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>  
    );
}

export default Form;