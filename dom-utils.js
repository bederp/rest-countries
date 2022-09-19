export const renderCountriesList = (countries) => {
  const main = document.querySelector("#root");
  const list = document.createElement("ul");

  countries.forEach((country) => {
    list.appendChild(createCountryListItem(country));
  });

  console.log(main);
  main.appendChild(list);
  console.log(countries);
};

const createCountryListItem = (country) => {
  const countryElement = document.createElement("li");

  countryElement.appendChild(createFlagElement(country.flagUrl))
  countryElement.appendChild(createCountryNameElement(country.name));

  countryElement.appendChild(createInfoElement("Population:", country.population))
  countryElement.appendChild(createInfoElement("Region:", country.region))
  countryElement.appendChild(createInfoElement("Capital:", country.population))

  return countryElement;
};

const createInfoElement = (name, value) => {
  const infoElement = document.createElement("div");

  const labelElement = document.createElement("strong");
  labelElement.innerText = name

  const valueElement = document.createElement("span");
  valueElement.innerText = value

  infoElement.appendChild(labelElement)
  infoElement.appendChild(valueElement)

  return infoElement
}

const createCountryNameElement = countryName => {
  const countryNameElement = document.createElement("span");
  countryNameElement.innerText = countryName;
  return countryNameElement;
}

const createFlagElement = flagUrl => {
  const imgContainer = document.createElement("div")
  const imgElement = document.createElement("img")
  imgElement.src = flagUrl
  imgElement.width = 200
  imgContainer.appendChild(imgElement)
  return imgContainer
}