import React from "react";

const PartList = ({ count, url, id, character, setCharacter }) => {
  const images = [];
  const handleClick = (link) => {
    setCharacter((prevCharacter) => ({ ...prevCharacter, [id]: link }));
  };

  const objectValues = Object.values(character);
  for (let i = 1; i <= count; i++) {
    const link = `${url}/${i}.png`;
    images.push(
      <img
        key={link}
        src={link}
        alt="img"
        className={objectValues.includes(link) ? "current" : ""}
        onClick={() => handleClick(link)}
      />
    );
  }
  return (
    <>
      <p className="title">{id}</p>
      <div className="part">{images}</div>
    </>
  );
};

const ListOfPart = ({ parts, character, setCharacter }) => {
  return parts.map((task) => (
    <PartList
      key={task.id}
      {...task}
      character={character}
      setCharacter={setCharacter}
    />
  ));
};

export default ListOfPart;
