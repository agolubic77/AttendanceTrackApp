import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PlayersTable from "./playersTable";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getPlayers } from "../services/fakePlayerService";
import { getTeams } from "../services/fakeTeamService";

class Players extends Component {
  state = {
    players: [],
    teams: [],
    currentPage: 1,
    pageSize: 6,
    searchQuery: "",
    selectedTeam: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const teams = [{ _id: "", name: "All Teams" }, ...getTeams()];

    this.setState({ players: getPlayers(), teams });
  }

  handleDelete = player => {
    const players = this.state.players.filter(p => p._id !== player._id);
    this.setState({ players });
  };

  handleIncrease = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    player[index] = { ...player };
    players[index].practicesAttended++;
    this.setState({ players });
  };

  handleDecrease = player => {
    const players = [...this.state.players];
    const index = players.indexOf(player);
    player[index] = { ...player };
    players[index].practicesAttended--;
    this.setState({ players });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleTeamSelect = team => {
    this.setState({ selectedTeam: team, currentPage: 1, searchQuery: "" });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedTeam: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedTeam,
      searchQuery,
      players: allPlayers
    } = this.state;

    let filtered = allPlayers;
    if (searchQuery)
      filtered = allPlayers.filter(p =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedTeam && selectedTeam._id)
      filtered = allPlayers.filter(p => p.team._id === selectedTeam._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const players = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: players };
  };

  render() {
    const { length: count } = this.state.players;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    if (count === 0) return <p>Nema igraca</p>;

    const { totalCount, data: players } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.teams}
            selectedItem={this.state.selectedTeam}
            onItemSelect={this.handleTeamSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/players/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            Novi igrac
          </Link>
          <p>Na popisu je {totalCount} igraca.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <PlayersTable
            players={players}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Players;
