import * as teamsAPI from "./fakeTeamService";

const players = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Golubic Aleksandar",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 6,
    yearOfBirth: "1982"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Golubic Niksa",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 5,
    yearOfBirth: "1987"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Gomzi Kristijan",
    team: { _id: "0001", name: "Juniori" },
    practicesAttended: 8,
    yearOfBirth: "2002"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Zaspan Boris",
    team: { _id: "0002", name: "Kadeti" },
    practicesAttended: 7,
    yearOfBirth: "2004"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Radek Danijel",
    team: { _id: "0002", name: "Kadeti" },
    practicesAttended: 7,
    yearOfBirth: "2003"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Podvezanec Danijel",
    team: { _id: "0002", name: "Kadeti" },
    practicesAttended: 7,
    yearOfBirth: "2005"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Capek Nikola",
    team: { _id: "0001", name: "Juniori" },
    practicesAttended: 7,
    yearOfBirth: "2001"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Markovic Goran",
    team: { _id: "0001", name: "Juniori" },
    practicesAttended: 4,
    yearOfBirth: "2000"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Franjic Davorin",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 9,
    yearOfBirth: "1980"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Vugrinec Davor",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 9,
    yearOfBirth: "1979"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    name: "Levacic Neven",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 7,
    yearOfBirth: "1985"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    name: "Novak Nikola",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 7,
    yearOfBirth: "1983"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471827",
    name: "Skoda Luka",
    team: { _id: "0000", name: "Seniori" },
    practicesAttended: 6,
    yearOfBirth: "1999"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    name: "Ostoja Davor",
    team: { _id: "0003", name: "Mladi kadeti" },
    practicesAttended: 8,
    yearOfBirth: "2005"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471829",
    name: "Dolovski Robert",
    team: { _id: "0003", name: "Mladi kadeti" },
    practicesAttended: 10,
    yearOfBirth: "2006"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471830",
    name: "Vurusic Vedran",
    team: { _id: "0003", name: "Mladi kadeti" },
    practicesAttended: 6,
    yearOfBirth: "2008"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471831",
    name: "Golubic Matija",
    team: { _id: "0003", name: "Mladi kadeti" },
    practicesAttended: 8,
    yearOfBirth: "2006"
  }
];

export function getPlayers() {
  return players;
}

export function getPlayer(id) {
  return players.find(p => p._id === id);
}

export function savePlayer(player) {
  let playerInDb = players.find(p => p._id === player._id) || {};
  playerInDb.name = player.name;
  playerInDb.team = teamsAPI.teams.find(t => t._id === player.teamId);
  playerInDb.practicesAttended = player.practicesAttended;
  playerInDb.yearOfBirth = player.yearOfBirth;

  if (!playerInDb._id) {
    playerInDb._id = Date.now().toString();
    players.push(playerInDb);
  }

  return playerInDb;
}

export function deletePlayer(id) {
  let playerInDb = players.find(p => p._id === id);
  players.splice(players.indexOf(playerInDb), 1);
  return playerInDb;
}
