import profilePic from "./assets/image.png";

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="" />
            <h2 className="card-title">Otabek Madaminov</h2>
            <p className="card-text">
                I make YouTube videos and play video games
            </p>
        </div>
    );
}

export default Card;
