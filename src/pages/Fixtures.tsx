import React, { useState } from "react";
import matches, { Match } from "../data/matches";
import "./Fixtures.css";

const Fixtures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "results">(
    "upcoming"
  );

  // Filter matches
  const upcomingMatches: Match[] = matches.filter(
    (m: Match) => m.status === "upcoming" || m.status === "preseason"
  );
  const pastMatches: Match[] = matches.filter(
    (m: Match) => m.status === "finished"
  );

  // Check if there is no match data at all
  const noSeasonData = upcomingMatches.length === 0 && pastMatches.length === 0;

  return (
    <div className="fixtures-page">
      {/* Header */}
      <header className="fixtures-header">
        <img src="/logos/stallions-fc-logo.png" alt="Stallions FC Logo" />
        <h1>Stallions FC Fixtures</h1>
        <p>Pride of Nyamasaria</p>
      </header>

      {/* Tabs */}
      <div className="fixtures-tabs">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`fixtures-tab ${
            activeTab === "upcoming"
              ? "fixtures-tab-active"
              : "fixtures-tab-inactive"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("results")}
          className={`fixtures-tab ${
            activeTab === "results"
              ? "fixtures-tab-active"
              : "fixtures-tab-inactive"
          }`}
        >
          Results
        </button>
      </div>

      {/* Content */}
      <div className="fixtures-content">
        {noSeasonData ? (
          <div className="empty-state">
            <h2>Season Ended</h2>
            <p>
              The league has concluded. Players are back in{" "}
              <span>training & preparations</span> for the next season.
              <br />
              Stay tuned for fresh fixtures!
            </p>
          </div>
        ) : activeTab === "upcoming" ? (
          <>
            {upcomingMatches.length > 0 ? (
              <>
                {/* Highlight next match */}
                <div className="next-match-banner">
                  <img
                    src={upcomingMatches[0].opponentLogo}
                    alt={upcomingMatches[0].opponent}
                  />
                  <div className="details">
                    <h2>
                      {upcomingMatches[0].status === "preseason"
                        ? "Pre-Season Friendly"
                        : "Next Match"}
                    </h2>
                    <p>
                      Stallions FC vs {upcomingMatches[0].opponent} <br />
                      {upcomingMatches[0].date} – {upcomingMatches[0].venue}
                    </p>
                  </div>
                </div>

                {/* List of upcoming matches */}
                {upcomingMatches.map((match: Match) => (
                  <div key={match.id} className="match-card">
                    <h3>
                      Stallions FC vs {match.opponent}{" "}
                      {match.status === "preseason" && "(Friendly)"}
                    </h3>
                    <p>
                      {match.date} – {match.venue}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <div className="empty-state">
                <h2>No Upcoming Matches</h2>
                <p>
                  The season has ended. Stay tuned for{" "}
                  <span>next season’s fixtures!</span>
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {pastMatches.length > 0 ? (
              pastMatches.map((match: Match) => (
                <div key={match.id} className="match-card-result">
                  <h3>Stallions FC vs {match.opponent}</h3>
                  <p>
                    {match.date} – {match.venue}
                  </p>
                  <p>Result: {match.score}</p>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <h2>No Results Yet</h2>
                <p>
                  The league has just ended.{" "}
                  <span>Check back next season!</span>
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Fixtures;
