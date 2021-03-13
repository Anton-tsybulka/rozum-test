import React from 'react';
import { Link } from 'react-router-dom';

const ItemTable = ({ worklog, id }) => {
    const renderItem = 
    worklog &&
    worklog.length !== 0 &&
    worklog.filter(({employee_id}) => employee_id == id)
            .map(({employee_id, from, to, id}) => {
                return(
                  <tr key={id}>
                    <td>{employee_id}</td>
                    <td>{from}</td>
                    <td>{to}</td>
                  </tr>
                )
              });

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
            <button style={{marginTop: '1em', marginLeft: '2em'}}><Link to='/' style={{textDecoration: 'none'}}>Назад</Link></button>
        </div> 
    );
}

export default ItemTable;