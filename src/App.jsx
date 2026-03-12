import { useState } from 'react'
import AppArticles from './assets/components/AppArticles';
import AppRenameForm from './assets/components/AppRenameForm';
import AppAddForm from './assets/components/AppAddForm';

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
        <AppArticles articles={articles} setRewrite={setRewrite} setTitle={setTitle} deleteArticle={deleteArticle} />

        {
          rewrite >= 0 ?

            <AppRenameForm title={title} setTitle={setTitle} modifyArticle={modifyArticle} />

            :

            <AppAddForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
        }

      </div>
    </>
  )
}

export default App
