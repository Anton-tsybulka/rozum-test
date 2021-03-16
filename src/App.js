import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import DoctorsTable from './components/DoctorsTable';
import ItemTable from './components/ItemTable';
import { getWorkersThunk, getTimeThunk } from './redux/thunk/workersThunk';
import './App.css'

const App = () => {
  const { employees, worklog, loading } = useSelector((state) => state.workers);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getWorkersThunk());
    dispatch(getTimeThunk());
  },[dispatch]);
 
  return (
    loading ? 
    <p style={{textAlign: 'center', marginTop: '20em'}}>loading...</p> :
    <>
      <Route path='/' component={() => <DoctorsTable employees={employees} />} exact/>
      <Route path='/:id'
        render={({match}) => {
          const {id} = match.params;
        return <ItemTable worklog={worklog} id={id} />
        }} />
    </>
  );
};

export default App;
