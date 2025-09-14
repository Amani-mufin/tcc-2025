export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "emmanuel-assuquo",
    name: "Emmanuel Assuquo",
    role: "Lead Organizer",
    image: "/team/emmanuel.jpeg",
    bio: "Emmanuel is a software engineer and community builder passionate about technology and education. He is the lead organizer of the Calabar Tech Conference.",
  },
  {
    id: "jane-doe",
    name: "Jane Doe",
    role: "Head of Partnerships",
    image: "/team/jane.jpeg",
    bio: "Jane is a business development expert with a knack for building strong relationships. She is responsible for securing sponsorships and partnerships.",
  },
  {
    id: "john-smith",
    name: "John Smith",
    role: "Marketing Lead",
    image: "/team/john.jpeg",
    bio: "John is a marketing guru with a passion for storytelling. He leads the marketing and communications efforts for the conference.",
  },
  {
    id: "susan-lee",
    name: "Susan Lee",
    role: "Volunteer Coordinator",
    image: "/team/susan.jpeg",
    bio: "Susan is a community manager with a passion for helping people. She is responsible for recruiting and managing volunteers for the conference.",
  },
];
