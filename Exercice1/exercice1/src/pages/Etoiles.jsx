import { useState } from "react";

function InputEtoiles({ value, setter, placeholder }) {
  return (
    <input
      type="number"
      min="0"
      max="5"
      value={value}
      onChange={(e) => setter(Number(e.target.value))}
      placeholder={placeholder}
    />
  );
}

function Etoile({ color }) {
    return <i className={`star ${color}`}></i>;
}

function EtoilesDisplay(index) {
 
  const etoileRouge = <Etoile color="rouge" />;
  const etoileNoir = <Etoile color="noir" />;
  const etoileOrange = <Etoile color="orange" />;
  const etoileVerte = <Etoile color="verte" />;
  switch (index) {
    case 0:
      return <p>Aucune Note</p>;
    case 1:
      return [etoileRouge, etoileNoir, etoileNoir, etoileNoir, etoileNoir];
    case 2:
      return [etoileRouge, etoileRouge, etoileNoir, etoileNoir, etoileNoir];
    case 3:
      return [etoileOrange, etoileOrange, etoileOrange, etoileNoir, etoileNoir];
    case 4:
      return [etoileVerte, etoileVerte, etoileVerte, etoileVerte, etoileNoir];
    case 5:
      return [etoileVerte, etoileVerte, etoileVerte, etoileVerte, etoileVerte];
  }
}

function Etoiles() {
  const [etoiles, setetoile] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <InputEtoiles value={etoiles} setter={setetoile} placeholder="etoile" />
      <p>{EtoilesDisplay(etoiles)}</p>
    </div>
  );
}

export default Etoiles;