import React from "react";
import { useRef, useEffect, useState } from "react";

const IdDialog = ({ idEmit,  startGameWith }) => {
  const ref = useRef();

  const [inputData, setInputData] = useState("");

  useEffect(() => {
    // if (isIdEnter) {
    //   ref.current?.showModal();
    // } else {
    //   ref.current?.close();
    // }
     ref.current?.showModal();
  }, []);

  const enterId = () => {
    idEmit(inputData);
    // startNewGame(false)
    ref.current?.close();
  };

  const clickNewGame = (status) =>{
    startGameWith(status)
     ref.current?.close();
  }

  return (
    // backdrop:backdrop-blur-xs
    <div className="">
      <dialog
        ref={ref}
        className="p-3  rounded-2xl shadow fixed inset-y-0 inset-x-0 m-auto backdrop:bg-black/20 "
      >
        <p className="font-semibold">Enter id get into someone game?</p>
       
        <div className="mt-4 flex justify-between items-center">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="border border-amber-200 p-3 rounded-lg mt-2"
            placeholder="Enter game ID here"
          />
          <button
            onClick={() => enterId(inputData)}
            className="bg-amber-400 p-2 rounded-lg text-slate-50  ml-3 shadow active:scale-[0.98] font"
          >
           Enter
          </button>
        </div>
         <p className="mt-4 font-semibold">Or</p>
         <div className="flex justify-between"  >
            <button className="border border-sky-200 bg-sky-400 text-white p-3 rounded-lg shadow active:scale-[0.98] mt-5" onClick={() => clickNewGame('New')}>
                 New Game
          </button>
            <button className="border border-amber-200 bg-amber-400 text-white p-3 rounded-lg shadow active:scale-[0.98] mt-5" onClick={() => clickNewGame('Load')}>
                 Load Game
            </button>
         </div>
      
      </dialog>
    </div>
  );
};

export default IdDialog;
