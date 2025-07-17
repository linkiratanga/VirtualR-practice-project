import { useState } from 'react'
// import './index.css'
// import RandomPokemon from "./Pokemon"
import Gretting from "./Gretter"
import Die from "./Die"
import Picker from "./Picker"
import DoubleDie from "./DoubleDie"
import Heading from "./Heading"
import ColorList from "./ColorList"
import Game from "./SlotGame"

export default function App() {
  return ( <div className="mx-auto container bg-white border-1 p-8 my-12 w-6/12 rounded-xl " > 
     {/* <Gretting person = "Dwayne" time = "Good Morning"/>
      <Gretting person = "John" time = "Good Night" /> */}
      <p className='font-bold uppercase'>Numbers as props</p>
      <Die sides/> {/* default props didn't work in Die.jsx 🚫🚫🚫 */}
      <Die sides ={20} />
      <Die sides = {100}/>
      <Picker values = {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/> {/* stuff in curly braces means it pure javascript or just js expression ✅✅✅ */}
      <Picker values ={["John", "Link", "Kim", "Talent", "Olivier"]}/> 
      <DoubleDie/>
      <Heading content = "Azzify a web development company" dynamicStyles = "blue-600 text-2xl uppercase"/>
      <ColorList colors = {["red", "green", "blue", "teal", "magenta"]}/>
      <Game el1 = "✈" el2 = "✈" el3 = "✈"/>
      </div>
  );
}

