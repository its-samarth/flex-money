import React, { useState } from 'react';
import form from './form.css'; // Adjust the path based on your file structure

const YogaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission and API call here
    console.log('Form submitted:', formData);
  };

  const toggleDarkMode = () => {
    // Add logic to toggle dark/light mode
    console.log('Toggle Dark Mode');
  };

  return (
    <div className="yoga-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Select Batch:
          <select
            name="selectedBatch"
            value={formData.selectedBatch}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose a Batch</option>
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="additional-features">
        <label>
          Dark Mode:
          <input type="checkbox" onChange={toggleDarkMode} />
        </label>
        {/* Add other features as needed */}
      </div>
    </div>
  );
};

export default YogaForm;
