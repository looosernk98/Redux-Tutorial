import React, {useEffect, useState} from 'react';
import { fetchData } from './redux/thunks/user-thunks';
import {useDispatch, useSelector} from 'react-redux'


function App() {

  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state) => state.users)
  console.log('data, isLoading, error: ', data, isLoading, error);

  useEffect(() => {
    dispatch(fetchData()) // No-1, it will go in thunk file
  }, [])

  return (
    <div>
       {/* No-5  // No-9*/}
        {!isLoading? data?.map((user) => <h1>{user.name}</h1>) : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
