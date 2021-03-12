import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import DoctorsTable from './components/DoctorsTable';
import ItemTable from './components/ItemTable';
import { getWorkers, getWorkTime } from './redux/actions/workersActions';
import './App.css'

const App = () => {
  const { employees, worklog } = useSelector((state) => state.workers);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getWorkers());
    dispatch(getWorkTime());
  }, [dispatch]);

  const renderItemTable = worklog.map(({id}) => {
    const filterById = worklog.filter(({employee_id}) => employee_id === id)
    return (
      <Route path={`/${id}`} component={() => <ItemTable filterById={filterById} />} key={id} />
    )
  })
  return (
    <>
      <Route path='/' component={() => <DoctorsTable employees={employees} />} exact/>
      {renderItemTable}
    </>
  );
};

export default App;
