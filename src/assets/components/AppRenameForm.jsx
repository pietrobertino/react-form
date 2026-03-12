export default function AppRenameForm({ title, setTitle, modifyArticle }) {

    return (
        <form onSubmit={modifyArticle} className='text-center'>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='form-control
              mt-4 border-warning-subtle'/>
            <button type='submit' className='btn btn-warning mt-2'>Rename article</button>
        </form>
    )
}