import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetails({ countriesState }) {
  const { countryID } = useParams();
  const [countryDetail, setCountryDetail] = useState('');

  useEffect(() => {
    const oneCountry = countriesState.filter((country) => {
        if (country.alpha3Code === countryID) {
            return country
        }
    })
    setCountryDetail(oneCountry[0])
    console.log(oneCountry[0]);
  }, [countryID]);

  return (
    <div>
      <div className="col-7">
        <h1>{countryDetail && countryDetail.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{"width" : "30%"}}>Capital</td>
              <td>{countryDetail && countryDetail.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail && countryDetail.area} km
                <sup>2</sup>
              </td>
            </tr>
{/*             <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <a href="/AND">Andorra</a>
                  </li>
                  <li>
                    <a href="/BEL">Belgium</a>
                  </li>
                  <li>
                    <a href="/DEU">Germany</a>
                  </li>
                  <li>
                    <a href="/ITA">Italy</a>
                  </li>
                  <li>
                    <a href="/LUX">Luxembourg</a>
                  </li>
                  <li>
                    <a href="/MCO">Monaco</a>
                  </li>
                  <li>
                    <a href="/ESP">Spain</a>
                  </li>
                  <li>
                    <a href="/CHE">Switzerland</a>
                  </li>
                </ul>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
