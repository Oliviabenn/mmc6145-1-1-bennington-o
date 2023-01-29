export default function Project() {
    const [projects, setProjects]= useState([
      {image: 'images/image_1.jpg', title: 'BadPony Shop', desc: 'Shop specializing in custom apparel'}, 
      {image: 'images/image_2.jpg', title: 'Common Ground', desc: 'Wesbite for finding homes'},
      {image: 'images/image_3.jpg', title: 'TRC Mobile layout', desc: 'Mobile page for TRC Creative Group'}
    ]);
  
    return (
      <div className="home">
            <h1>Welcome!</h1>
            <h3><i>Browse works below:</i></h3>
            {projects.map((project, index)=> (
                 <div className="project" key={index}>
                    <img src={project.image} alt="image1"/>
                    <div>
                      <h2>{project.title}</h2>
                      <p><i>{project.desc}</i></p>
                    </div>
                </div>
            ))        
           }
     </div>
    )
  }