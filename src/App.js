import './App.css';
import Container from './components/container/Container';
import ProjectCard from './components/projectCard/ProjectCard';
import SkillTag from './components/skillTag/SkillTag';
import Skills from './components/skills/Skills';

function App() {
  const publicURL = process.env.PUBLIC_URL;
  const experiences = [
    {
      company: 'Syncorder', job: 'Frontend Developer', timePlace: '2018 - 2020 | Copenhagen',
      description: 'I was a trainne as a programmer which was a part of my EUX education. I developed the frontend for the platform the customer was using.',
      skills: [{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'HTML, CSS', type: 'language' }, { skill: 'Git', type: 'other' }]
    },
    {
      company: 'Klestrup & Partners', job: 'Developer', timePlace: '2015 - 2016 | Copenhagen',
      description: 'I was a trainne as a programmer which was a part of my EUX education. I worked on small tasks with C#.',
      skills: [{ skill: 'C#', type: 'language' }, { skill: 'Git', type: 'other' }]
    },
    {
      company: 'Computer Assistance Ltd', job: 'Helper', timePlace: '2014 - 2014 | Oxfordshire',
      description: 'I was a voluntier worker. Helped with computers repairs and installing for software.'
    },
  ]

  return (
    <div className='background-color'>
      <div className='background'>
        <div></div>
      </div>
      <div className='landing'>
        <h1 className='title'>Hi &#128075; I'm Daniel Svensson</h1>
        <p>Welcome to my developer portfolio, where I showcase my expertise in frontend development &#128187;. With a passion for creating visually stunning and user-friendly websites I strive to deliver high-quality projects that exceed expectations</p>
        <a className='btn' href='#projects'>View Projects</a>
      </div>
      <Container id={'projects'} title={'Projects'}>
        <div className='projects'>
          <ProjectCard image={`${publicURL}/images/TDFOverview.png`}
            title={'Tour de France overview'}
            description={`This is one of my newest project. The project is about seeing previous Tour de France results. 
                          The idea is that the user can scroll through every stage to see who got different key points and who won the stage. 
                          After every stage, there is an overview of who is in yellow, green, and so on`}
            link={'https://dmsvensson.github.io/grandTours/'}
            skills={[{ skill: 'React', type: 'framework' }, { skill: 'Javascript', type: 'language' }, { skill: 'HTML, CSS', type: 'language' }]}
            key={'TDF'} />
          <ProjectCard image={`${publicURL}/images/treeman.png`}
            title={'Træmanden'}
            description={`I have designed and create a more modern version of Træmanden.dk`}
            link={'https://treeman-644ca.web.app/'}
            skills={[{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'HTML, CSS', type: 'language' }, { skill: 'Figma', type: 'other' }, { skill: 'Sanity', type: 'other' }]}
            key={'treeman'} />
          <ProjectCard image={`${publicURL}/images/ginWebsite.png`}
            title={'Gin Tasting'}
            description={`I held a gin tasting at my university, where a fellow student and I created a website for this event.
                          The other students could go on the website to rate the gin in order to find the best gin.
                          To see an event use code: 7765`}
            link={'https://gin-tasting.web.app/'}
            skills={[{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'Firebase', type: 'other' }]}
            key={'Gin'} />
          <ProjectCard image={`${publicURL}/images/myFitLog.png`}
            title={'MyFitLog'}
            description={`MyFitLog is a website for tracking strength training. Demo user email: test@test.com password: 123456`}
            skills={[{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'HTML, CSS', type: 'language' }, { skill: 'Firebase', type: 'other' }]}
            key={'MyFitLog'} />
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'Smart Mirror'}
            description={`I created a smart mirror and an app. The idea is that my family can have useful information shown on the smart mirror.`}
            skills={[{ skill: 'Ionic', type: 'framework' }, { skill: 'Firebase', type: 'other' }]}
            key={'smartMirror'} />
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'TilbudsChecker'}
            description={`One of my first app. The idea is that you can take an URL of a product and add it to the app. The app will then check after discount on the products once a day.`}
            skills={[{ skill: 'C#', type: 'language' }, { skill: 'UWP', type: 'other' }]}
            key={'Tilbud'} />
        </div>
      </Container>
      <Container id={'about'} title={'About Me'} backgroundColor={'#302d2c'}>
        <div className='about'>
          <article className='about-me'>
            <p>My journey as a developer spans over the last 9 years, during which I have primarily focused on
              building my skills in frontend development. Through my previous work and personal projects, I have
              gained a strong understanding of Angular, HTML, CSS, JavaScript, and TypeScript.</p>
            <p>In my spare time, I enjoy working on my personal projects as well as strength training and watch cycling and cycling on my road when possible.</p>
          </article>
          <Skills />
        </div>
      </Container>
      <Container id={'experience'} title={'Experience'}>
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
                    return <SkillTag skill={skill.skill} type={skill.type} key={skill.skill} />
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
              <span className='right education'>Bachelor Degree in IT Product Development, Aarhus University</span>
            </div>
            <div className='semester box'>
              1
              <ul className='right-short education'>
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
              <ul className='left-short education'>
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
              <ul className='right-short education'>
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
              <ul className='left-short education'>
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
              <ul className='right-short education'>
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
              <ul className='left-short education'>
                <li>Bachelor's Project</li>
                <hr />
                <li>Shape-Changing Objects and Spaces</li>
                <hr />
                <li>Philosophy and Ethics of Computer Science and IT Product Development</li>
                <hr />
              </ul>
            </div>
            <div className='year box'>2023
              <span className='left education'>Finished my Bachelor Degree</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
