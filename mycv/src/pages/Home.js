import React from "react";
import eiffel from "../profile-images/eiffel.jpg";


function Home() {
  return (
    <div className="home">
      <div className="profile-img">
        <img
          src={eiffel}
          alt="background"
        />
      </div>
      <span className="home__info">
        <h3>Katkeldieva Gulzana</h3>
        <h5>I am a Frontend-developer</h5>
      </span>
    </div>
  );
}

export default Home;
