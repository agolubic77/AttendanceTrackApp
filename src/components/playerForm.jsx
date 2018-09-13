import React from "react";

const PlayerForm = ({ match, history }) => {
  return (
    <div>
      <h1>Igrac {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/players")}
      >
        Save
      </button>
    </div>
  );
};

export default PlayerForm;
