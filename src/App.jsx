import { useState } from "react";
import RandomPokemon from "./Pokemon";
import Gretting from "./Gretter";
import Die from "./Die";
import Picker from "./Picker";
import DoubleDie from "./DoubleDie";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Game from "./SlotGame";
import ShopingList from "./Shop";
import PropertiesList from "./PropertiesList";
import Clicker from "./Clicker";
import BasicForm from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";

const data = [
  { id: 1, item: "Eggs", quantity: 12, completed: false },
  { id: 2, item: "Milk", quantity: 1, completed: true },
  { id: 3, item: "Chicken wing", quantity: 4, completed: false },
  { id: 4, item: "Carrots", quantity: 6, completed: true },
];

export default function App() {
  return (
    <div className="mx-auto container bg-white border-1 m-8 p-4  rounded-xl ">
      {/* <Gretting person="Dwayne" time="Good Morning" />
      <Gretting person="John" time="Good Night" />
      <p className="font-bold uppercase">Numbers as props</p>
      <Die sides />
      <Die sides={20} />
      <Die sides={100} />
      <Picker values={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
      <Picker values={["John", "Link", "Kim", "Talent", "Olivier"]} />
      <DoubleDie />
      <Heading
        content="Azzify a web development company"
        dynamicStyles="blue-600 text-2xl uppercase"
      />
      <ColorList colors={["red", "green", "blue", "teal", "magenta"]} />
      <Game el1="✈" el2="✈" el3="✈" />
      <ShopingList items={data} />
      <PropertiesList />
      <Clicker />
      <BasicForm /> 
      <Counter/>
      <Toggler />*/}
      <ToggleCounter/>
    </div>
  );
}
