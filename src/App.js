import './App.css';
import Container from './components/container/Container';
import ProjectCard from './components/projectCard/ProjectCard';
import SkillTag from './components/skillTag/SkillTag';
import Skills from './components/skills/Skills';
import Modal from './components/modal/Modal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState("");

  const openModal = (event) => {
    setModalImgSrc(event.target.src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const publicURL = process.env.PUBLIC_URL;
  const experiences = [
    {
      company: 'Better Collective', job: 'Full-Stack Engineer - HLTV & FUTBIN', timePlace: '2024 -  | Aarhus',
      description: 'I am developer at Better Collective and a part of the esport department. I am currently part of the HLTV team, but I will be joining the FUTBIN team in 2025.',
      skills: ['Kotlin', 'Javascript', 'Git']
    },
    {
      company: 'Syncorder', job: 'Frontend Developer', timePlace: '2018 - 2020 | Copenhagen',
      description: 'My most recent role was as a trainee at Syncorder. I actively participated in the development of the frontend for a platform that our customers used to streamline their procurement processes. This experience allowed me to gain hands-on experience and valuable expertise in frontend development.',
      skills: ['Angular', 'Typescript', 'HTML, CSS', 'Git']
    },
    {
      company: 'Klestrup & Partners', job: 'Developer', timePlace: '2015 - 2016 | Copenhagen',
      description: 'As part of my EUX education, I had a trainee position as a programmer. I worked on small tasks with C#.',
      skills: ['C#', 'Git']
    },
    {
      company: 'Computer Assistance Ltd', job: 'Helper', timePlace: '2014 | Oxfordshire',
      description: 'I was a voluntier helping with computer repairs and installing software.'
    },
  ]

  return (
    <div className='background-color'>
      <div className='background'>
        <div></div>
      </div>
      <div className='landing'>
        <h1 className='title'>Hi &#128075; I'm Daniel Svensson</h1>
        <p>Welcome to my developer portfolio, where I showcase my expertise in frontend development &#128187;. I'm passionate about creating visually stunning and user-friendly websites, and I strive to deliver high-quality projects that exceed expectations</p>
        <div className='actions'>
          <a className='btn' href='#projects'>View Projects</a>
          <a className='btn outline' href='#experience'>Experience</a>
        </div>
      </div>
      <Container id={'about'} title={'About Me'} backgroundColor={'#302d2c'}>
        <div className='about'>
          <article className='about-me'>
            <p>My journey as a developer spans over the last 9 years, during which I have primarily focused on
              building my skills in frontend development. Through my previous work and personal projects, I have
              gained a strong understanding of Angular, HTML, CSS, JavaScript and TypeScript.</p>
            <p>I enjoy working on my personal projects, but when I'm not coding you'll likely find me hitting the gym or simply chilling out while watching sports. And when the weather's right, I'll be out riding my road bike.</p>
          </article>
          <Skills />
        </div>
      </Container>
      <Container id={'projects'} title={'Projects'}>
        <div className='projects'>
          <ProjectCard image={`${publicURL}/images/TDFOverview.png`}
            title={'Tour de France Overview'}
            description={`This is one of my most recent projects and it focuses on presenting the historical results of the Tour de France. 
                          The main concept behind this project is to enable to seamlessly navigate through each stage, allowing them to view the key points, stage, winners, and other vital information. 
                          At the end of each stage, there's an overview of the current leaders in categories such as the yellow jersey, green jersey, and more`}
            link={'https://dmsvensson.github.io/grandTours/'}
            skills={['react', 'Express','Javascript', 'HTML, CSS', 'Node.js', 'Azure SQL']}
            key={'TDF'} />
          <ProjectCard image={`${publicURL}/images/treeman.png`}
            title={'Træmanden'}
            description={`I have designed and developed a more modern version of Træmanden.dk`}
            link={'https://treeman-644ca.web.app/'}
            skills={['Angular',  'Typescript',  'HTML, CSS',  'Figma',  'Sanity']}
            key={'treeman'} />
          <ProjectCard image={`${publicURL}/images/ginWebsite.png`}
            title={'Gin Tasting'}
            description={`I organized a gin tasting at my university. A fellow student and I designed and developed a dedicated website for this.
                          This allowed other students to rate various gins, ultimately determining the best one.
                          To access a specific event, you can use the event code: 7765`}
            link={'https://gin-tasting.web.app/'}
            skills={['Angular', 'Typescript', 'Firebase']}
            key={'Gin'} />
          <ProjectCard image={`${publicURL}/images/myFitLog.png`}
            title={'MyFitLog'}
            description={`MyFitLog is a website designed for tracking your strength training progress. If you'd like to explore the demo, you can use the following login:`}
            demoUser={{email: 'Email: test@test.com', password: 'Password: Demo$Test1234'}}
            skills={['Angular', 'Typescript', 'HTML, CSS', 'Firebase']}
            link={'https://myfitlog-d6729.web.app/home'}
            key={'MyFitLog'} />
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'Smart Mirror'}
            description={`I created a smart mirror and an app with the purpose of providing my family with valuable, real-time infomation on the smart mirror.`}
            skills={[ 'Ionic',  'Firebase']}
            key={'smartMirror'} />
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'TilbudsChecker'}
            description={`One of my earliest projects was an app which allows users to input a product's URL. The app then automatically checks for any discounts on the product once a day, ensuring that you never miss out on a great deal.`}
            skills={[ 'C#',  'UWP']}
            key={'Tilbud'} />
        </div>
      </Container>
      <Container id={'experience'} title={'Experience'} backgroundColor={'#302d2c'}>
        <div className='experiences'>
          {experiences.map(experience => {
            return (
              <div className='experience' key={experience.company}>
                <h3 className='space-down'>{experience.company}</h3>
                <h4>{experience.job}</h4>
                <p>{experience.timePlace}</p>
                <p className='space-up'>{experience.description}</p>
                <div className='skills'>
                  {experience.skills && experience.skills.map(skill => {
                    return <SkillTag skill={skill} key={skill.skill} />
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Container id={'education'} title={'Education'}>
        <div className='educations'>
          <div className='middle-line'>
            <div className='year box'>2013 
              <span className='right education'>Language School, EF, Oxford</span>
            </div>
            <div className='year box'>2014
              <span className='left education'>Computer Technicain Specializing in Programming, EUX, TEC</span>
            </div>
            <div className='year box'>2020
              <span className='right education'>Started my Bachelor Degree in IT Product Development, Aarhus University</span>
            </div>
            <div className='semester box'>
              1
              <ul className='right education'>
                <li>Indroduction to Programming </li>
                <hr />
                <li>Foundations of IT Product Design</li>
                <hr />
                <li>Calculus Alpha</li>
                <hr />
              </ul>
            </div>
            <div className='semester box'>
              2
              <ul className='left education'>
                <li>The Web of Things</li>
                <hr />
                <li>Database Systems</li>
                <hr />
                <li>IT Product Design Project</li>
                <hr />
              </ul>
            </div>
            <div className='semester box'>
              3
              <ul className='right education'>
                <li>Software Engineering & Architecture</li>
                <hr />
                <li>Physical Computing</li>
                <hr />
                <li>Human-Computer Interaction</li>
                <hr />
              </ul>
            </div>
            <div className='semester box'>
              4
              <ul className='left education'>
                <li>Computer Architecture, Networks and Operating Systems</li>
                <hr />
                <li>Experimental System Development</li>
                <hr />
                <li>Indroductory Statistics and Data Analysis using R</li>
                <hr />
                <li>Organising and Business Models</li>
                <hr />
              </ul>
            </div>
            <div className='semester box'>
              5
              <ul className='right education'>
                <li>Distributed Systems and Security</li>
                <hr />
                <li>Algorithms and Data Structures</li>
                <hr />
                <li>Design as Products, Services, Systems and Experiences</li>
                <hr />
              </ul>
            </div>
            <div className='semester box'>
              6
              <ul className='left education'>
                <li>Bachelor's Project</li>
                <hr />
                <li>Shape-Changing Objects and Spaces</li>
                <hr />
                <li>Philosophy and Ethics of Computer Science and IT Product Development</li>
                <hr />
              </ul>
            </div>
            <div className='year box'>2023
              <span className='right education'>Finished my Bachelor Degree</span>
            </div>
            <div className='cert box'>Cert.
              <span className='left education'><img onClick={openModal} src={`${publicURL}/images/WD_Certificate_Codecademy.png`} alt='Web Development Certificate'/> Web Development, Codecademy</span>
            </div>
            <div className='year box'>2024</div>
            <div className='cert box'>Cert.
              <span className='right education'>Front-End Engineer, Codecademy <img onClick={openModal} src={`${publicURL}/images/FE_Certificate_Codecademy.png`} alt='Front-End Engineer Certificate'/></span>
            </div>
          </div>
        </div>
      </Container>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImgSrc} />
    </div>
  );
}

export default App;
