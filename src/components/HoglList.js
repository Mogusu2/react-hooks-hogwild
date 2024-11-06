// src/components/HogList.js
import React, { useState } from 'react';
import HogTile from './HogTile';
import porkersData from '../porkers_data';

function HogList({ filterGreased, sortCriteria, hiddenHogs }) {
  const [hogs, setHogs] = useState(porkersData);

  const filteredHogs = hogs
    .filter(hog => !hiddenHogs.includes(hog.name))
    .filter(hog => !filterGreased || hog.greased)
    .sort((a, b) => sortCriteria === 'weight' ? a.weight - b.weight : a.name.localeCompare(b.name));

  return (
    <div className="ui grid container">
      {filteredHogs.map(hog => (
        <HogTile key={hog.name} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
