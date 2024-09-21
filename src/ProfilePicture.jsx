function ProfilePicture() {
    const imageUrl = "./src/assets/image.png";

    const handeleClick = (e) => (e.target.style.display = "none");

    return (
        <img
            onClick={(e) => handeleClick(e)}
            src={imageUrl}
            style={{
                maxWidth: "60%",
                height: "200px",
            }}
            alt="Profile"
        />
    );
}

export default ProfilePicture;
