import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  return (
    <>
      <DoctorsTable employees={employees} />
      <ItemTable />
    </>
  );
};

export default App;
