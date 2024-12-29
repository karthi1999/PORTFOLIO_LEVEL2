import React, { useRef, useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import useOnScreen from '../../utilities/hooks/useOnScreen';

const Projects = () => {
  const projectList = [
    {
      title: 'E-Learning',
      desc: 'Cloud-based e-learning offers flexible, scalable, and accessible online learning experiences.',
      img: '/syst_elearning.svg',
      link: 'https://www.whizlabs.com/',
    },
    {
      title: 'E-Commerce',
      desc: 'A platform for buying, selling, and renting properties online through a seamless, interactive marketplace.',
      img: '/real estate.png',
      link: 'https://www.realiti.io/',
    },
    {
      title: 'Portfolio',
      desc: "A professional online showcase of skills, projects, and services for clients and employers.",
      img: '/little boy.png',
      link: '/',
    },
  ];

  // Refs and State
  const projectRef = useRef(null);
  const isVisible = useOnScreen(projectRef, 0.5);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only once
  if (isVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div ref={projectRef} className="project-section w-screen xl:h-screen" id="projects">
      <div className="px-6 xl:px-6 xl:w-4/5 mx-auto pt-16 md:pt-24 mb-8 flex flex-col gap-5">
        <h1 className={`text-3xl text-center font-bold pb-5 ${hasAnimated ? 'animate-bottom-to-top' : ''}`}>
          PROJECTS
        </h1>
        <div className="flex justify-between items-center gap-8 lg:gap-3 flex-col lg:flex-row">
          {projectList.map((data, index) => {
            const { title, desc, img, link } = data;

            // Apply delay for each ProjectCard based on index
            const delayStyle = {
              animationDelay: `${index * 0.3}s`, // Adjust delay as needed
            };

            return (
              <div
                key={index}
                className={`project-card-container ${hasAnimated ? 'animate-right-to-left' : ''}`}
                style={hasAnimated ? delayStyle : {}}
              >
                <ProjectCard id={index} title={title} desc={desc} img={img} link={link} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
