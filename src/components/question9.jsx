import React, { createContext, useContext, useState } from "react";
import {  Link } from 'react-router-dom';
// 1. 建立 Context
const UserContext = createContext();

function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);

  const user = { name, age };

  return (
  
    <UserContext.Provider value={user}>
      <ChildComponent />
 
    </UserContext.Provider>
  );
}

function ChildComponent() {
  return (
    <div>
      <p>我是 ChildComponent</p>
      <GrandchildComponent />
    </div>
  );
}

function GrandchildComponent() {

  const { name, age } = useContext(UserContext);

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
            <div style={{
        marginTop: '25px',
        padding: '15px',
        backgroundColor: '#f8f8f8',
        border: '1px dashed #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#777',
        marginBottom: '25px'
      }}>
              <a href="https://github.com/AllenTan005/react2025/blob/main/src/components/question9.jsx" target="_blank" rel="noopener noreferrer" >code here</a>

      </div>
        <div style={{ display:"flex", justifyContent:"space-between" }} >

                  <Link to="/Q8">Previous</Link>
             
                  <Link to="/Q10">Next</Link>
                
             </div>
    </div>
  );
}
export default ParentComponent