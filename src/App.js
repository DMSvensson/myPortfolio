import './App.css';
import Container from './components/container/Container';
import ProjectCard from './components/projectCard/ProjectCard';
import SkillTag from './components/skillTag/SkillTag';

function App() {
  const publicURL = process.env.PUBLIC_URL;
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
            key={'treeman'}/>
          <ProjectCard image={`${publicURL}/images/ginWebsite.png`}
            title={'Gin Tasting'}
            description={`I held a gin tasting at my university, where a fellow student and I created a website for this event.
                          The other students could go on the website to rate the gin in order to find the best gin.
                          To see an event use code: 7765`}
            link={'https://gin-tasting.web.app/'}
            skills={[{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'Firebase', type: 'other' }]} 
            key={'Gin'}/>
          <ProjectCard image={`${publicURL}/images/myFitLog.png`}
            title={'MyFitLog'}
            description={`MyFitLog is a website for tracking strength training. Demo user email: test@test.com password: 123456`}
            skills={[{ skill: 'Angular', type: 'framework' }, { skill: 'Typescript', type: 'language' }, { skill: 'HTML, CSS', type: 'language' }, { skill: 'Firebase', type: 'other' }]} 
            key={'MyFitLog'}/>
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'Smart Mirror'}
            description={`I created a smart mirror and an app. The idea is that my family can have useful information shown on the smart mirror.`}
            skills={[{ skill: 'Ionic', type: 'framework' }, { skill: 'Firebase', type: 'other' }]} 
            key={'smartMirror'}/>
          <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
            title={'TilbudsChecker'}
            description={`One of my first app. The idea is that you can take an URL of a product and add it to the app. The app will then check after discount on the products once a day.`}
            skills={[{ skill: 'C#', type: 'language' }, { skill: 'UWP', type: 'other' }]} 
            key={'Tilbud'}/>
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
          <article className='skills'>
            <h3>Skills</h3>
            <article style={{ background: '#855E51' }}>
              <div className='skill-header'>
                <h4>Languages</h4>
              </div>
              <div className='skill-tags'>
                <SkillTag type={'language'} skill={'C#'} />
                <SkillTag type={'language'} skill={'HTML, CSS'} />
                <SkillTag type={'language'} skill={'Java'} />
                <SkillTag type={'language'} skill={'Javascript'} />
                <SkillTag type={'language'} skill={'Typescript'} />
              </div>
            </article>
            <article style={{ background: '#C46647' }}>
              <div className='skill-header'>
                <h4>Frameworks</h4>
              </div>
              <div className='skill-tags'>
                <SkillTag type={'framework'} skill={'Angular'} />
                <SkillTag type={'framework'} skill={'React'} />
                <SkillTag type={'framework'} skill={'Ionic'} />
              </div>
            </article>
            <article style={{ background: '#519A89' }}>
              <div className='skill-header'>
                <h4>Other</h4>
              </div>
              <div className='skill-tags'>
                <SkillTag type={'other'} skill={'Git'} />
                <SkillTag type={'other'} skill={'Firebase'} />
                <SkillTag type={'other'} skill={'Figma'} />
                <SkillTag type={'other'} skill={'Sanity'} />
                <SkillTag type={'other'} skill={'UWP'} />
              </div>
            </article>
          </article>
        </div>
      </Container>
    </div>
  );
}

export default App;
