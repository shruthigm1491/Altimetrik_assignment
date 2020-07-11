import React from 'react';

const Planet = ({ planet }) => {
  const {
    name,
    climate,
    diameter,
    gravity,
    orbital_period,
    population,
  } = planet[0];
  return (
    <div>
      <div class='card' style={{ width: '18rem', marginTop: '10px' }}>
        <div class='card-body'>
          <p class='card-text'>Find the details of the palnet you search for</p>
          <ul class='list-group list-group-flush'>
            <li class='list-group-item'>Name : {name}</li>
            <li class='list-group-item'>Climate : {climate}</li>
            <li class='list-group-item'>Diameter :{diameter}</li>
            <li class='list-group-item'>Gravity :{gravity}</li>
            <li class='list-group-item'>Orbital Period : {orbital_period}</li>
            <li class='list-group-item'>Population :{population}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Planet;
