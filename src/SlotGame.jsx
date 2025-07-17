export default function Game({el1, el2, el3}){
    return <div>
        <p className="text-2xl font-bold">{el1} {el2} {el3} </p>
        {el1 === el2 && el2 === el3 ? <p className="text-green-600">You win</p> : <p className="text-red-600">You lose</p>}
        {el1 === el2 && el2 === el3 ? <p>Congrats</p> : null}
    </div>
}