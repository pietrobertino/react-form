import { useState } from 'react'

const initialArticles = [
  "Guida al Coding",
  "Design Minimalista",
  "Futuro dell'AI",
  "Sviluppo Agile",
  "Smart Working"
];

function App() {

  const [title, setTitle] = useState("");
  const [articles, setArticles] = useState(initialArticles);



  function handleSubmit(e) {
    e.preventDefault();
    //dobbiamo modificare ed aggiornare la lista
    setArticles([...articles, title])
    setTitle("")
  }

  return (
    <>
      <div className="container">
        <ul>
          {articles.map((article, index) => (
            <li key={index + article.replaceAll(" ", "-").toLowerCase()}>{article}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit}>
          <input type="text" value={title}
            onChange={e => setTitle(e.target.value)} />
          <button type='submit'>Upload</button>
        </form>
      </div>
    </>
  )
}

export default App
