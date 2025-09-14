export interface ScheduleEvent {
  time: string;
  title: string;
  speaker?: string;
  description: string;
  isBreak?: boolean;
}

export interface ScheduleDay {
  day: number;
  date: string;
  events: ScheduleEvent[];
}

export const conferenceSchedule: ScheduleDay[] = [
  {
    day: 1,
    date: 'October 24, 2025',
    events: [
      { time: '09:00 - 09:30', title: 'Registration & Welcome Coffee', description: 'Check-in, grab your badge, and enjoy some coffee.' , isBreak: true},
      { time: '09:30 - 10:00', title: 'Opening Keynote: The Future of Tech in Africa', speaker: 'Emmanuel Assuquo', description: 'A look into the future of technology and its impact on the African continent.' },
      { time: '10:00 - 11:00', title: 'Panel: Building a Startup Ecosystem in Cross River', speaker: 'Jane Doe, John Smith', description: 'A discussion with key players on fostering innovation and entrepreneurship.' },
      { time: '11:00 - 11:30', title: 'Coffee Break & Networking', description: 'Connect with fellow attendees and speakers.', isBreak: true },
      { time: '11:30 - 12:30', title: 'Workshop: Introduction to AI and Machine Learning', speaker: 'Susan Lee', description: 'A hands-on workshop for beginners in AI and ML.' },
      { time: '12:30 - 14:00', title: 'Lunch Break', description: 'Enjoy a delicious lunch and network with others.', isBreak: true },
      { time: '14:00 - 15:00', title: 'Talk: The Rise of FinTech in Nigeria', speaker: 'Fatima Abdullahi', description: 'Exploring the trends and opportunities in the Nigerian FinTech space.' },
      { time: '15:00 - 16:00', title: 'Panel: Women in Tech: Breaking Barriers', speaker: 'Kemi Adebayo, Jane Doe', description: 'A conversation with leading women in the tech industry.' },
      { time: '16:00 - 16:30', title: 'Closing Remarks & Day 1 Wrap-up', description: 'Summary of the day and a look ahead to Day 2.' },
    ],
  },
  {
    day: 2,
    date: 'October 25, 2025',
    events: [
        { time: '09:00 - 09:30', title: 'Morning Coffee & Networking', description: 'Start the day with coffee and connections.', isBreak: true },
        { time: '09:30 - 10:30', title: 'Keynote: Blockchain and the Future of Decentralization', speaker: 'Chinedu Okoro', description: 'An in-depth look at blockchain technology and its potential.' },
        { time: '10:30 - 11:30', title: 'Workshop: Building Your First Web3 Application', speaker: 'Emmanuel Assuquo', description: 'A hands-on session on creating decentralized applications.' },
        { time: '11:30 - 12:00', title: 'Coffee Break', description: 'Take a short break and recharge.', isBreak: true },
        { time: '12:00 - 13:00', title: 'Talk: The Role of Design in Tech', speaker: 'Kemi Adebayo', description: 'How user-centric design is shaping the future of technology.' },
        { time: '13:00 - 14:30', title: 'Lunch & Startup Showcase', description: 'Lunch followed by a showcase of innovative local startups.', isBreak: true },
        { time: '14:30 - 15:30', title: 'Panel: Investing in African Tech', speaker: 'John Smith, Fatima Abdullahi', description: 'A discussion on the investment landscape for tech startups in Africa.' },
        { time: '15:30 - 16:30', title: 'Talk: Scaling a Tech Business in a Competitive Market', speaker: 'Jane Doe', description: 'Strategies for growing your tech business and staying ahead of the competition.' },
        { time: '16:30 - 17:00', title: 'Closing Ceremony & Awards', description: 'Recognizing outstanding contributions and closing remarks.' },
    ],
  },
];