
import { useState,useEffect } from "react";
import {  Link } from 'react-router-dom';

function TodoItem({ todo, onToggle }) {
  return (
    <li
      key={todo.id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 0',
        borderBottom: '1px solid #eee',
      
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#333',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)} 
          style={{ marginRight: '10px', transform: 'scale(1.2)' }}
        />
        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{todo.text}</span>
      </div>
      <span style={{ fontSize: '14px', color: '#666' }}>
        學習點數: {todo.studyPoint}
      </span>
    </li>
  );
}


const question8 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "學習 React", completed: false, studyPoint: 3 },
    { id: 2, text: "建立專案", completed: false, studyPoint: 1 },
  ]);


  const [basePoints, setbasePoints] = useState(3);


  const totalStudyPointsFromTodos = todos.reduce((sum, todo) => sum + todo.studyPoint, 0);
  const sumPoints = basePoints + totalStudyPointsFromTodos;

  const toggleTodo = (id) => {
    setTodos(prevTodos => {
      
      return prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } 
          : todo 
      );
    });
  };

  const handleStudyPointsChange = (e) => {
     const newValue = parseInt(e.target.value, 10) || 0;
     setbasePoints(newValue);

    
  };

  useEffect(() =>{
    console.log('basePoints', basePoints)
  },[basePoints])

  return (
    <div>
  <div style={{
      fontFamily: 'Inter, sans-serif',
      maxWidth: '600px',
      margin: '40px auto',
      padding: '25px',
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '25px' }}>課程學習進度</h2>

      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
        課程名稱: React 基礎
      </p>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="basePointsInput" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
          基礎點數:
        </label>
        <input
          id="basePointsInput"
          type="number" 
          value={basePoints} 
          onChange={handleStudyPointsChange}
          min="0" 
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ddd',
            width: '100%',
            boxSizing: 'border-box',
            fontSize: '16px'
          }}
        />
      </div>

      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#e74c3c', marginBottom: '20px' }}>
        總累積點數: {sumPoints}
      </p>

      <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>課程列表:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
     
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>

  
      <div style={{
        marginTop: '25px',
        padding: '15px',
        backgroundColor: '#f8f8f8',
        border: '1px dashed #ccc',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#777'
      }}>
        <a href="https://github.com/AllenTan005/react2025/blob/main/src/components/question8.jsx" target="_blank" rel="noopener noreferrer" >code here</a>
      </div>
  
    </div>
          <div style={{ display:"flex", justifyContent:"space-between" }} >
             
                  <Link to="/Q7">Previous</Link>
             
                  <Link to="/Q9">Next</Link>
                
             </div>
    </div>
  );
};

export default question8;
