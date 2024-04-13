import React, { useState } from "react";
import "./index.css"; // Import your CSS file

function App() {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Candidate 1", votes: 0 },
    { id: 2, name: "Candidate 2", votes: 0 },
    { id: 3, name: "Candidate 3", votes: 0 },
  ]);

  const handleVote = (id) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
  };

  const handleReset = () => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) => ({ ...candidate, votes: 0 }))
    );
  };

  return (
    <div className="app">
      <h1>Vote for your favorite candidate</h1>
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate">
            <div>{candidate.name}</div>
            <button onClick={() => handleVote(candidate.id)}>Vote</button>
            <div className="votes">{candidate.votes}</div>
          </div>
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
