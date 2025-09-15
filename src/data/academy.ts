export interface AcademyPlayer {
  id: number;
  name: string;
  age: number;
  position: string;
  team: string;
  image: string;
  bio: string;
  achievements: string[];
}

export const academyPlayers: AcademyPlayer[] = [
  {
    id: 1,
    name: "Kevin Odhiambo",
    age: 17,
    position: "Forward",
    team: "U-18",
    image: "https://images.pexels.com/photos/1884585/pexels-photo-1884585.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Kevin is a promising young striker with excellent technical skills and a natural instinct for goal.",
    achievements: ["Top Scorer U-18 League 2024", "Player of the Month - November 2024"]
  },
  {
    id: 2,
    name: "Grace Akinyi",
    age: 16,
    position: "Midfielder",
    team: "U-17 Women",
    image: "https://images.pexels.com/photos/1884586/pexels-photo-1884586.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Grace is a talented midfielder with exceptional ball control and vision. She's the captain of our U-17 women's team.",
    achievements: ["Captain U-17 Women's Team", "Regional Championship Winner 2024"]
  },
  {
    id: 3,
    name: "Daniel Wekesa",
    age: 15,
    position: "Defender",
    team: "U-16",
    image: "https://images.pexels.com/photos/1884587/pexels-photo-1884587.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Daniel is a solid defender with great positioning and aerial ability. He's been with our academy for 3 years.",
    achievements: ["Best Defender U-16 League 2024", "Academy Player of the Year 2023"]
  },
  {
    id: 4,
    name: "Mary Adhiambo",
    age: 18,
    position: "Goalkeeper",
    team: "U-19 Women",
    image: "https://images.pexels.com/photos/1884588/pexels-photo-1884588.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Mary is our talented goalkeeper with quick reflexes and excellent shot-stopping ability.",
    achievements: ["Golden Glove U-19 Women's League 2024", "Clean Sheet Record Holder"]
  },
  {
    id: 5,
    name: "Collins Onyango",
    age: 16,
    position: "Midfielder",
    team: "U-17",
    image: "https://images.pexels.com/photos/1884589/pexels-photo-1884589.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Collins is a versatile midfielder with great passing range and work ethic. He's one of our most promising talents.",
    achievements: ["Most Assists U-17 League 2024", "Academy Rising Star 2024"]
  },
  {
    id: 6,
    name: "Faith Nekesa",
    age: 17,
    position: "Forward",
    team: "U-18 Women",
    image: "https://images.pexels.com/photos/1884590/pexels-photo-1884590.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Faith is a dynamic forward with pace and clinical finishing. She's our top scorer in the women's academy.",
    achievements: ["Top Scorer U-18 Women's League 2024", "Hat-trick Hero - 3 hat-tricks in 2024"]
  }
];