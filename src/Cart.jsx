function ShopingItem({ item, quantity, completed }) {
  return (
    <li className={completed || "text-red-600 font-bold list-decimal"}>
      {item} are {quantity}
    </li>
  );
}

export default ShopingItem;

// Data sample
// const data = [{item : "eggs", quantity : 12, completed : false},
//   {item : "Milk", quantity : 1, completed : true},
//   {item : "Chicken breasts", quantity : 4, completed : false},
//   {item : "Carrots", quantity : 6, completed : true}];
