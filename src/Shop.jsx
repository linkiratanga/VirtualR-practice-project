import ShopingItem from "./Cart";
export default function ShopingList({ items }) {
  return (
    <ul>
      {items.map((cur) => (
        <ShopingItem
          key={cur.id}
          item={cur.item}
          quantity={cur.quantity}
          completed={cur.completed}
        />
      ))}
    </ul>
  );
}

// const data = [{item : "eggs", quantity : 12, completed : false},
//   {item : "Milk", quantity : 1, completed : true},
//   {item : "Chicken breasts", quantity : 4, completed : false},
//   {item : "Carrots", quantity : 6, completed : true}];
