import { useState } from "react";
import "./App.css";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  const [countriesState, setCountriesState] = useState(countries);

  return (
    <div className="App">
      <Navbar />
      <h1>Wiki countries</h1>
      <CountriesList countriesState={countriesState} />
      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/:countryID"
              element={<CountryDetails countriesState={countriesState} />}
            />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
