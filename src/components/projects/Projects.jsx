import React from "react";
import comCalImg from "../../images/projects/community_calendar.png";
import saltyHackersImg from "../../images/projects/salty_hackers.png";

/*
Saltiest Hacker News Trolls
Designed and created the marketing website for the application with HTML
and CSS
Utilized 􀄈ex-boxes and other responsive design techniques to ensure a
smooth experience for desktop and mobile users
Tech stack: HTML, Javascript, CSS
Spider Graph
Collaborated with a team of developers to create an application for
companies to make spider graphs
Used React and CSS to create responsive forms for creating graphs
Tech stack: Javascript, React, Node, Express, Knex
*/

const projectInfo = [
  {
    name: "Community Calendar",
    siteUrl: "https://cc-production.netlify.app/",
    frontEndRepoUrl:
      "https://github.com/Lambda-School-Labs/community-calendar-fe",
    image: comCalImg,
    description:
      "Create incredible neighborhoods and community spaces through meaningful shared events. A React client for the Community Calendar platform. Allows users to find events near them from multiple datasources, including our own database of user-generated content and several external APIs.",
    // role: `Used the Bulma CSS framework and Node Sass create responsive web pages
    // Implemented GraphQL queries to retrieve information about events from the server
    // Collaborated with team members to create responsive and accessible forms`,
    libraries: "React, Bulma, GraphQL",
  },
  {
    name: "Testify",
    backEndRepoUrl: "https://github.com/Testify-bw/Backend",
    description:
      "System for teachers to create and automatically grade tests for students.",
    // role: `Helped design database structure
    // `,
    libraries: "React, Bulma, Knex",
  },
  {
    name: "Saltiest Hacker News Trolls",
    siteUrl:
      "https://lowell1.github.io/bw-saltiest-hacker-news-marketing/index.html",
    frontEndRepoUrl:
      "https://github.com/lowell1/bw-saltiest-hacker-news-marketing",
    image: saltyHackersImg,
    description:
      "System for teachers to create and automatically grade tests for students.",
    // role: `Helped design database structure
    // `,
    libraries: "React, Bulma, GraphQL, Javascript, Node",
  },
];

export default () => {
  return <>proejcstsszz!!</>;
};
