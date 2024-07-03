export type Project = {
  title: string;
  github: string;
  summary: string[];
  skills: string[];
  demo?: string;
  hostedSite?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio",
    github: "https://github.com/AvrilHunter/portfolio",
    summary: [
      "Created my portfolio page to showcase the projects I have created. As I had a good grasp of vanilla CSS I have used this project to learn Tailwind CSS. I enjoyed developing for various screensizes to optimise the appearance.",
      "Deployed with Vercel",
    ],
    skills: ["React", "Vercel", "HTML", "Tailwind CSS"],
  },
  {
    title: "Python Backend Project",
    github: "https://github.com/AvrilHunter/Python-SQLite",
    summary: [
      "Learnt Python to create a backend REST API using Flask",
      "Seeded a SQLite database and queried it through creating endpoints for GET, POST, PATCH and DELETE requests",
      "Demonstrated Pytest for testing util functions",
    ],
    skills: ["Python", "Flask", "SQLite", "Insomnia", "Pytest"],
  },
  {
    title: "What You Looking App - Augmented Reality Mobile Maps App",
    github: "https://github.com/sausagroll90/what-you-looking-app",
    demo: "https://northcoders.com/project-phase/what-you-looking-app",
    summary: [
      "Points of interest highlighted with interactive icons making it exciting to explore a new city, created in the group project phase at Northcoders.",
      "Mobile app built with React Native, Typescript and ViroReact.",
      "Within 3 weeks, we researched, spiked and implemented these new technologies.",
      "Invaluable project experience including planning, communicating and executing a group technical project.",
      "Utilised Typescript  to ensure robust clean code.",
      "Implemented agile methodology, including SCRUM, sprints and kanban boards.",
    ],
    skills: ["TypeScript", "React Native", "ViroReact", "Android Studio"],
  },
  {
    title: "Northcoders News, Front End Project",
    github: "https://github.com/AvrilHunter/nc-news-project",
    hostedSite: "https://nc-news-ah123.netlify.app/",
    summary: [
      "Interactive news style website built using HTML, CSS and React.",
      "Following CRUD principles the user can sort, filter, vote, comment on and post articles.",
      "Designed wireframes and planned component trees using Figma and Excalidraw.",
      "Used JSX, context, state, error handling, hooks  components and routers.",
      "Accessibility was a key consideration with exploration of several tools including Lighthouse and axaDev Tools.",
      "Styled using CSS with responsive design considerations for various screen sizes.",
      "User experience enhanced through optimistic rendering when appropriate.",
    ],
    skills: [
      "JavaScript",
      "React",
      "React Router",
      "Vanilla CSS",
      "HTML",
      "Vite",
      "Axios",
      "Netlify",
    ],
  },
  {
    title: "Northcoders News API, Back End Project ",
    github: "https://github.com/AvrilHunter/NC-News",
    summary: [
      "Created a RESTful API to access news style articles on a variety of topics, view and add comments and post votes.",
      "Server created with Express.js and PostgreSQL.",
      "Built with test driven development using Jest.",
      "Thorough testing suite covering potential errors with appropriate handling. ",
      "Utilised complex SQL queries and protected against SQL injection.",
    ],
    skills: [
      "JavaScript",
      "PSQL",
      "Express.JS",
      "Test Driven Development",
      "Jest",
      "Supertest",
    ],
  },
];
