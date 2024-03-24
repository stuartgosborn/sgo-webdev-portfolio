import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom"; // Grid version 2
import Project from "../components/Project";
import React, { useState } from 'react';

export default function Portfolio() {

  const portfolio = [
    {
      id: 1,
      name: "Book Review",
      github: "https://github.com/Project2NU/bestrepo",
      live: "https://team2-hj5q.onrender.com/",
      img: "/bookreview.jpeg",
    },
    {
      id: 2,
      name: "Weather Dashboard",
      github: "https://github.com/stuartgosborn/hw06-weather-dashboard",
      live: "https://stuartgosborn.github.io/hw06-weather-dashboard/",
      img: "/weatherdb.jpeg",
    },
    {
      id: 3,
      name: "Java Quiz",
      github: "https://github.com/stuartgosborn/hw04-javascript-quiz",
      live: "https://stuartgosborn.github.io/hw04-javascript-quiz/",
      img: "/javaquiz.jpeg",
    },
    {
      id: 4,
      name: "Work Day Scheduler",
      github: "https://github.com/stuartgosborn/hw05-workday-scheduler",
      live: "https://stuartgosborn.github.io/hw05-workday-scheduler/",
      img: "/workday.jpeg",
    },
    {
      id: 5,
      name: "Note Taker",
      github: "https://github.com/stuartgosborn/hw11-note-taker",
      live: "https://hw11-note-taker-be0776e51d2c.herokuapp.com/notes",
      img: "/notetaker.jpeg",
    },
    {
      id: 6,
      name: "Password Generator",
      github: "https://github.com/stuartgosborn/hw03-password-generator",
      live: "https://stuartgosborn.github.io/hw03-password-generator",
      img: "/pwgenerator.jpeg",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section>
      <h1>Portfolio</h1>
      <Grid container spacing={3}>
        {portfolio.map((portfolio) => (
          <Grid item xs={12} sm={6} md={4} key={portfolio.id}
          onMouseEnter= {()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)} 
          >
            <Project
            name={portfolio.name}
            github={portfolio.github}
            live={portfolio.live}
            img={portfolio.img}
            isHovered={isHovered}        
            
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
