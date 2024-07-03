export type Project = {
  title: string;
  github: string;
  summary: string[];
  skills: string[];
  demo?: string;
  hostedSite?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    github: "https://github.com/AvrilHunter/portfolio",
    summary: [
      "I really enjoyed learning React with Northcoders therefore to continue improving my knowledge I have used React written in TypeScript and built with Vite to create this portfolio page. As I have a good grasp of vanilla CSS I used Tailwind CSS for the styling of this website.",
      "The ability to tap into the breakpoints has made responsive design easy and efficient to create, for example the home page changes layout from flex to grid at 768px to improve the visuals.",
    ],
    skills: ["React", "TypeScript", "HTML", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Python Backend Project",
    github: "https://github.com/AvrilHunter/Python-SQLite",
    summary: [
      "In order to continue learning new skills after the boot camp I challenged myself to create a backend with Python. This was demanding to learn a new language and get to grips with the framework Flask.",
      "I approached the project by completing a tutorial in Python and then working through kata's in order to practice using the syntax in particular learning about indentation, variables and functions.",
      "Through reading docs and tutorials I then created a project using the lightweight framework Flask. I created and seeded a SQLite database and then created endpoints which allowed GET, PATCH, POST and DELETE operations.",
      "The application has error handling created and uses Pytest to test the util functions.,",
      "I used Insomnia to check the responses for each endpoint however for my next project I would create a testing suite to ensure the responses were tested thoroughly. ",
    ],
    skills: ["Python", "Flask", "SQLite", "Insomnia", "Pytest"],
  },
  {
    title: "What You Looking App - Augmented Reality Mobile Maps App",
    github: "https://github.com/sausagroll90/what-you-looking-app",
    demo: "https://northcoders.com/project-phase/what-you-looking-app",
    summary: [
      "I worked as part of a group of five to create a mobile app in less than three weeks during the project phase of Northcoders. We had one week to plan the project and spike the new technologies, then another eight days of coding to complete the project. Through deciding on our MVP, using Kanban boards and having daily stand-ups we successfully created What You Looking App?",
      " I took a leadership role in the planning meetings ensuring we stayed on track to timelines and had a robust MVP. Through the coding section I used ViroReact to create 3D icons for points of interest. The highlight was making a burger object to display restaurants!",
      " We used pair programming to make efficient use of time and prevent delays with debugging, this was effective whilst I worked on the feature to store information to the phones local storage. Through using a React Native library and data manipulation we were able to store and then call the data in the correct format to add an interesting feature to the app.",
      " I also enjoyed the use of TypeScript to learn a new language and building on my JavaScript knowledge whilst making the code robust.",
      " This was a great experience working as part of a group on a technical project and provided invaluable experience with communication and version control through git practices. In particular dealing with merge requests and branches.",
    ],
    // image: "whatYouLookingApp",
    skills: ["TypeScript", "React Native", "ViroReact", "Android Studio"],
  },
  {
    title: "Northcoders News, Front End Project",
    github: "https://github.com/AvrilHunter/nc-news-project",
    hostedSite: "https://nc-news-ah123.netlify.app/",
    summary: [
      "I created a news style website built using HTML, CSS and React. I enjoyed making the app interactive as the user can sort, filter, comment on and post articles.",
      "Before coding I identified the benefit of planning through designing wireframes and planning component trees using Figma and Excalidraw. These helped me to build the website effectively",
      "The use of React Hooks for state and context amongst others allowed me to render components effectively and work with routes and error handling on my website.",
      "Accessibility was a key consideration with exploration of several tools including Lighthouse, Wave and axaDev Tools.",
      "I gained valuable experience with vanilla CSS and I used responsive design considerations for changing screen sizes. The use of optimistic rendering when appropriate enhanced user experience.",
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
