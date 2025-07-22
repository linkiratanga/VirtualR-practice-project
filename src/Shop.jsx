export default function ShopingList({items}){
    return (
        <ul> 
            {items.map(cur => <li key={cur.id} className={!cur.completed && "text-red-600 font-bold"} >{cur.item} : {cur.quantity}</li> )}
        </ul>
    )
}

// const data = [{item : "eggs", quantity : 12, completed : false},
//   {item : "Milk", quantity : 1, completed : true},
//   {item : "Chicken breasts", quantity : 4, completed : false},
//   {item : "Carrots", quantity : 6, completed : true}];
