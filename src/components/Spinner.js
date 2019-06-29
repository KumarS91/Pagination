import React from "react";
import spinner from "./giphy.gif";

const Spinner = () => {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "180px", margin: " 40px auto", display: "block" }}
      />
    </React.Fragment>
  );
};

export default Spinner;
