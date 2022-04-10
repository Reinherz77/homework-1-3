const PlaylistForm = ({
    onCreate,
    handleChange,
    handleChangeDesc,
    handleChangeTitle,
}) => {
    return (
        <form onSubmit={onCreate}>
            <div>
                <label>Title</label>
                <br />
                <input type="text" name="title" id="title" onChange={handleChangeTitle} />
            </div>
            <div>
                <label>Description</label>
                <br />
                <input type="text" name="desc" id="desc" onChange={handleChangeDesc} />
            </div>
            <button type="submit" value="submit">Submit</button>
        </form>
    )
}

export default PlaylistForm