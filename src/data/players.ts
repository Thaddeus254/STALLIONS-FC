export interface Player {
  id: number;
  name: string;
  position: string;
  age: number;
  nationality: string;
  jerseyNumber: number;
  image: string;
  bio: string;
  stats: {
    appearances: number;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
  };
  previousClubs: string[];
  joinedDate: string;
}

export const players: Player[] = [
  {
    id: 1,
    name: "Collins Othuon",
    position: "Goalkeeper",
    age: 25,
    nationality: "Kenyan",
    jerseyNumber: 1,
    image: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Collins is our reliable goalkeeper with exceptional reflexes and leadership qualities. Known for his commanding presence in the box and ability to organize the defense.",
    stats: {
      appearances: 20,
      goals: 0,
      assists: 0,
      yellowCards: 3,
      redCards: 0,
      Saves: 15
    },
    previousClubs: ["Kisumu Day"],
    joinedDate: "2023-01-15"
  },
  {
    id: 2,
    name: "Sheldon Otieno",
    position: "Goalkeeper",
    age: 25,
    nationality: "Kenyan",
    jerseyNumber: 10,
    image: "https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "James is our creative midfielder with excellent vision and passing ability. He's the engine of our team and our captain.",
    stats: {
      appearances: 42,
      goals: 12,
      assists: 18,
      yellowCards: 5,
      redCards: 0
    },
    previousClubs: ["Gor Mahia Youth", "Mathare United"],
    joinedDate: "2022-07-01"
  },
  {
    id: 3,
    name: "Michael Wanjiku",
    position: "Forward",
    age: 23,
    nationality: "Kenyan",
    jerseyNumber: 9,
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Michael is our prolific striker with a keen eye for goal. His pace and finishing ability make him a constant threat to opposing defenses.",
    stats: {
      appearances: 38,
      goals: 25,
      assists: 8,
      yellowCards: 2,
      redCards: 1
    },
    previousClubs: ["AFC Leopards Youth", "Kakamega Homeboyz"],
    joinedDate: "2023-03-10"
  },
  {
    id: 4,
    name: "Peter Kimani",
    position: "Defender",
    age: 30,
    nationality: "Kenyan",
    jerseyNumber: 4,
    image: "https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Peter is our solid center-back with years of experience. His aerial ability and defensive positioning make him invaluable to our backline.",
    stats: {
      appearances: 40,
      goals: 3,
      assists: 1,
      yellowCards: 8,
      redCards: 0
    },
    previousClubs: ["Tusker FC", "Bandari FC"],
    joinedDate: "2021-12-01"
  },
  {
    id: 5,
    name: "Samuel Mutua",
    position: "Midfielder",
    age: 26,
    nationality: "Kenyan",
    jerseyNumber: 8,
    image: "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Samuel is our box-to-box midfielder known for his work rate and versatility. He can play multiple positions and brings energy to every match.",
    stats: {
      appearances: 35,
      goals: 7,
      assists: 12,
      yellowCards: 4,
      redCards: 0
    },
    previousClubs: ["Sofapaka FC", "Ulinzi Stars"],
    joinedDate: "2023-06-15"
  },
  {
    id: 6,
    name: "Brian Ouma",
    position: "Defender",
    age: 24,
    nationality: "Kenyan",
    jerseyNumber: 3,
    image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Brian is our attacking left-back with excellent crossing ability. His pace down the flank creates numerous attacking opportunities.",
    stats: {
      appearances: 33,
      goals: 2,
      assists: 9,
      yellowCards: 3,
      redCards: 0
    },
    previousClubs: ["Kariobangi Sharks", "Zoo FC"],
    joinedDate: "2023-08-20"
  }
];