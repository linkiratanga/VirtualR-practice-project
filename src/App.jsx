import { useState } from 'react'
import './index.css'
// import RandomPokemon from "./Pokemon"
import Gretting from "./Gretter"
import Die from "./Die"
import Picker from "./Picker"

export default function App() {
  return ( <div className="mx-auto container bg-white border-1 p-2 my-12 w-6/12" > 
     {/* <Gretting person = "Dwayne" time = "Good Morning"/>
      <Gretting person = "John" time = "Good Night" /> */}
      <p className='font-bold uppercase'>Numbers as props</p>
      <Die sides/>
      <Die sides ={20} />
      <Die sides = {100}/>
      <Picker values = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/> {/* stuff in curly braces means it pure javascript ✅✅✅ */}
      <Picker values ={["John", "Link", "Kim", "Talent", "Olivier"]}/>      
      </div>
    
  );
}