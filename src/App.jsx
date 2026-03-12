import { useState } from 'react'

const articles = [
  "Guida al Coding",
  "Design Minimalista",
  "Futuro dell'AI",
  "Sviluppo Agile",
  "Smart Working"
];



function App() {

  return (
    <>
      <div className="container">
        <ul>
          {articles.map(article => (
            <li>{article}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
