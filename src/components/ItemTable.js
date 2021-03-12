import React from 'react';

export default function ItemTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ФИО</th>
            <th>Данные СКУД</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Щипунов А В</td>
            <td>1989</td>
          </tr>
        </tbody>
      </table>
    </div> 
  );
}
