import { useState } from "react";
import {  Link } from 'react-router-dom';


export default function TaskManager() {
  const [isPersonAlice, setIsPersonAlice] = useState(true);

  const [aliceTasks, setAliceTasks] = useState(0);

  const [bobTasks, setBobTasks] = useState(0);

  const handleAliceTaskComplete = () => {
    setAliceTasks((prevTasks) => prevTasks + 1);
  };

  // Handler function for when Bob completes a task
  const handleBobTaskComplete = () => {
    setBobTasks((prevTasks) => prevTasks + 1);
  };

  return (
    <div>
      {isPersonAlice ? (
        <TaskCounter
          name="Alice"
          tasks={aliceTasks}
          onCompleteTask={handleAliceTaskComplete}
        />
      ) : (
        <TaskCounter
          name="Bob"
          tasks={bobTasks}
          onCompleteTask={handleBobTaskComplete}
        />
      )}

      <button
        onClick={() => setIsPersonAlice(!isPersonAlice)}
        style={{
          display: "block", // Make button a block element
          width: "100%", // Full width
          marginTop: "25px",
          padding: "12px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
        onMouseDown={(e) =>
          (e.currentTarget.style.transform = "translateY(1px)")
        }
        onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        Switch Person
      </button>

      <p
        style={{
          marginTop: "15px",
          textAlign: "center",
          fontSize: "14px",
          color: "#555",
        }}
      >
        Currently managing tasks for:{" "}
        <span style={{ fontWeight: "bold" }}>
          {isPersonAlice ? "Alice" : "Bob"}
        </span>
      </p>
      <p>
        Question 7: <span style={{ fontWeight: "bold" }}>'Lifting State Up' Pattern</span>  </p>
        <p>
            Explaination: To fix this, I needed to 'lift the state up.' Instead of each TaskCounter component managing its own tasks count, the main TaskManager component (the parent) should be responsible for holding the tasks state for both Alice and Bob.
         </p>
         <a href="https://github.com/AllenTan005/react2025/blob/main/src/components/question7.jsx" target="_blank" rel="noopener noreferrer" >code here</a>
         <div style={{ display:"flex", justifyContent:"space-between" }} >
             
                  <Link to="/Q6">Previous</Link>
             
                  <Link to="/Q8">Next</Link>
                
             </div>
    
    </div>
  );
}
function TaskCounter({ name, tasks, onCompleteTask }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px dashed #a0a0a0",
        borderRadius: "5px",
        marginBottom: "10px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#2c3e50",
          margin: "0 0 15px 0",
        }}
      >
        {name}'s tasks: <span style={{ color: "#e74c3c" }}>{tasks}</span>
      </p>
      <button
        onClick={onCompleteTask}
        style={{
          padding: "10px 18px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "15px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
        onMouseDown={(e) =>
          (e.currentTarget.style.transform = "translateY(1px)")
        }
        onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        Complete Task
      </button>
    </div>
  );
}
