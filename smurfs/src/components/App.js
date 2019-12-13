import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';

import { fetchSmurfData } from '../actions';

import './App.css';

function App({ fetchSmurfData }) {
  useEffect(() => {
    fetchSmurfData();
  }, []);

  return (
    <div className='App'>
      <h1>Smurfs! 2.0 W/Redux</h1>
      <SmurfList />
    </div>
  );
}

export default connect(state => state, { fetchSmurfData })(App);
