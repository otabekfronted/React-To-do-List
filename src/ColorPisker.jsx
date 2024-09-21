import { useState } from "react";

function ColorPisker() {
    const [color, setColor] = useState("#FFFFFF");

    function selectColor(e) {
        setColor(e.target.value);
    }
    return (
        <>
            <div className="color-picker-container">
                <h1>Color Picker</h1>
                <div className="color-display " style={{ background: color }}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={selectColor} />
            </div>
        </>
    );
}

export default ColorPisker;
