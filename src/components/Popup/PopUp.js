import React from 'react';

function Popup({selected, closePopup}){
    let imdbUrl = `https://www.imdb.com/title/${selected.imdbID}/`
    console.log(selected)
    return (
        <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} alt="Poster"/>
                    <p>
                        {selected.Plot}
                        <br/><br/>
                        <span>Genre</span>: {selected.Genre}.
                        <br/><br/>
                        <span>Actors</span>: {selected.Actors}.
                        <br/><br/>
                        <span>Production</span>: {selected.Production}.
                        <br/><br/>
                        <span>Box Office</span>: {selected.BoxOffice}.
                    </p>

                </div>
                <button className="popup-btn" onClick={closePopup}>Close</button>

                <a href = {imdbUrl} target='_blank' rel = 'noreferrer' >
                    <button className="popup-btn">
                        Open IMDB
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Popup;