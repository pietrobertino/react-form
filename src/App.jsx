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

  function deleteArticle(i) {
    const updatedArticles = articles.filter((article, index) => index !== i)
    setArticles(updatedArticles)
  }

  return (
    <>
      <div className="container">
        <h1 className='py-3'>Articles</h1>
        <ul className='list-group'>
          {articles.map((article, index) => (
            <li className='list-group-item border-secondary-subtle d-flex justify-content-between align-items-center' key={index + article.replaceAll(" ", "-").toLowerCase()}>
              <span>{article}</span>
              <button className='btn btn-secondary btn-sm d-flex justify-content-center align-items-center'
                onClick={() => deleteArticle(index)}>
                <i className='bi bi-trash'></i>
              </button>
            </li>
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
