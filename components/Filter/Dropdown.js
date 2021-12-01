import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Dropdown = ({ name, setEpisode, count }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setEpisode(e.target.value)}
        className="form-select"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(count).keys()].map((x, index) => {
          return (
            <option key={x+index} value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;