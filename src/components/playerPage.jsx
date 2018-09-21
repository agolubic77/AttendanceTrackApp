import React from "react";
import { getPlayers } from "../services/fakePlayerService";

const PlayerPage = ({ match, history }) => {
  const players = getPlayers();
  const player = players.find(p => p._id === match.params.id);
  // const playerProba = players.filter(p => p._id === match.params.id);
  //console.log(playerProba[0].name);

  return (
    <div className="row">
      <div className="col-6">
        <h1>{player.name}</h1>
        <hr />
        <br />
        <p>Momčad: {player.team.name}</p>
        <p>Rođen: {player.yearOfBirth} godine</p>
        <p>Prisustvovao na {player.practicesAttended} treninga</p>
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => history.push("/players")}
        >
          Save
        </button>
      </div>
      <div className="col-6">
        <br />
        <p>Kontakt:</p>
        <p>Roditelji:</p>
        <p>Adresa:</p>
      </div>
    </div>
  );
};

export default PlayerPage;
