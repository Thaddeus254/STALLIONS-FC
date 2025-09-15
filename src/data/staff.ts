export interface StaffMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  experience: string;
  qualifications: string[];
}

export const staff: StaffMember[] = [
  {
    id: 1,
    name: "Bonventure",
    position: "Head Coach",
    department: "Technical",
    image: "https://images.pexels.com/photos/1884591/pexels-photo-1884591.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Bornventure brings over 3 years of coaching experience to Stallions FC. His tactical knowledge and player development skills have been instrumental in our recent success.",
    experience: "3 years",
    qualifications: ["CAF A License", "UEFA B License", "Sports Science Degree"]
  },
  {
    id: 2,
    name: "Shannel Oduor",
    position: "Assistant Coach",
    department: "Technical",
    image: "https://images.pexels.com/photos/1884592/pexels-photo-1884592.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Shannel specializes in fitness and conditioning. His innovative training methods have significantly improved our players' physical performance.",
    experience: "2 years",
    qualifications: ["CAF B License", "Fitness & Conditioning Certificate", "Sports Psychology Diploma"]
  },
  {
    id: 3,
    name: "Brian Otieno",
    position: "Team Doctor",
    department: "Medical",
    image: "https://images.pexels.com/photos/1884593/pexels-photo-1884593.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Brian ensures our players maintain peak physical condition. His expertise in sports medicine has been crucial in injury prevention and recovery.",
    experience: "2 years",
    qualifications: ["Medical Degree", "Sports Medicine Specialization", "FIFA Medical Certificate"]
  },
  {
    id: 4,
    name: "Phillip",
    position: "Physiotherapist",
    department: "Medical",
    image: "https://images.pexels.com/photos/1884594/pexels-photo-1884594.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Phillip works closely with our medical team to ensure rapid recovery from injuries and optimal physical performance.",
    experience: "1 years",
    qualifications: ["Physiotherapy Degree", "Sports Rehabilitation Certificate", "Manual Therapy Diploma"]
  },
  {
    id: 5,
    name: "Maxwel Oduor",
    position: "Academy Head Coach",
    department: "Youth Development",
    image: "https://images.pexels.com/photos/1884591/pexels-photo-1884591.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Maxwel brings  experience to Stallions FC. His tactical knowledge and player development skills have been instrumental in our recent success.",
    experience: "2 years",
    qualifications: ["Sports Science Degree"]
  },
  {
    id: 6,
    name: "Dennis",
    position: "Academy Director",
    department: "Youth Development",
    image: "https://images.pexels.com/photos/1884595/pexels-photo-1884595.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Dennis oversees our youth development programs and has been instrumental in nurturing young talent from the local community.",
    experience: "2 years",
    qualifications: ["CAF A License", "Youth Development Certificate", "Education Degree"]
  },
  {
    id: 7,
    name: "Patrick Patoo",
    position: "Club Secretary",
    department: "Administration",
    image: "https://images.pexels.com/photos/1884596/pexels-photo-1884596.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    bio: "Patrick handles all administrative duties and ensures smooth operations of the club. Her organizational skills keep everything running efficiently.",
    experience: "2 years",
    qualifications: ["Business Administration Degree", "Sports Management Certificate", "Project Management Diploma"]
  }
];