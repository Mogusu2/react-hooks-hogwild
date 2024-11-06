// src/App.js
import React, { useState } from 'react';
import HogList from './HoglList';
import FilterBar from './FilterBar';
import AddHogForm from './AddHogForm';
import porkersData from '../porkers_data';


function App() {
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [hogs, setHogs] = useState(porkersData);

  function addHog(hog) {
    setHogs([...hogs, hog]);
  }

  function hideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  return (
    <div className="App">
      <FilterBar setFilterGreased={setFilterGreased} setSortCriteria={setSortCriteria} />
      <AddHogForm addHog={addHog} />
      <HogList filterGreased={filterGreased} sortCriteria={sortCriteria} hiddenHogs={hiddenHogs} />
    </div>
  );
}

export default App;
