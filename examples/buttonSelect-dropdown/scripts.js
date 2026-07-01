"use strict"
const teams = [
{code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
{code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
{code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
{code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
];

const teamsList = document.getElementById("teamsList");
const messageParagraph = document.getElementById("messageParagraph");
const displayTeamButton = document.getElementById("displayTeamButton");

function init() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.innerText = team.name;
    teamsList.appendChild(option);
  }
}

function teamDetails() {
  const selectedTeamCode = teamsList.value;
  for (const team of teams) {
    if (team.code === selectedTeamCode) {
      const details = `The ${team.name} (${team.code}) plays in ${team.plays}`;
      messageParagraph.innerText = details;
    }
  }
}

displayTeamButton.onclick = teamDetails;
window.onload = init;
