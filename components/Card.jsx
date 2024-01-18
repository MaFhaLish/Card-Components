import profilePic from "../assets/myProfilePic.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="my Profile picture" />
      <h2 className="card-title">Mohammed Alfakir</h2>
      <p className="card-desc">Front-end web Developer.</p>
    </div>
  );
}

export default Card;
