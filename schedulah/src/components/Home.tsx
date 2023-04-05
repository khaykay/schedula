import React from "react";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-slate-300">whats up username!</div>
    </div>
  );
};

export default Home;
