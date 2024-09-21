import PropTypes from "prop-types";
function UserGretting(props) {
    // if (props.isLoggedIn) {
    //     return <h2>Welcome to website: {props.username}</h2>;
    // } else {
    //     return <h2>Please login to continue</h2>;
    // }
    const welcomeMessage = (
        <h2 className="welcome-message">Welcome {props.username}</h2>
    );
    const loginPrompt = (
        <h2 className="login-prompt">Please Login to continue</h2>
    );

    return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGretting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

UserGretting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
};

export default UserGretting;
