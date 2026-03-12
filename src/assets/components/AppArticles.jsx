export default function AppArticles({ articles, setRewrite, setTitle, deleteArticle }) {

    return (
        <>
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
        </>
    )
}