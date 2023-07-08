// import { useState } from "react"

import { useState } from "react";

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
    const lastValueOfId = [...inputArray].pop().key + 1;
    ev.preventDefault();

    setInputArray([
      ...inputArray,
      { key: lastValueOfId, task: ev.target.value, isCompleted: false },
    ]);
    // setInputArrayRev(inputArray.reverse());
  }

 
  return (
    <>
      <input
        type="text"
        className=" w-full h-14 rounded-lg text-center bg-veryLightGray dark:bg-VeryDarkDesaturatedBlueDM"
        onClick={inputClick}
      />
      <ul className="dark:[&>li]:text-LightGrayishBlueDM [&>li]:text-veryDarkGrayishBlue shadow-2xl max-h-96 drop-shadow-2xl overflow-y-scroll [&>li]:flex  no-scrollbar w-full items-center flex flex-col  mt-8 dark:[&>li]:bg-VeryDarkDesaturatedBlueDM [&>li]:bg-veryLightGrayish [&>li]:w-full [&>li]:h-16 [&>li]: [&>li]:pl-8 [&>li]:content-center   [&>li:first-child]:rounded-t-xl [&>li:last-child]:rounded-b-xl divide-y-[1px] divide-lightGrayishBlue dark:divide-VeryDarkGrayishBlueDM">

        { [...inputArray].reverse().map((ob, index) => (
          <li key={index}
            className={
              ob.isCompleted
                ? "underline text-gray-400"
                : "no-underline text-black shrink-0"
            }
          >
            <CheckButton /> <span className="my-auto mx-2">{ob.task}</span> 
          </li>
        ))}
      </ul>
      <ul className=" shadow-2xl  drop-shadow-2xl dark:[&>li]:bg-VeryDarkDesaturatedBlueDM  w-full items-center flex flex-col   [&>li]:bg-veryLightGrayish [&>li]:w-full [&>li]:h-14 [&>li]: [&>li]:pl-8 [&>li]:flex [&>li]:flex-col [&>li]:justify-center  [&>li:last-child]:rounded-b-xl border-t-[1px] border-lightGrayishBlue dark:border-VeryDarkGrayishBlueDM rounded-b-lg">
        <li className="">Here</li>
      </ul>
    </>
  );
}

export default Input;
