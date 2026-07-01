let cities = [
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { name: "Chicago", lat: 41.8781, lon: -87.6298 },
  { name: "Houston", lat: 29.7633, lon: -95.3632 },
  { name: "Phoenix", lat: 33.4484, lon: -112.0739 },
  { name: "Philadelphia", lat: 39.9523, lon: -75.1631 },
  { name: "San Antonio", lat: 29.4241, lon: -98.4936 },
  { name: "San Diego", lat: 32.7157, lon: -117.1611 },
  { name: "Dallas", lat: 32.7767, lon: -96.7969 },
  { name: "San Jose", lat: 37.3382, lon: -121.8863 },
  { name: "Austin", lat: 30.2671, lon: -97.7437 },
  { name: "Jacksonville", lat: 30.3321, lon: -81.6557 },
  { name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { name: "Indianapolis", lat: 39.7684, lon: -86.158 },
  { name: "Columbus", lat: 39.9611, lon: -82.9988 },
  { name: "Fort Worth", lat: 32.7555, lon: -97.3308 },
  { name: "Charlotte", lat: 35.2269, lon: -80.8431 },
];

const cityList = document.querySelector("#city-dropdown-option");
const weatherTable = document.querySelector("#weatherTableBody");

function loadCityDropDownList() {
  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.innerText = "Select City";
  cityList.appendChild(defaultOption);

  for (const city of cities) {
    let option = document.createElement("option");
    option.value = city.name;
    option.innerText = city.name;
    cityList.appendChild(option);
  }
}
loadCityDropDownList();

// .then 
// function getLocationPoint(city) {
//   fetch(`https://api.weather.gov/points/${city.lat},${city.lon}`)
//    .then(response => response.json())
//    .then(point => fetch(point.properties.forecast))
//    .then(response => response.json())
//    .then(forecast => {
//       weatherTable.innerText = "";

//       let headerRow = weatherTable.insertRow();
      
//       let cell1 = headerRow.insertCell();
//       cell1.innerText = "Day";

//       let cell2 = headerRow.insertCell();
//       cell2.innerText = "Temperature";

//       let cell3 = headerRow.insertCell();
//       cell3.innerText = "Wind Speed"
      
//       let cell4 = headerRow.insertCell();
//       cell4.innerText = "Wind Direction"

//       let cell5 = headerRow.insertCell();
//       cell5.innerText = "Description";

//       forecast.properties.periods.forEach(buildTableRow);
//     });
// }

// async await method
async function getLocationPoint(city) {
  try {
    const response = await fetch(`https://api.weather.gov/points/${city.lat},${city.lon}`);
    const point = await response.json();
    const forecastResponse = await fetch(point.properties.forecast);
    const forecast = await forecastResponse.json();

    weatherTable.innerText = "";

    let headerRow = weatherTable.insertRow();
    
    let cell1 = headerRow.insertCell();
    cell1.innerText = "Day";

    let cell2 = headerRow.insertCell();
    cell2.innerText = "Temperature";

    let cell3 = headerRow.insertCell();
    cell3.innerText = "Wind Speed";
      
    let cell4 = headerRow.insertCell();
    cell4.innerText = "Wind Direction";

    let cell5 = headerRow.insertCell();
    cell5.innerText = "Description";

    forecast.properties.periods.forEach(buildTableRow);
  } catch (error) {
    console.error(error);
  }
}

function buildTableRow(period) {
  let row = weatherTable.insertRow();

  let cell1 = row.insertCell();
  cell1.innerText = period.name;

  let cell2 = row.insertCell();
  cell2.innerText = `${period.temperature} °F`;

  let cell3 = row.insertCell();
  cell3.innerText = `${period.windSpeed}`

  let cell4 = row.insertCell()
  cell4.innerText = `${period.windDirection}`

  let cell5 = row.insertCell();
  cell5.innerText = period.detailedForecast;

}

cityList.addEventListener("change", handleCityChanged);

function handleCityChanged(event) {
  const cityName = event.target.value;

  const selectedCity = cities.find(function (city) {
    return city.name == cityName;
  });
  getLocationPoint(selectedCity);
}