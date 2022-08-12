import logo from './logo.png';
import './App.css';
import Typed from 'react-typed';
import FadeIn from 'react-fade-in';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="font-link">
      <Typed
          strings={[
            "Hi!",
            "This is Mir Rohan Afsan.",
            "I am a software developer.",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>
      <FadeIn  delay={6400}>
      <div>
      <ul>
      <li><a href="https://www.linkedin.com/in/mirafsan/">linkedIn</a></li>
      <li><a href="http://github.com/rohanafsan">github</a></li>
      </ul>
      </div>
      </FadeIn>
      </header>
    </div>
  );
}



export default App;
