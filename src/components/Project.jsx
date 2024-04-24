import React from 'react'
import { projectList } from '../constants'
import styles, { layout } from '../style'
import DownloadCV from './DownloadCV'

const ProjectCard = ({ id, icon, title, content, index }) =>(
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== projectList.length - 1 ? "mb-6" : "mb-0"} ease-in duration-300 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-mono font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-mono font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  );

const Projects = () => {
  return (
    <section id='Projects' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the tech,<br className='sm:block hidden'/> 
          I handle the customer
        </h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>Trong các dự án công nghệ đã tham gia, tôi đã tập trung vào việc hiểu rõ nhu cầu của khách hàng, 
          phân tích các dữ kiện để đưa ra các đề xuất cải tiến và thiết lập chiến lược triển khai. 
          Công việc của tôi không chỉ tối ưu hóa hiệu suất dự án mà còn đóng góp 
          vào việc xây dựng các giải pháp thích ứng và hiệu quả cho doanh nghiệp.
        </p>
        <div className="my-8">
            <DownloadCV />
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
          {projectList.map((project, index) => (
          <ProjectCard key={project.id} title={project.title} icon={project.icon} content={project.content} index={index}/>
          ))}
        </div>
    </section>
  )
}

export default Projects;