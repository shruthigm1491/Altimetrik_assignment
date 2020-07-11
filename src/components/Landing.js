import React from 'react';

const Landing = () => {
  return (
    <div>
      <div class='jumbotron' style={{ height: '100vh' }}>
        <h1 class='display-4'>Assignment React</h1>
        <p class='lead'>
          Application includes Login feature and the search by planet name
          features.
        </p>
        <hr class='my-4' />
        <p>
          It is build using following:
          <ul>
            <li>React</li>
            <li>Redux for application state management</li>
            <li>Hooks used useState and useEffect</li>
            <li>
              API used
              <ul>
                <li>https://swapi.dev/api/people to get user info</li>
                <li>https://swapi.dev/api/planets to get all planets info</li>
                <li>
                  https://swapi.dev/api/planets?search="searchname" to get
                  single searched planet info info
                </li>
              </ul>
            </li>
            <li>
              Components
              <ul>
                <li>
                  Login : Provides user to login to the application by using
                  user name and password
                </li>
                <li>Navbar: Navigation among Landing,Login and Search</li>
                <li>
                  SearchPlanet: Includes Autocomplete search field to search on
                  planet name
                </li>
                <li>Planet: Searched planet details displayed here</li>
              </ul>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Landing;
