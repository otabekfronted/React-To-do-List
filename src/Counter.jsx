import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const decrement = () => {
        setCount(count - 1);
    };
    const reset = () => {
        setCount(0);
    };
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div className="counter-container">
            <p className="counter-display">Count: {count}</p>
            <button
                className="counter-button"
                onClick={decrement}
                disabled={count <= 0}
            >
                Decrement
            </button>
            <button className="counter-button" onClick={reset}>
                Reset
            </button>
            <button className="counter-button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}

export default Counter;
