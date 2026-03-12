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
  const [rewrite, setRewrite] = useState(-1);



  function handleSubmit(e) {
    e.preventDefault();
    //dobbiamo modificare ed aggiornare la lista
    if (title.length > 0) {
      setArticles([...articles, title])
      setTitle("")
    }
  }

  function deleteArticle(i) {
    const updatedArticles = articles.filter((article, index) => index !== i)
    setArticles(updatedArticles)
  }

  function modifyArticle(e) {
    e.preventDefault()

    if (title.length > 0) {
      const updatedArticles = articles.map((article, index) => {
        if (index == rewrite) {
          return title
        }
        else {
          return article
        }
      })

      setTitle("")
      setArticles(updatedArticles)
      setRewrite(-1)
    }
  }

  return (
    <>
      <div className="container">
        <h1 className='py-3'>Articles</h1>
        <ul className='list-group'>
          {articles.map((article, index) => (
            <li className='list-group-item border-secondary-subtle d-flex justify-content-between align-items-center' key={index + article.replaceAll(" ", "-").toLowerCase()}>
              <span>
                {article}
              </span>
              <div className='d-flex gap-1'>
                <button className='btn btn-secondary btn-sm d-flex justify-content-center align-items-center'
                  onClick={() => (setRewrite(index), setTitle(article))}>
                  <i className='bi bi-pen'></i>
                </button>
                <button className='btn btn-secondary btn-sm d-flex justify-content-center align-items-center'
                  onClick={() => deleteArticle(index)}>
                  <i className='bi bi-trash'></i>
                </button>
              </div>
            </li>
          ))}
        </ul>

        {
          rewrite >= 0 ?

            <form onSubmit={modifyArticle} className='text-center'>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control
              mt-4 border-warning-subtle'/>
              <button type='submit' className='btn btn-warning mt-2'>Rename article</button>
            </form>

            :

            <form onSubmit={handleSubmit} className='text-center'>
              <input type="text" value={title}
                onChange={e => setTitle(e.target.value)} className=' form-control mt-4 border-secondary-subtle'
                placeholder='Type here the title of the new article...' />
              <button type='submit' className='btn btn-primary mt-2'>Upload new article</button>
            </form>
        }

      </div>
    </>
  )
}

export default App
