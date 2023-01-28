// import styles from "../styles/home.module.css"

import { useState } from "react"

export default function Home() {
  const [projects, setProjects]= useState([
    {image: 'images/image_1', title: 'BadPony Shop', desc: 'Shop specializing in custom apparel'}, 
    {image: 'images/image_2', title: 'Common Ground', desc: 'Wesbite for finding homes'},
    {image: 'images/image_3', title: 'TRC Mobile layout', desc: 'Mobile page for TRC Creative Group'}
  ]);

  return (
    <div className="home">
          <h1>Welcome!</h1>
          {projects.map(project=> (
               <div className="project">
               <img src="images/image_1.jpg" alt="image1"/>
               <div>
                 <h2>BadPony Shop</h2>
                 <p>Shop specializing in custom apparel</p>
               </div>
           </div>
          ))        
         }
   </div>
  )
}
