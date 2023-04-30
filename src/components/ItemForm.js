import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName,setItemName] = useState('')
  const [itemCategory,setItemCategory] = useState('')

  function handleName(e){
    setItemName(e.target.value)
  }
  function handleCategory(e){
    setItemCategory(e.target.value)
  }
  console.log(itemCategory)
   function handleSubmit(e){
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name"value={itemName} onChange={handleName} />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
