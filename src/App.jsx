import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting({ name, person }) {
  return (
    <div>
      <h1 className="text-blue-400">
        Hello, {name} and {person}
      </h1>
      <p className="text-3xl" >{person} welcome Back</p>{" "}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Greeting name="fam" person="Link" />
    </div>
  );
}

