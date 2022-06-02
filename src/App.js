import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {loadCuisine} from './actions/cuisineAction';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCuisine());
  });
  return (
    <div className="App">
      <h1>Chow Better</h1>
    </div>
  );
}

export default App;
