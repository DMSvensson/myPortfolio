import './App.css';
import ProjectCard from './components/projectCard/ProjectCard';

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
        <article id='projects' className='container'>
          <h2>Projects</h2>
          <div className='projects'> 
            <ProjectCard image={`${publicURL}/images/TDFOverview.png`}
                          title={'Tour de France overview'}
                          description={`This is one of my newest project. The project is about seeing previous Tour de France results. 
                          The idea is that the user can scroll through every stage to see who got different key points and who won the stage. 
                          After every stage, there is an overview of who is in yellow, green, and so on`}
                          link={'https://dmsvensson.github.io/grandTours/'}
                          skills={['React', 'Javascript', 'CSS']}/>
            <ProjectCard image={`${publicURL}/images/treeman.png`}
                          title={'Træmanden'}
                          description={`I have designed and create a more modern version of Træmanden.dk`}
                          link={'https://treeman-644ca.web.app/'}
                          skills={['Angular', 'Typescript', 'Scss', 'Sanity']}/>
            <ProjectCard image={`${publicURL}/images/ginWebsite.png`}
                          title={'Gin Tasting'}
                          description={`I held a gin tasting at my university, where a fellow student and I created a website for this event.
                          The other students could go on the website to rate the gin in order to find the best gin.
                          To see an event use code: 7765`}
                          link={'https://gin-tasting.web.app/'}
                          skills={['Angular', 'Typescript', 'Firebase']}/>
            <ProjectCard image={`${publicURL}/images/myFitLog.png`}
                          title={'MyFitLog'}
                          description={`MyFitLog is a website for tracking strength training. Demo user email: test@test.com password: 123456`}
                          skills={['Angular', 'Typescript', 'Scss', 'Firebase']}/>
            <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
                          title={'Smart Mirror'}
                          description={`I created a smart mirror and an app. The idea is that my family can have useful information shown on the smart mirror.`}
                          skills={['Ionic', 'Firebase']} />
            <ProjectCard image={'https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80'}
                          title={'TilbudsChecker'}
                          description={`One of my first app. The idea is that you can take an URL of a product and add it to the app. The app will then check after discount on the products once a day.`}
                          skills={['C#', 'UWP']} />
          </div>
        </article>
    </div>
  );
}

export default App;
