import React from 'react';
import './project-card.css';

function Projectcard({project}) {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>{project.title}</label>
        <div className='project-links'>{project.demo && (
            <a className='project-link' href={project.demo}>
              <div className='link-button'><i class="fa-solid fa-globe"></i>Demo</div>
            </a>
          )}

          {project.github && (
            <a className='project-link' href={project.github}>
              <div className='link-button'><i class="fa-brands fa-github"></i>Github</div>
            </a>
          )}
        </div>

        <p>{project.about}</p>
        <div className='project-tags'>
          {project.tags.map((tag)=>{
            return(
              <label className='tag'>{tag}</label>
            )
          })}
        </div>
      </div>
      <img src={project.image} className='project-img'/>
    </div>
  )
}

export default Projectcard