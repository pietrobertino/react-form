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
        <h1 className='py-3'>Articles</h1>
        <ul className='list-group'>
          {articles.map((article, index) => (
            <li className='list-group-item border-secondary-subtle' key={index + article.replaceAll(" ", "-").toLowerCase()}>{article}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className='text-center'>
          <input type="text" value={title}
            onChange={e => setTitle(e.target.value)} className=' form-control mt-4 border-secondary-subtle'
            placeholder='Type here the title of the new article...' />
          <button type='submit' className='btn btn-primary mt-2'>Upload new article</button>
        </form>
      </div>
    </>
  )
}

export default App
