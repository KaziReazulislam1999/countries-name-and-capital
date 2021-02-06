fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => displayCountries(data));

const displayCountries = (countries) => {
  const countryMainDiv = document.getElementById("countries");

  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.className = "country";

    const countryInfo = `
   <h3 class="country-name">${country.name}</h3>
 <p class="country-capital">${country.capital}</p>
 <button onclick="displayCountryDetailsBtn('${country.name}')"> Show Details </button>
  `;
    countryDiv.innerHTML = countryInfo;
    countryMainDiv.appendChild(countryDiv);
  });
};

const displayCountryDetailsBtn = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}
  `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderCountryInfo(data[0]));
};

const renderCountryInfo = (country) => {
  const countryDiv = document.getElementById("countryDetails");
  countryDiv.innerHTML = `
  <h1>Country Name : ${country.name}</h1>
  <p>Total Population : ${country.population}</p>
  <p>Area : ${country.area}</p>
  <img src="${country.flag}">
  `;
};

// for (let i = 0; i < countries.length; i++) {
//   const country = countries[i];

//   const countryDiv = document.createElement("div");
//   countryDiv.className = "country";

//   // //  countryDiv inner div
//   // const countryInnerDiv = document.createElement("population");
//   // const h6 = document.createElement("h6");
//   // h6.innerText = country.population;
//   // countryInnerDiv.appendChild(h6);

//   // countryDiv.appendChild(countryInnerDiv);

//   // const h3 = document.createElement("h3");
//   // const p = document.createElement("p");

//   // h3.innerText = country.name;
//   // p.innerText = country.capital;

//   // countryDiv.appendChild(h3);
//   // countryDiv.appendChild(p);

//   const countryInfo = `
//   <h3 class="country-name">${country.name}</h3>
//   <p class="country-capital">${country.capital}</p>
// `;
//   countryDiv.innerHTML = countryInfo;

//   countryMainDiv.appendChild(countryDiv);
// }
