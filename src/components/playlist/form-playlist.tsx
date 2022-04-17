import React from 'react'
import './form-playlist.css'
import Button from '@mui/material/Button';

interface playlistform {
    onCreate: any;
    handleChangeDesc: any;
    handleChangeTitle: any;
}

const PlaylistForm = ({
    onCreate,
    handleChangeDesc,
    handleChangeTitle,
}:playlistform) => {
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
            <Button variant="contained" color="success" className='btn-form-submit' type="submit" value="submit">Submit</Button>
        </form>
    )
}

export default PlaylistForm