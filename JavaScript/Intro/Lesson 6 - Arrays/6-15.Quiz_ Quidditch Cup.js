var team = [
  "Oliver Wood", "Angelina Johnson",
  "Katie Bell", "Alicia Spinnet",
  "George Weasley", "Fred Weasley",
  "Harry Potter"
];

function hasEnoughPlayers(amountOfPlayers) {
  var players = Boolean;
  players = amountOfPlayers.length === 7 ? true : false;
  return players;
}

console.log(hasEnoughPlayers(team));
