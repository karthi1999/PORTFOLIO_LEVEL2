import React, { useRef, useState } from 'react';
import "./About.scss";
import useOnScreen from '../../utilities/hooks/useOnScreen';

const About = () => {
  const aboutRef = useRef(null);
  const isVisible = useOnScreen(aboutRef, 0.5);
  const [hasAnimated, setHasAnimated] = useState(false); // Tracks if the animation has already occurred
  const [activeTab, setActiveTab] = useState('skills');

  // Trigger animation only once
  if (isVisible && !hasAnimated) {
    setHasAnimated(true);
  }

  const tabs = [
    {
      name: 'skills',
      content: [
        { title: 'UI/UX', description: 'Designing Web/App Interfaces' },
        { title: 'Web Development', description: 'Web App Development' },
        { title: 'App Development', description: 'Building Android/iOS Apps' },
      ],
    },
    {
      name: 'experience',
      content: [
        { title: 'Frontend Developer', description: 'Worked at Silver Dollar Technology Company, building responsive UIs.' },
        { title: 'Frontend Developer', description: 'Worked at Realiti.io Company, upgrade website with optimization and clean UI.' },
        { title: 'Full Stack Developer', description: 'Worked at Whizlabs Company, Designed and developer seamless user experiences and worked in multiple projects' },
      ],
    },
    {
      name: 'education',
      content: [
        { title: "Bachelor's Degree in Mechanical Engineering", description: 'Anna University (2017 - 2021)' },
      ],
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div ref={aboutRef} className='about-section w-screen md:h-screen bg-gray-900 p-10 pt-16 xl:p-0' id='about'>
      <h1 className='block sm:hidden text-3xl font-bold text-center text-white'>ABOUT ME</h1>
      <div className='lg:w-4/5 mx-auto h-full flex flex-col sm:flex-row'>
        <div className='relative sm:w-1/2 sm:h-full flex justify-center'>
          <div className={`w-full h-full animation absolute ${hasAnimated ? 'animate-top-to-bottom' : ''}`}></div>
          <div className='w-52 h-full relative flex items-center'>
            <img src='/Image.png' alt='' className={`w-auto h-auto object-cover ${hasAnimated ? 'slide-in-animation' : ''}`} />
          </div>
        </div>
        <div className='sm:w-1/2 sm:h-full text-white flex flex-col justify-center'>
          <div className='flex flex-col gap-2 md:gap-5'>
            <h1 className={`hidden sm:block text-3xl font-bold ${hasAnimated ? 'animate-right-to-left' : ''}`}>ABOUT ME</h1>
            <div>
              <h2 className={`pb-2 ${hasAnimated ? 'animate-right-to-left' : ''}`}>Hi I'm Karthi</h2>
              <p className={`${hasAnimated ? 'animate-right-to-left' : ''}`}>I am a skilled UI/UX Designer, Developer, and Freelancer with 3+ years of experience in building user-centric web applications. Proficient in React, Next.js, Express, and PostgreSQL, I focus on creating seamless, high-performance solutions that drive business growth. With a strong balance of design and development, I collaborate with clients to deliver impactful, innovative digital experiences.</p>
            </div>
          </div>
          <div className={`flex flex-col md:w-9/12 h-64 md:h-52 mt-3 md:mt-5 ${hasAnimated ? 'animate-right-to-left' : ''}`}>
            {/* Tabs */}
            <div className="flex space-x-6 text-lg mb-2 md:mb-4">
              {tabs.map((tab) => (
                <div key={tab.name} className="relative cursor-pointer">
                  {/* Border animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-red-500 transition-all duration-500 ${activeTab === tab.name ? 'animate-borderGrow' : 'w-0'
                      }`}
                  ></span>
                  {/* Tab label */}
                  <span
                    className={`relative ${activeTab === tab.name ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    onClick={() => handleTabClick(tab.name)}
                  >
                    {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            {/* Tab Content */}
            <div>
              {tabs
                .find((tab) => tab.name === activeTab)
                ?.content.map((item, index) => (
                  <div key={index} className="mb-2 md:mb-3">
                    <h4 className="xl:text-lg font-semibold text-red-500">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
