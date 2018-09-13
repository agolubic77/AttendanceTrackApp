export const teams = [
  { _id: "0000", name: "Seniori" },
  { _id: "0001", name: "Juniori" },
  { _id: "0002", name: "Kadeti" },
  { _id: "0003", name: "Mladi kadeti" }
];

export function getTeams() {
  return teams.filter(t => t);
}
