import { useState } from "react";

const TodoList = () => {
  const [todos] = useState([
    { id: 1, text: "學習 React", completed: false, studyPoint: 3 },
    { id: 2, text: "建立專案", completed: false, studyPoint: 1 },
  ]);
  const firstTodo = todos[0];
  const [inputPoints, setInputPoints] = useState(0);
  const [sumPoints, setSumPoints] = useState(0);

  const handleStudyPointsChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    setInputPoints(newValue);
    setSumPoints(firstTodo.studyPoint + newValue);
  };

  return (
    <div>
      <p>課程名稱: {firstTodo.text}</p>
      <label>學習點數: </label>
      <input
        type="number"
        value={inputPoints}
        onChange={handleStudyPointsChange}
      />
      <p>總累積點數: {sumPoints}</p>
    </div>
  );
};
export default TodoList;