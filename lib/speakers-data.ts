
export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  bio: string;
  expertise: string[];
}

export const speakers: Speaker[] = [
  {
    id: "ada-eze",
    name: "Ada Eze",
    title: "AI Researcher",
    company: "Innovate AI",
    image: "/speakers/ada.jpeg",
    bio: "Ada is a leading researcher in the field of Artificial Intelligence, with a focus on natural language processing and its applications in African languages. She is a passionate advocate for diversity and inclusion in tech.",
    expertise: ["AI/ML", "NLP"],
  },
  {
    id: "chinedu-okoro",
    name: "Chinedu Okoro",
    title: "Blockchain Developer",
    company: "Krypton Africa",
    image: "/speakers/chinedu.jpeg",
    bio: "Chinedu is a pioneer in the African blockchain space. He is the founder of Krypton Africa, a startup that is building blockchain-based solutions for supply chain management. He is a strong believer in the power of decentralized technologies to transform Africa.",
    expertise: ["Blockchain", "Fintech"],
  },
  {
    id: "fatima-abubakar",
    name: "Fatima Abubakar",
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    image: "/speakers/fatima.jpeg",
    bio: "Fatima is a cybersecurity expert with over 10 years of experience in protecting organizations from cyber threats. She is a certified ethical hacker and a regular speaker at international cybersecurity conferences.",
    expertise: ["Cybersecurity", "Cloud Security"],
  },
  {
    id: "david-onye",
    name: "David Onye",
    title: "Frontend Engineer",
    company: "Paystack",
    image: "/speakers/david.jpeg",
    bio: "David is a frontend wizard who is passionate about building beautiful and user-friendly web experiences. He is a core contributor to several open-source projects and a mentor to aspiring developers.",
    expertise: ["Web Development", "UI/UX"],
  },
];
