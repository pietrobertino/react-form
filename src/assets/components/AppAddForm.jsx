export default function AppAddForm({ handleSubmit, title, setTitle }) {

    return (
        <form onSubmit={handleSubmit} className='text-center'>
            <input type="text" value={title}
                onChange={e => setTitle(e.target.value)} className=' form-control mt-4 border-secondary-subtle'
                placeholder='Type here the title of the new article...' />
            <button type='submit' className='btn btn-primary mt-2'>Upload new article</button>
        </form>
    )
}