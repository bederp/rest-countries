import { renderCountriesList } from "./dom-utils.js";

const API_URL = "https://restcountries.com/v3.1/all";

let countries;

fetch(API_URL)
  .then((res) => res.json())
  .then((countriesRaw) => {
    countries = countriesRaw.map((country) => {
      return {
        capital: country.capital && country.capital[0],
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagUrl: country.flags.svg,
      };
    });
    renderCountriesList(countries);
  });
