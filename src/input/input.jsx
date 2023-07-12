import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CheckButton from "../checkButton/checkButton";
const cross = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
    <path
      fill="#494C6B"
      fillRule="evenodd"
      d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
    />
  </svg>
);

const checkLogo = (
  <svg className="" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
    <path
      fill="none"
      stroke="#FaFaFa"
      strokeWidth="2"
      d="M1 4.304L3.696 7l6-6"
    />
  </svg>
);

function Input() {
  const [initial, setInitial] = useState("");
  const [inputArray, setInputArray] = useState([
    { key: 1, task: "Tomar agua", isCompleted: true },
    {
      key: 2,
      task: "Finalizar práctica de estados y props",
      isCompleted: false,
    },
  ]);

  function inputClick(ev) {
    if (ev.keyCode === 13) {
      ev.preventDefault();
      const newValueOfArrays = [
        { key: uuidv4(), task: ev.target.value, isCompleted: false },
        ...inputArray,
      ];
      setInputArray(newValueOfArrays);
      setInitial("");
    }
  }

  const [filter, setFilter] = useState("all"); // all || completed || active

  let visibleElements = inputArray;
  if (filter === "completed") {
    visibleElements = inputArray.filter((tarea) => tarea.isCompleted);
  } else if (filter === "active") {
    visibleElements = inputArray.filter((tarea) => !tarea.isCompleted);
  }
  function changingStatus(index) {
    const newArray = [...inputArray];
    newArray[index].isCompleted = !newArray[index].isCompleted;
    setInputArray(newArray);
  }

  function activeTask() {
    setFilter("active");
  }

  function allTask() {
    setFilter("all");
  }
  function completedTask() {
    setFilter("completed");
  }

  let taskLeft = 0;
  if (filter === "active") {
    taskLeft = visibleElements.length;
  } else if (filter === "completed") {
    taskLeft = inputArray.length - visibleElements.length;
  } else {
    taskLeft = inputArray.filter((task) => !task.isCompleted).length;
  }

  function clear() {
    const newState = [...inputArray].map((ob) => {
      ob.isCompleted = false;
      return ob;
    });
    setInputArray(newState);
    if (filter === "completed") {
      setFilter("all");
    }
  }

  return (
    <>
      <input
        type="text"
        className="dark:text-LightGrayishBlueDM  text-veryDarkGrayishBlue w-full h-14 rounded-lg text-center bg-veryLightGray dark:bg-VeryDarkDesaturatedBlueDM"
        onKeyDown={inputClick}
        onChange={(ev) => setInitial(ev.target.value)}
        value={initial}
      />
      <ul className="dark:[&>li]:text-LightGrayishBlueDM [&>li]:text-veryDarkGrayishBlue shadow-2xl max-h-96 drop-shadow-2xl overflow-y-scroll [&>li]:flex  no-scrollbar w-full items-center flex flex-col  mt-8 dark:[&>li]:bg-VeryDarkDesaturatedBlueDM [&>li]:bg-veryLightGrayish [&>li]:w-full [&>li]:h-16 [&>li]: [&>li]:pl-8 [&>li]:content-center   [&>li:first-child]:rounded-t-xl  divide-y-[1px] divide-lightGrayishBlue dark:divide-VeryDarkGrayishBlueDM">
        {visibleElements.map((ob, index) => (
          <li
            key={index}
            className={
              ob.isCompleted
                ? "line-through text-gray-400 shrink-0 justify-between"
                : "no-underline text-black shrink-0 justify-between"
            }
          >
            <div className="flex">
              <CheckButton
                onClick={() => changingStatus(index)}
                gradient={
                  ob.isCompleted
                    ? "bg-gradient-to-br from-brightBlue to-pinkGrad"
                    : ""
                }
                logo={ob.isCompleted ? checkLogo : ""}
              />{" "}
              <span className="my-auto mx-2">{ob.task}</span>
            </div>
            <button
              className="mr-4"
              onClick={() => {
                const newArray = inputArray.filter(
                  (item) => item.key !== ob.key
                );
                console.log(newArray);

                console.log(ob);
                setInputArray(newArray);
              }}
            >
              {" "}
              {cross}
            </button>
          </li>
        ))}
      </ul>

      <div className="text-veryDarkGrayishBlue dark:text-LightGrayishBlueDM shadow-2xl  drop-shadow-2xl dark:bg-VeryDarkDesaturatedBlueDM  items-center   bg-veryLightGrayish w-full h-16  flex  [last-child]:rounded-b-xl border-t-[1px] border-lightGrayishBlue dark:border-VeryDarkGrayishBlueDM rounded-b-lg justify-evenly gap-4">
        <span className="ml-2"> {`${taskLeft} left`}</span>
        <div className="md:flex h-full justify-between grow max-w-xs hidden">
          <button
            className={filter === "all" ? "font-black " : ""}
            onClick={allTask}
          >
            All
          </button>
          <button
            className={filter === "active" ? "font-black " : ""}
            onClick={activeTask}
          >
            Active
          </button>
          <button
            className={filter === "completed" ? "font-black " : ""}
            onClick={completedTask}
          >
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
        <button
          className={filter === "all" ? "font-black " : ""}
          onClick={allTask}
        >
          All
        </button>
        <button
          className={filter === "active" ? "font-black " : ""}
          onClick={activeTask}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "font-black " : ""}
          onClick={completedTask}
        >
          Completed
        </button>
      </div>
    </>
  );
}

export default Input;
