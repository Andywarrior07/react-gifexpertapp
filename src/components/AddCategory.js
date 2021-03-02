import React, { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length < 2) {
      return;
    }
    setCategories(categories => [e.target[0].value, ...categories]);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Buscar un gif'
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};
