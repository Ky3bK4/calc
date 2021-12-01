import {useEffect} from "react";

export default function useCalc(quantity, cost, cb) {
  useEffect(()=>{
    let summary = 0
    const arrayItems = document.querySelectorAll('.rowTotalCost')
    arrayItems.forEach(item => {
      summary += Number(item.innerText);
    })
    cb(summary)
    // eslint-disable-next-line
  }, [quantity, cost]);
}