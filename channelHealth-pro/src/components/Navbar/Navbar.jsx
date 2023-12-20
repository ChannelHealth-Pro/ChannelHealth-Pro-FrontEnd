import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>City Hospital</h2>
      </div>

      <div>
        <button>
          <h2>Login</h2>
        </button>
      </div>
      <div>
        <button>
          <h2>Register</h2>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
