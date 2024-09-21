function Button() {
    // const handeleClick = () => console.log("OUCH!");
    // const handeleClick2 = (name) => console.log(`${name} stop clickning me`);

    const handeleClick = (e) => {
        e.target.textContent = "OUCH🪼";
    };
    return (
        <>
            <button onDoubleClick={(e) => handeleClick(e)}>Click Me 😊</button>
        </>
    );
}

export default Button;
