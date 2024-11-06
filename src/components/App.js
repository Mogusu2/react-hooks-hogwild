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
	const [showAddForm, setShowAddForm] = useState(false); // State to control form visibility
  
	// Function to add a new hog to the list
	function addHog(hog) {
	  setHogs([...hogs, hog]);
	}
  
	function hideHog(name) {
	  setHiddenHogs([...hiddenHogs, name]);
	}

	// Filter and sort hogs based on criteria
	const filteredHogs = hogs
    .filter((hog) => (filterGreased ? hog.greased : true))
    .sort((a, b) => {
      if (sortCriteria === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === 'weight') {
        return a.weight - b.weight;
      }
      return 0;
    });
  
	return (
	  <div className="App">
		{/* Add Hog Button and Form Toggle */}
		<button onClick={() => setShowAddForm(!showAddForm)} className="ui button primary">
		  {showAddForm ? "Hide Add Hog Form" : "Add Hog"}
		</button>
  
		{/* Conditionally render the AddHogForm based on showAddForm */}
		{showAddForm && <AddHogForm addHog={addHog} />}
  
		<FilterBar setFilterGreased={setFilterGreased} setSortCriteria={setSortCriteria} />
  
		{/* Render the HogList */}
		<HogList filterGreased={filterGreased} sortCriteria={sortCriteria} hiddenHogs={hiddenHogs} hogs={hogs} />
	  </div>
	);
  }
  
  export default App;