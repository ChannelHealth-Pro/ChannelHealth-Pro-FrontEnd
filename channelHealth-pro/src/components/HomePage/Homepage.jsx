import React from "react";
import backgroundImage from "../../assets/images/doctors-2607295_1280.jpg";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Homepage</h1>
    </div>
  );
};

export default Homepage;
