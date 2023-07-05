// import { useState } from "react"

import { useState } from "react"



function Input (){ 
    // const [initial, setInitial] = useState('')
    // const [completed, setCompleted] = useState(false)
    const [inputArray, setInputArray] = useState([])
    const [num,setNum] = useState(1)
function inputClick (ev) {
    ev.preventDefault()

   
    setInputArray([...inputArray,{task: ev.target.value, isCompleted: false, key:num}])
    setNum(num+1)
    

}
      
        
    
   
    return (
        <>
            <input type="text" className=" w-full h-14 rounded-lg text-center " onClick={inputClick}   />
            <ul className="h-[500px] overflow-scroll w-full items-center flex flex-col  mt-8 [&>li]:bg-slate-200 [&>li]:w-full [&>li]:h-12 [&>li]: [&>li]:text-center [&>li]:flex [&>li]:flex-col [&>li]:justify-center [&>li:first-child]:rounded-t-xl [&>li:last-child]:rounded-b-xl divide-y-[1px] divide-zinc-400">
            {inputArray.map((ob) => <li className={ob.completed?'underline text-gray-400':'no-underline text-black shrink-0'}>{ob.task} {ob.key}</li>)}
          </ul>
        </>
      
    )
}

export default Input