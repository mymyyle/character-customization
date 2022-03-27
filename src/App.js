import "./App.css";
import { useState, useEffect } from "react";
import ListOfPart from "./ListOfPart";
import Randomize from "./Randomize";

const parts = [
  { id: `body`, count: 17, url: "character/body" },
  { id: `eyes`, count: 24, url: "character/eyes" },
  { id: "hair", count: 73, url: "character/hair" },
  { id: "mouth", count: 24, url: "character/mouth" },
  { id: "eyebrows", count: 15, url: "character/eyebrows" },
  { id: "glasses", count: 17, url: "character/accessories/glasses" },
  { id: "hats", count: 29, url: "character/accessories/hats" },
  { id: "cloth1", count: 5, url: "character/clothes/layer_1" },
  { id: "cloth2", count: 5, url: "character/clothes/layer_2" },
  { id: "cloth3", count: 9, url: "character/clothes/layer_3" },
];

const App = () => {
  const [character, setCharacter] = useState(() => {
    const lastValue = window.localStorage.getItem("character");
    return (
      JSON.parse(lastValue) || {
        body: "character/body/1.png",
        eyes: "character/eyes/1.png",
        hair: "character/hair/1.png",
        mouth: "character/mouth/1.png",
        eyebrows: "character/eyebrows/1.png",
        glasses: "character/accessories/glasses/1.png",
        hats: "character/accessories/hats/1.png",
        cloth1: "character/clothes/layer_1/1.png",
        cloth2: "character/clothes/layer_2/1.png",
        cloth3: "character/clothes/layer_3/1.png",
      }
    );
  });

  const {
    body,
    eyes,
    hair,
    mouth,
    eyebrows,
    glasses,
    hats,
    cloth1,
    cloth2,
    cloth3,
  } = character;
  useEffect(() => {
    console.log("run side effect");
    window.localStorage.setItem("character", JSON.stringify(character));
    //console.log(JSON.parse(a));
  }, [character]);

  return (
    <div className="App">
      <div className="page">
        <h1 className="heading">
          CHARACTER <p className="s-text"> CUSTOMIZATION </p>
        </h1>
        <main>
          <div className="container-ava">
            <div className="ava">
              <img id="body" src={body} alt="body" />
              <img id="noses" src="character/noses/1.png" alt="noses" />
              <img id="eyes" src={eyes} alt="eyes" />
              <img id="hair" src={hair} alt="hair" />
              <img id="mouth" src={mouth} alt="mouth" />
              <img id="eyebrows" src={eyebrows} alt="eyebrows" />
              <img id="glasses" src={glasses} alt="glasses" />
              <img id="hats" src={hats} alt="hats" />
              <img id="cloth1" src={cloth1} alt="cloth1" />
              <img id="cloth2" src={cloth2} alt="cloth2" />
              <img id="cloth3" src={cloth3} alt="cloth3" />
            </div>
            <Randomize parts={parts} setCharacter={setCharacter} />
            {/* <button className="btn" onClick={HandleRandom}>RANDOMIZE</button> */}
          </div>
          <div></div>
          <div className="lists-of-parts">
            <ListOfPart
              parts={parts}
              character={character}
              setCharacter={setCharacter}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
