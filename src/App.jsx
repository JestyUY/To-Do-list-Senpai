// import { useState } from 'react'

// import { useEffect, useState } from 'react'
import Input from "./input/input";
import "./App.css";
import NavBar from "./nav/nav";


function App() {
  
  return (
    <div className="transition-colors ease-in-out dark:bg-slate-900 bg-Mobile-Light w-screen h-screen bg-no-repeat bg-contain dark:bg-Mobile-Dark lg:bg-Desktop-Light dark:lg:bg-Desktop-Dark absolute ">
      <NavBar />
      <main className="lg:w-[30%] w-[90%]  items-center flex flex-col mx-auto mt-12">
        <Input />
      
      </main>
    </div>



  );
}

export default App;
