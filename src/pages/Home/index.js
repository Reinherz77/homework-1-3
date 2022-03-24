import ArtistAPI from "../../components/artist-song"
import TitleAPI from "../../components/title-song"
import CoverAPI from "../../components/cover-song"
import ButtonSelect from "../../components/button"

function Homepage() {
    return(
        <div className="Homepage">
            <div className="Container">
                <div className="cover-song">
                    <CoverAPI/>
                </div>
                <div className="title-song">
                    <TitleAPI/>
                </div>
                <div className="artist-song">
                    <ArtistAPI/>
                </div>
                <div className="button-select">
                    <ButtonSelect/>
                </div>
            </div>
        </div>
        
    )
}

export default Homepage