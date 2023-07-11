// import { useState } from "react"

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
    if (ev.keyCode === 13) {
      ev.preventDefault();
      // const lastValueOfId = inputArray[inputArray.length - 1].key + 1;
      const newValueOfArrays = [
        { key: uuidv4(), task: ev.target.value, isCompleted: false },
        ...inputArray,
      ];
      setInputArray(newValueOfArrays);

      setNewInputArray(newValueOfArrays);
      console.log(inputArray, newInputArray);
    }
  }

  const [newInputArray, setNewInputArray] = useState([...inputArray]);
  function changingStatus(index) {
    const newArray = [...newInputArray];
    newArray[index].isCompleted = !newArray[index].isCompleted;
    setNewInputArray(newArray);
  }

  function activeTask() {
    const activeArray = inputArray.filter((ob) => ob.isCompleted === false);
    setNewInputArray(activeArray);
  }

  function allTask() {
    setNewInputArray(inputArray);
  }
  function completedTask() {
    const completedArray = inputArray.filter((ob) => ob.isCompleted === true);
    setNewInputArray(completedArray);
  }

  const [taskLeft, setTaskLeft] = useState(0);

  useEffect(() => {
    const taskLeftArray = newInputArray.filter(
      (ob) => ob.isCompleted === false
    );
    setTaskLeft(taskLeftArray.length);
  }, [newInputArray]);

  function clear() {
    [...newInputArray].map((ob) => {
      ob.isCompleted = false;
      return ob;
    }, setInputArray(newInputArray));
  }

  return (
    <>
      <input
        type="text"
        className="dark:text-LightGrayishBlueDM  text-veryDarkGrayishBlue w-full h-14 rounded-lg text-center bg-veryLightGray dark:bg-VeryDarkDesaturatedBlueDM"
        onKeyDown={inputClick}
      />
      <ul className="dark:[&>li]:text-LightGrayishBlueDM [&>li]:text-veryDarkGrayishBlue shadow-2xl max-h-96 drop-shadow-2xl overflow-y-scroll [&>li]:flex  no-scrollbar w-full items-center flex flex-col  mt-8 dark:[&>li]:bg-VeryDarkDesaturatedBlueDM [&>li]:bg-veryLightGrayish [&>li]:w-full [&>li]:h-16 [&>li]: [&>li]:pl-8 [&>li]:content-center   [&>li:first-child]:rounded-t-xl  divide-y-[1px] divide-lightGrayishBlue dark:divide-VeryDarkGrayishBlueDM">
        {newInputArray.map((ob, index) => (
          <li
            key={index}
            className={
              ob.isCompleted
                ? "line-through text-gray-400"
                : "no-underline text-black shrink-0"
            }
          >
            <CheckButton
              onClick={() => changingStatus(index)}
              gradient={
                ob.isCompleted
                  ? "bg-gradient-to-br from-brightBlue to-pinkGrad"
                  : ""
              }
            />{" "}
            <span className="my-auto mx-2">{ob.task}</span>
          </li>
        ))}
      </ul>

      <div className="text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM shadow-2xl  drop-shadow-2xl dark:bg-VeryDarkDesaturatedBlueDM  items-center   bg-veryLightGrayish w-full h-16  flex  [last-child]:rounded-b-xl border-t-[1px] border-lightGrayishBlue dark:border-VeryDarkGrayishBlueDM rounded-b-lg justify-evenly gap-4">
        <span className="ml-2"> {`${taskLeft} left`}</span>
        <div className="md:flex h-full justify-between grow max-w-xs hidden">
          <button className="" onClick={allTask}>
            All
          </button>
          <button className="" onClick={activeTask}>
            Active
          </button>
          <button className="" onClick={completedTask}>
            Completed
          </button>
        </div>

        <div className="flex h-full justify-between ">
          <button className=" mr-2" onClick={clear}>
            Clear Completed
          </button>
        </div>
      </div>

      <div className=" mt-5 grow md:hidden  text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM shadow-2xl  drop-shadow-2xl dark:bg-VeryDarkDesaturatedBlueDM  items-center  bg-veryLightGrayish w-full h-16  flex  border-t-[1px] border-lightGrayishBlue dark:border-VeryDarkGrayishBlueDM rounded-lg justify-evenly ">
        <button className="" onClick={allTask}>
          All
        </button>
        <button className="" onClick={activeTask}>
          Active
        </button>
        <button className="" onClick={completedTask}>
          Completed
        </button>
      </div>
    </>
  );
}

export default Input;
