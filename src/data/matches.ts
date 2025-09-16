// src/data/matches.ts

export interface Match {
  id: number;
  opponent: string;
  opponentLogo: string;
  date: string;
  venue: string;
  status: "upcoming" | "finished" | "preseason";
  score?: string;
}

// ===== Sample Data =====

// Normal Season Matches
export const sampleMatches: Match[] = [
  // Upcoming league matches
  {
    id: 1,
    opponent: "Lake Warriors",
    opponentLogo: "/gallery/warriors.png",
    date: "Sat, Oct 5, 2025 – 3:00 PM",
    venue: "Nyamasaria Grounds",
    status: "upcoming",
  },
  {
    id: 2,
    opponent: "Kisumu Stars",
    opponentLogo: "/gallery/stars.png",
    date: "Sun, Oct 19, 2025 – 4:00 PM",
    venue: "Moi Stadium",
    status: "upcoming",
  },
  // Finished matches
  {
    id: 3,
    opponent: "Riverside FC",
    opponentLogo: "/gallery/riverside.png",
    date: "Sun, Aug 24, 2025 – 2:00 PM",
    venue: "Riverside Arena",
    status: "finished",
    score: "Stallions 2 – 1 Riverside",
  },
  {
    id: 4,
    opponent: "Mountain Rovers",
    opponentLogo: "/gallery/rovers.png",
    date: "Sat, Sep 7, 2025 – 3:30 PM",
    venue: "Nyamasaria Grounds",
    status: "finished",
    score: "Stallions 0 – 0 Rovers",
  },
];

// Pre-Season Friendlies
export const preseasonMatches: Match[] = [
  {
    id: 5,
    opponent: "City United",
    opponentLogo: "/gallery/cityunited.png",
    date: "Sat, Aug 1, 2025 – 4:00 PM",
    venue: "Nyamasaria Grounds",
    status: "preseason",
  },
  {
    id: 6,
    opponent: "River Kings",
    opponentLogo: "/gallery/riverkings.png",
    date: "Sat, Aug 8, 2025 – 3:00 PM",
    venue: "Moi Stadium",
    status: "preseason",
  },
];

// Off-season / empty array
export const emptyMatches: Match[] = [];

// ===== Default export =====
// Toggle between the three modes by commenting/uncommenting
// export default sampleMatches;      // Normal season
// export default preseasonMatches;   // Pre-season friendlies
export default emptyMatches;          // Off-season
