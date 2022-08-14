import React, { useState } from "react";

const Commands = ({ commands }) => {
  return (
    <div style={{ marginTop: "10px", border: "2px solid yellow" }}>
      commands
      {commands.map((command) => (
        <div>{command} </div>
      ))}
      <button>shopping</button>
    </div>
  );
};

export default Commands;
