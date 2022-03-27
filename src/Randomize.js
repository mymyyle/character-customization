import React from "react";

const randomIndex = (count) => Math.floor(Math.random() * count + 1);

const handleRandom = (parts, setCharacter) => {
  setCharacter(
    parts.reduce((character, { id, count, url }) => {
      const randomNumber = randomIndex(count);
      character[id] = `${url}/${randomNumber}.png`;
      return character;
    }, {})
  );
};

const Randomize = ({ parts, setCharacter }) => {
  return (
    <button className="btn" onClick={() => handleRandom(parts, setCharacter)}>
      RANDOMIZE
    </button>
  );
};

export default Randomize;
