import React from 'react'
import './project.css'
import { ProjectData } from '../../data/projects'
import Projectcard from './projectcard';
import Separator from '../../common/social-contact/separator';

function Project() {
  const data = ProjectData;
  return (
    <div className='projects'>
      <Separator/>
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project) => {
          return <Projectcard project={project}/>
        })}
      </div>
     
    </div>
  )
}

export default Project
