import { useState } from "react";

export default function ColorChanger() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const updateColor = (setter) => (event) => {
        setter(Number(event.target.value) || 0);
    };

    const randomizeColors = () => {
        const newRed = Math.floor(Math.random() * 256);
        const newGreen = Math.floor(Math.random() * 256);
        const newBlue = Math.floor(Math.random() * 256);

        setRed(newRed);
        setGreen(newGreen);
        setBlue(newBlue);

        if (newRed === newGreen && newGreen === newBlue) {
            alert("Les trois valeurs sont identiques !");
        }
    };

    return (
        <div style={{ backgroundColor: `rgb(${red},${green},${blue})`, height: "100vh", padding: "20px" }}>
            <input type="number" min="0" max="255" value={red} onChange={updateColor(setRed)} placeholder="Rouge" />
            <input type="number" min="0" max="255" value={green} onChange={updateColor(setGreen)} placeholder="Vert" />
            <input type="number" min="0" max="255" value={blue} onChange={updateColor(setBlue)} placeholder="Bleu" />
            <button onClick={randomizeColors}>Random</button>
        </div>
    );
}
