import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class PlayersTable extends Component {
  columns = [
    {
      path: "name",
      label: "Ime",
      content: player => (
        <Link to={`/players/${player._id}`}>{player.name}</Link>
      )
    },
    { path: "yearOfBirth", label: "Godiste" },
    { path: "team.name", label: "Momcad" },
    { path: "practicesAttended", label: "Broj treninga" },
    {
      key: "increase",
      content: player => (
        <button
          onClick={() => this.props.onIncrease(player)}
          className="btn btn-primary btn-sm"
        >
          Dodaj
        </button>
      )
    },
    {
      key: "decrease",
      content: player => (
        <button
          disabled={player.practicesAttended === 0 ? true : false}
          onClick={() => this.props.onDecrease(player)}
          className="btn btn-secondary btn-sm"
        >
          Smanji
        </button>
      )
    },

    {
      key: "delete",
      content: player => (
        <button
          onClick={() => this.props.onDelete(player)}
          className="btn btn-danger btn-sm"
        >
          Obrisi
        </button>
      )
    }
  ];

  render() {
    const { players, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={players}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default PlayersTable;
