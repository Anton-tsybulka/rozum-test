import React from 'react';
import { Link } from 'react-router-dom';
import { birthChange } from '../helpers/helpers';

const DoctorsTable = ({ employees }) => {
  const renderItem = employees.map(({id, firstName, lastName, middleName, birthDate}) => {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <Link to={`${id}`}>{lastName} {firstName} {middleName}</Link>          
        </td>
        <td>{birthChange(birthDate)}</td>
      </tr>
    )
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Дата рождения</th>
          </tr>
        </thead>
        <tbody>
            {renderItem}
        </tbody>
      </table>
    </div>    
  );
};

export default DoctorsTable;