// import styles from "../styles/home.module.css"

import { useState } from "react"

export default function Home() {
  const [projects, setProjects]= useState([
    {image: 'images/image_1.jpg', title: 'BadPony Shop', desc: 'Shop specializing in custom apparel'}, 
    {image: 'images/image_2.jpg', title: 'Common Ground', desc: 'Wesbite for finding homes'},
    {image: 'images/image_3.jpg', title: 'TRC Mobile layout', desc: 'Mobile page for TRC Creative Group'}
  ]);

  return (
    <div className="home">
          <h1>Welcome!</h1>
          {projects.map((project, index)=> (
               <div className="project" key={index}>
                  <img src={project.image} alt="image1"/>
                  <div>
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                  </div>
              </div>
          ))        
         }
   </div>
  )
}
