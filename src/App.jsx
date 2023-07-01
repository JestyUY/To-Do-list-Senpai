// import { useState } from 'react'

// import { useEffect, useState } from 'react'
import "./App.css";
import ButtonMode from "./ButtonMode/ButtonMode";

function App() {
  return (
    <div className="bg-Mobile-Light w-screen h-screen bg-no-repeat bg-contain dark:bg-Mobile-Dark lg:bg-Desktop-Light dark:lg:bg-Desktop-Dark absolute">
      <div className="flex justify-between lg:w-[30%] mx-auto h-10 w-4/5  lg:mt-14  mt-10">
        <span className="font-josefin text-white text-3xl tracking-[8px] ">TODO</span>
        <ButtonMode />
      </div>
    </div>
  );
}

export default App;
