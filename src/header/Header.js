import React from "react";
import CurrentTime from "../utils/CurrentTime";

const Header = ({ text }) => {
  return (
    <h1>
      {text} <CurrentTime />
    </h1>
  );
};

export default Header;
