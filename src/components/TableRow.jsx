import React, {useState} from 'react';
import useCalc from "../hooks/useCalc";

const TableRow = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);

  useCalc(quantity, cost, props.sum);


  const changeQuantity = (e) => {
    const val = Number(e.target.value)
    if(typeof val === 'number' ){
      setQuantity(e.target.value)
    }
  }

  const changeCost = (e) => {
    const val = Number(e.target.value)
    if(typeof val === 'number' ){
      setCost(e.target.value)
    }
  }

  let totalCost = (quantity * cost).toFixed(2) || 0;

  return (
    <tr>
      <td>{props.title}</td>
      <td>
        <input type="number"
               value={quantity}
               onChange={changeQuantity}/>
      </td>
      <td>
        <input type="number"
               value={cost}
               onChange={changeCost}/>
      </td>
      <td className="rowTotalCost">
        {totalCost}
      </td>
    </tr>
  );
};

export default TableRow;