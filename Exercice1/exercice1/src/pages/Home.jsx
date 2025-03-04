import { useEffect, useState } from "react";
function ColorInput({ value, setter, placeholder }) {
  return (
    <input
      type="number"
      min="0"
      max="255"
      value={value}
      onChange={(e) => setter(Number(e.target.value))}
      placeholder={placeholder}
    />
  );
}

function RandomizeColors({ setRed, setGreen, setBlue }) {
  const random = () => {
    const newRed = Math.floor(Math.random() * 256);
    const newGreen = Math.floor(Math.random() * 256);
    const newBlue = Math.floor(Math.random() * 256);

    setRed(newRed);
    setGreen(newGreen);
    setBlue(newBlue);
  };

  return <button onClick={random}>Random</button>;
}

function Home() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  useEffect(() => {
    if (red === green && green === blue && red,green,blue !== 0) {
      alert("Les trois valeurs sont identiques !");
    }
  }, [red, green, blue]);
  return (
    <div
      style={{
        backgroundColor: `rgb(${red},${green},${blue})`,
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ColorInput value={red} setter={setRed} placeholder="Rouge" />
      <ColorInput value={green} setter={setGreen} placeholder="Vert" />
      <ColorInput value={blue} setter={setBlue} placeholder="Bleu" />

      <RandomizeColors setRed={setRed} setGreen={setGreen} setBlue={setBlue} />
    </div>
  );
}

export default Home;
