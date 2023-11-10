import React from 'react'
import { projectList } from '../constants'
import styles, {layout} from '../style'
const Projects = () => {
  return (
    <section id='Projects' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,<br className='sm:block hidden'/> 
          we handle the money
        </h2>
      </div>
    </section>
  )
}

export default Projects;