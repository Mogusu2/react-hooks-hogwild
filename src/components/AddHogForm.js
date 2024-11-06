// src/components/AddHogForm.js
import React, { useState } from 'react';

function AddHogForm({ addHog }) {
  const [newHog, setNewHog] = useState({
    name: '',
    specialty: '',
    weight: 0,
    greased: false,
    image: '',
    highestMedal: ''
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setNewHog({
      ...newHog,
      [name]: type === 'checkbox' ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addHog(newHog);
    setNewHog({ name: '', specialty: '', weight: 0, greased: false, image: '', highestMedal: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs for each hog property */}
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
