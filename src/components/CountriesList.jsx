import React from 'react'
import { Link } from "react-router-dom";

function CountriesList({countriesState}) {
  return (
    <div>
        <div className="col-5" style={{"maxHeight" : "90vh", "overflow": "scroll"}}>
            <div className="list-group">
                {countriesState.map((country) => (
                    <li key={country.name.official} className="list-group-item list-group-item-action">
                        <Link to={country.alpha3Code} className="list-group-item list-group-item-action">{country.name.official}</Link>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='pic'></img>
                    </li>
                ))}
            </div>
          </div>
    </div>
  )
}

export default CountriesList