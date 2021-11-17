import React from 'react';
import CityList from '../containers/city-list'
import ActiveCity from '../containers/active-city';
const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity/>
    </div>
  );
};

export default App;
