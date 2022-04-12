import './form-playlist.css'

const PlaylistForm = ({
    onCreate,
    handleChange,
    handleChangeDesc,
    handleChangeTitle,
}) => {
    return (
        <form className='form-playlist' onSubmit={onCreate}>
            <div className='title-form'>
                <label>Title</label>
                <br />
                <input type="text" name="title" id="title" onChange={handleChangeTitle} />
            </div>
            <div className='desc-form'>
                <label>Description</label>
                <br />
                <input type="text" name="desc" id="desc" onChange={handleChangeDesc} />
            </div>
            <button className='btn-form-submit' type="submit" value="submit">Submit</button>
        </form>
    )
}

export default PlaylistForm