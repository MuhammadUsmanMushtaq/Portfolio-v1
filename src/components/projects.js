import React from 'react';


const Projects = ({ user }) => {
    return (
        <div className="project-page">
            <h2 className="project-page-title">Projects</h2>
            <div className="project-list">
                {user.projects.map((project, i) => (
                    <div className="project-card" key={i} shadow={4}>

                        <div className="project-image" style={{ backgroundImage: `url('${project.images[0].resolutions.mobile.url}') ` }}  >

                        </div>
                        <div className="project-title" >
                            {project.name}
                        </div>
                        <div className="project-summary"> {project.summary}
                        </div>
                        <div className="project-link">
                            <a href={project.website} >Link to the project</a>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}
export default Projects;