import { useState } from 'react';
import './App.css'
import { ChapterContainer } from './components/chapter/container'

function App() {
  const [currentChapterID, setCurrentChapterID] = useState<number>(1);
  const chapter = chapters.find(chapter => chapter.id === currentChapterID)!;

  return (
    <main>
      <div className="chapters">
        <ChapterContainer key={chapter.id} navigateTo={setCurrentChapterID} { ...chapter} />
      </div>
    </main>
  )
}

const chapters = [
  {
    id: 1,
    next: 2,
    previous: null,
    content: {
      avatar: 'frog',
      text: '“Happy Snowsgiving, everyone! I hope you\’re hungry!”'
    }
  },
  {
    id: 2,
    next: null,
    previous: 1,
    content: {
      avatar: 'oger',
      text: 'Drool dribbles from the corner of Graggle’s mouth.'
    }
  }
]

export default App
