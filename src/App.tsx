import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <div id='logo-section' className='nav-section'>
          <a href='#'>
            <FontAwesomeIcon icon={faCoffee}/>
          </a>
        </div>
        <div id='link-section' className='nav-section'>
          <a href='#'>ABOUT</a>
          <a href='#'>PROJECTS</a>
        </div>
        <div id='social-section' className='nav-section'>
          <a href='#'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='#'>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div id='contact-section' className='nav-section'>
          <a href='#'>LETS TALK</a>
        </div>
      </nav>
    </div>
  )
}

export default App
