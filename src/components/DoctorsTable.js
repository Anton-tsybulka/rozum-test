import React from 'react';
import { birthChange } from '../helpers/helpers';

const DoctorsTable = ({ employees }) => {
  const renderItem = employees.map(({id, firstName, lastName, middleName, birthDate}) => {
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{lastName} {firstName} {middleName}</td>
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