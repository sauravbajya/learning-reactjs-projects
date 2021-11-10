import React, { useState } from 'react';
import { data } from './data';

const Card = () => {
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <>
      <h3>{people.length} Birthdays Today</h3>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt='User' />
            <div>
              <h4>{name}</h4>
              <h5>{age} years</h5>
            </div>
          </article>
        );
      })}
      <button type='button' className='btn' onClick={clearAll}>
        Clear All
      </button>
    </>
  );
};

export default Card;
