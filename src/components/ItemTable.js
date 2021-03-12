import React from 'react';
import { Link } from 'react-router-dom';

const ItemTable = ({ filterById }) => {
  const renderItem = filterById.map(({employee_id, from, to, id}) => {
    return(
      <tr kye={id}>
        <td>{employee_id}</td>
        <td>{from}</td>
        <td>{to}</td>
      </tr>
    )
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Прибыл</th>
            <th>Убыл</th>
          </tr>
        </thead>
        <tbody>
          {renderItem}
        </tbody>
      </table>
      <button><Link to='/'>Назад</Link></button>
    </div> 
  );
}

export default ItemTable;