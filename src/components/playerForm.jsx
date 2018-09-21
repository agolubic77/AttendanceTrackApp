import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getPlayer, savePlayer } from "../services/fakePlayerService";
import { getTeams } from "../services/fakeTeamService";

class PlayerForm extends Form {
  state = {
    data: {
      name: "",
      teamId: "",
      practicesAttended: "",
      yearOfBirth: ""
    },
    teams: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required(),
    teamId: Joi.string().required(),
    practicesAttended: Joi.number()
      .required()
      .min(0),
    yearOfBirth: Joi.number()
      .min(1960)
      .required()
  };

  componentDidMount() {
    const teams = getTeams();
    this.setState({ teams });

    const playerId = this.props.match.params.id;
    if (playerId === "new") return;

    const player = getPlayer(playerId);
    //if (!player) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(player) });
  }

  mapToViewModel(player) {
    return {
      _id: player._id,
      name: player.name,
      teamId: player.team._id,
      practicesAttended: player.practicesAttended,
      yearOfBirth: player.yearOfBirth
    };
  }

  doSubmit = () => {
    savePlayer(this.state.data);
    this.props.history.push("/players");
  };

  render() {
    return (
      <div>
        <h1>Novi igrac</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Ime")}
          {this.renderSelect("teamId", "Momčad", this.state.teams)}
          {this.renderInput("practicesAttended", "Broj treninga", "number")}
          {this.renderInput("yearOfBirth", "Godina rodenja")}
          {this.renderButton("Spremi")}
        </form>
      </div>
    );
  }
}

export default PlayerForm;
