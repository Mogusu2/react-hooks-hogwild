// src/components/AddHogForm.js
import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  // Set up initial state for each form field
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    weight: 0,
    greased: false,
    image: '',
    highestMedal: ''
  });

  // Handle form changes for each input
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addHog(newHog); // Pass new hog data up to App component
    setNewHog({ name: '', specialty: '', weight: 0, greased: false, image: '', highestMedal: '' }); // Reset form
  }

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newHog.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={newHog.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          value={newHog.weight}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Greased</label>
        <input
          type="checkbox"
          name="greased"
          checked={newHog.greased}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={newHog.image}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>Highest Medal</label>
        <input
          type="text"
          name="highestMedal"
          value={newHog.highestMedal}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="ui button">
        Add Hog
      </button>
    </form>
  );
}

export default AddHogForm;
