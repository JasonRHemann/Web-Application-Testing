import React from "react";

const Dashboard = props => {
  const { strikes, setStrikes, balls, setBalls } = props;

  const handleStrike = e => {
    e.preventDefault();
    if (strikes >= 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const handleBall = e => {
    e.preventDefault();
    if (balls >= 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const handleFoul = e => {
    e.preventDefault();
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  };
  const handleHit = e => {
    e.preventDefault();
    setStrikes(0);
    setBalls(0);
  };

  return (
    <div>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  );
};

export default Dashboard;
