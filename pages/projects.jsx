// import comCalImg from "../public/images/projects/community_calendar.png";
// import saltyHackersImg from "../public/images/projects/salty_hackers.png";
import { projects, projectCard } from "../styles/projects.module.scss";

const projectInfo = [
  {
    name: "Community Calendar",
    siteUrl: "https://cc-production.netlify.app/",
    frontEndRepoUrl:
      "https://github.com/Lambda-School-Labs/community-calendar-fe",
    screenshot: "community_calendar.png",
    description:
      "Create incredible neighborhoods and community spaces through meaningful shared events. A React client for the Community Calendar platform. Allows users to find events near them from multiple datasources, including our own database of user-generated content and several external APIs.",
    // role: `Used the Bulma CSS framework and Node Sass create responsive web pages
    // Implemented GraphQL queries to retrieve information about events from the server
    // Collaborated with team members to create responsive and accessible forms`,
    stack: "React, Bulma, GraphQL",
  },
  {
    name: "Testify",
    backEndRepoUrl: "https://github.com/Testify-bw/Backend",
    description:
      "System for teachers to create and automatically grade tests for students.",
    // role: `Helped design database structure
    // `,
    stack: "React, Bulma, Knex",
  },
  {
    name: "Saltiest Hacker News Trolls",
    siteUrl:
      "https://lowell1.github.io/bw-saltiest-hacker-news-marketing/index.html",
    frontEndRepoUrl:
      "https://github.com/lowell1/bw-saltiest-hacker-news-marketing",
    screenshot: "salty_hackers.png",
    description:
      "System for teachers to create and automatically grade tests for students.",
    // role: `Helped design database structure
    // `,
    stack: "HTML, JS, CSS",
  },
];

export default () => {
  return (
    <div className={projects}>
      {projectInfo.map((info, idx) => (
        <div key={idx} className={projectCard}>
          {info.siteUrl ? (
            <a href={info.siteUrl}>{info.name}</a>
          ) : (
            <p>{info.name}</p>
          )}
          {info.screenshot && (
            <img src={`/images/projects/${info.screenshot}`} alt={info.name} />
          )}
          <p>{info.description}</p>
          <p>stack: {info.stack}</p>
        </div>
      ))}
    </div>
  );
};
