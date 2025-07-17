export default function Die({sides=6}){ // Default props not working 🚫🚫🚫
    const randomRoll = Math.floor(Math.random() * sides) + 1;
    return <p> Dice roll : {randomRoll}</p>
}