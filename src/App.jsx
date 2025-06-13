import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Question1 from "./components/question1";
import Question2 from "./components/question2";
import Question3 from "./components/question3";
import Question4 from "./components/question4";
import Question5 from "./components/question5";
import Question6 from "./components/question6";
import Question7 from "./components/question7";
import Question8 from "./components/question8";
import Question8_5 from "./components/question8-5";
import Question9 from "./components/question9";
import Question10 from "./components/question10";
import Question11 from "./components/question11";
function App() {
  const [count, setCount] = useState(0);
  let [items, setItems] = useState([
    1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
    4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
  ]);
  const [isPersonAlice, setIsPersonAlice] = useState(true);

  function getUniqueNumber() {
    const uniqueValues = new Set(items);
    const uniqueArray = [...uniqueValues];
    uniqueArray.sort((a, b) => a - b);

    console.log("Unique values:", uniqueArray);
  }

  function TaskCounter({ name }) {
    const [tasks, setTasks] = useState(0);
    return (
      <>
        <h1>
          {name}'s tasks: {tasks}
        </h1>
        <button onClick={() => setTasks(tasks + 1)}>Complete Task</button>
      </>
    );
  }

  useEffect(() => {
    //  getUniqueNumber();
  }, []);

  return (
    <>
   <Routes>
      <Route path="/Q1" element={<Question1 />} />
     <Route path="/Q2" element={<Question2 />} />
     <Route path="/Q3" element={<Question3 />} />
       <Route path="/Q4" element={<Question4 />} />
        <Route path="/Q5" element={<Question5 />} />
         <Route path="/Q6" element={<Question6 />} />
        <Route path="/Q7" element={<Question7 />} />
        <Route path="/Q8" element={<Question8 />} />
         <Route path="/Q8_5" element={<Question8_5 />} />
        <Route path="/Q9" element={<Question9 />} />
        <Route path="/Q10" element={<Question10 />} />
         <Route path="/Q11" element={<Question11 />} />
   </Routes>
    </>
  );
}

export default App;
