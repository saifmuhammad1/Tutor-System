export interface ISession {
  id: number;
  tutor: { name: string }[];
  image: { img: string }[];
  day: string;
  date: string;
  type: "online" | "offline";
}


export const dummyUpcomingSession:ISession[] = [
  {
    id: 1,
    tutor: [
      { name: "Saif" },
      { name: "Rameez" }
    ],
    image: [
      { img: "https://randomuser.me/api/portraits/men/32.jpg" },
      { img: "https://randomuser.me/api/portraits/men/76.jpg" }
    ],
    day: "Monday",
    date: "2025-11-17",
    type: "online"
  },
  {
    id: 2,
    tutor: [
      { name: "Aisha" },
      { name: "Karan" }
    ],
    image: [
      { img: "https://randomuser.me/api/portraits/women/45.jpg" },
 
    ],
    day: "Wednesday",
    date: "2025-11-19",
    type: "offline"
  },
    {
    id: 8,
    tutor: [
      { name: "Aisha" },
      { name: "Karan" }
    ],
    image: [
      { img: "https://randomuser.me/api/portraits/women/45.jpg" },
      { img: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    day: "Wednesday",
    date: "2025-11-19",
    type: "offline"
  },
  //   {
  //   id: 5,
  //   tutor: [
  //     { name: "Aisha" },
  //     { name: "Karan" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/45.jpg" },
  
  //   ],
  //   day: "Wednesday",
  //   date: "2025-11-19",
  //   type: "offline"
  // },
  //   {
  //   id: 4,
  //   tutor: [
  //     { name: "Aisha" },
  //     { name: "Karan" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/45.jpg" },
  
  //   ],
  //   day: "Wednesday",
  //   date: "2025-11-19",
  //   type: "offline"
  // },
  //   {
  //   id: 10,
  //   tutor: [
  //     { name: "Aisha" },
  //     { name: "Karan" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/45.jpg" },
  //     { img: "https://randomuser.me/api/portraits/men/12.jpg" }
  //   ],
  //   day: "Wednesday",
  //   date: "2025-11-19",
  //   type: "offline"
  // },
  // {
  //   id: 3,
  //   tutor: [
  //     { name: "Zara" },
  //     { name: "Imran" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/30.jpg" },

  //   ],
  //   day: "Friday",
  //   date: "2025-11-21",
  //   type: "online"
  // },
  //   {
  //   id: 40,
  //   tutor: [
  //     { name: "Zara" },
  //     { name: "Imran" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/30.jpg" },

  //   ],
  //   day: "Friday",
  //   date: "2025-11-21",
  //   type: "online"
  // },
  //   {
  //   id: 20,
  //   tutor: [
  //     { name: "Zara" },
  //     { name: "Imran" }
  //   ],
  //   image: [
  //     { img: "https://randomuser.me/api/portraits/women/30.jpg" },

  //   ],
  //   day: "Friday",
  //   date: "2025-11-21",
  //   type: "online"
  // }
];
