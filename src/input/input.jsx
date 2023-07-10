// import { useState } from "react"

import {  useState } from "react";

import CheckButton from "../checkButton/checkButton";

function Input() {
  // const [initial, setInitial] = useState('')
  // const [completed, setCompleted] = useState(false)
  const [inputArray, setInputArray] = useState([
    { key: 1, task: "Tomar agua", isCompleted: true },
    {
      key: 2,
      task: "Finalizar práctica de estados y props",
      isCompleted: false,
    },
  ]);
  //   const [inputArrayRev, setInputArrayRev] = useState([
  //     {
  //       key: 2,
  //       task: "Finalizar práctica de estados y props",
  //       isCompleted: false,
  //     },
  //     { key: 1, task: "Tomar agua", isCompleted: true },
  //   ]);

  function inputClick(ev) {
    // const lastValueOfId = [...inputArray].pop().key + 1;
    const lastValueOfId = inputArray[inputArray.length - 1].key + 1
    ev.preventDefault();
    
    setInputArray([
      ...inputArray,
      { key: lastValueOfId, task: ev.target.value, isCompleted: false },
    ]);
    // setInputArrayRev(inputArray.reverse());
  }
  const newInputArray = [...inputArray]
  function changingStatus(index) {
newInputArray[index].isCompleted = !newInputArray[index].isCompleted;
setInputArray(newInputArray)
  }
  
  

  return (
    <>
      <input
        type="text"
        className="dark:text-LightGrayishBlueDM  text-veryDarkGrayishBlue w-full h-14 rounded-lg text-center bg-veryLightGray dark:bg-VeryDarkDesaturatedBlueDM"
        onClick={inputClick}
      />
      <ul className="dark:[&>li]:text-LightGrayishBlueDM [&>li]:text-veryDarkGrayishBlue shadow-2xl max-h-96 drop-shadow-2xl overflow-y-scroll [&>li]:flex  no-scrollbar w-full items-center flex flex-col  mt-8 dark:[&>li]:bg-VeryDarkDesaturatedBlueDM [&>li]:bg-veryLightGrayish [&>li]:w-full [&>li]:h-16 [&>li]: [&>li]:pl-8 [&>li]:content-center   [&>li:first-child]:rounded-t-xl  divide-y-[1px] divide-lightGrayishBlue dark:divide-VeryDarkGrayishBlueDM">
        {newInputArray.sort((a, b) => b.key - a.key).map((ob, index) => (
          <li
            key={index}
            className={
              ob.isCompleted
                ? "underline text-gray-400"
                : "no-underline text-black shrink-0"
            }
          >
            <CheckButton onClick={changingStatus(index)} gradient={ob.isCompleted ? 'bg-gradient-to-br from-brightBlue to-pinkGrad':''}/> <span className="my-auto mx-2">{ob.task}</span>
          </li>
        ))}
      </ul>
      

      <div className="text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM shadow-2xl  drop-shadow-2xl dark:bg-VeryDarkDesaturatedBlueDM  items-center   bg-veryLightGrayish w-full h-28  :flex-col   [last-child]:rounded-b-xl border-t-[1px] border-lightGrayishBlue dark:border-VeryDarkGrayishBlueDM rounded-b-lg grid grid-cols-12 grid-rows-2 gap-4">
        <span className="col-span-8">Counter</span>
        <div className="row-start-2 col-span-12 border-t h-full w-full">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div className="col-start-9 col-span-4 flex">
          <button>Clear</button>
          <button>Completed</button>
        </div>
      </div>
      </>
    
  );
}

export default Input;
