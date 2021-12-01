import React, {useState} from 'react'
import './App.css';
import TableRow from './components/TableRow'
function App() {
  const [summary, setSummary] = useState(0);

  return (
    <table cellSpacing={0}>
      <tr className="header">
        <th>Название товара</th>
        <th>Количество</th>
        <th>Стоимость 1 ед.</th>
        <th>Общая стоимость</th>
      </tr>
     <TableRow title="Красный носок" sum={setSummary}/>
     <TableRow title="Синий носок" sum={setSummary}/>
     <TableRow title="Бесцветный носок" sum={setSummary}/>
     <tr className="summaryRow">
       <td colSpan={3}>Итоговая стоимость</td>
       <td>{summary}</td>
     </tr>
    </table>
  );
}

export default App;
