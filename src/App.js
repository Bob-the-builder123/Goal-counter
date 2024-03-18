// GoalTracker.js
import React, { useState } from "react";
import "./App.css";

export default function GoalTracker() {
  const [hasGoalBeenScored, setHasGoalBeenScored] = useState(false);

  return (
    <div className="goal-tracker-container">
      <h1>Goal Tracker</h1>
      <p className="status">
        Current score: {hasGoalBeenScored ? "Goal scored!" : "No goals scored yet."}
      </p>
      <button onClick={() => setHasGoalBeenScored(!hasGoalBeenScored)}>
        See Goal Status
      </button>
    </div>
  );
}
