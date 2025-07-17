// import "./index.jss"


// Create elements by conditions using tenary operator | with a place for an altenative 
// export default function DoubleDie(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return <>{num1 === num2 ? <p>You are a Champion</p> : null }</>
    
// }

// Create elements by conditions using short circuiting | withour an alternative
// export default function DoubleDie(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return <>{num1 === num2 && <p>You are a Champion</p> }</>
    
// }

// Dynamic component styles 🚫🚫🚫 TailwindCSS
export default function DoubleDie(){
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    return <div> <p className={num1 === num2? 'text-2xl text-green-600 uppercase' : null}>Results</p>
        {num1 === num2 && <p>You are a Champion</p> }
        </div>} 

// Setting inner content by conditions
// export default function DoubleDie(){
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return <p>You {num1 === num2 ? 'Win' : "Lose" }</p>