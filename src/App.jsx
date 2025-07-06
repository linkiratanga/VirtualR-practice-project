import { useState } from 'react'
import './index.css'
import StudentList from "./list"
import {Notification, End} from "./list"
import LoginForm from "./loginForm" 
import RandomPokemon from "./Pokemon"

function Greeting({ name, person }) {
  return (
    <div>
      <h1 className="text-red-400 uppercase underline font-semibold">
        Hello, {name} !
      </h1>
      <p className="text-3xl" >{person} welcome Back</p>{" "}
    </div>
  );
}

export default function App() {
  return ( <div className="mx-auto container bg-white border-1 p-2 my-12 w-6/12" > 
      <Greeting name="fam" person="Link" />
      <StudentList user="Aziza Mantash"/>      
      <StudentList user="Harriet"/>      
      <Notification/>
      <End/>
      <LoginForm/>
      <RandomPokemon/>
      </div>
    
  );
}

