import './App.css'
import { ChapterContainer } from './components/chapter/container'

function App() {
  return (
    <main>
      <div className="chapters">
        <div className="chapter">
          <div className="buttonBack">
            <button className="navButton" type="button">{"<"}</button>
          </div>
          <div className="narrative">
            <div className="avatar">
              <img src="images/avatar.png" alt="avatar" />
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, perspiciatis.
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, suscipit.
          </div>
          <div className="buttonForward">
            <button className="navButton" type="button">{">"}</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
