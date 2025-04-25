import React from "react";
import Profile from "./components/Profile";
import Section from "./components/Section";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="grid-container">
      <Profile />
      <Section />
      <Content />
    </div>
  );
};

export default App;
