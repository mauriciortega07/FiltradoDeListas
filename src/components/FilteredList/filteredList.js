import React, { Fragment } from "react";

const FilteredList = ({ listElements, textSearch, title }) => {
    const artistFilter = listElements.filter(artist => artist.artist.toLowerCase() === textSearch);
    const songsFilter = listElements.filter(songs => songs.song.toLowerCase() === textSearch);
    const albumsFilter = listElements.filter(albums => albums.album.toLowerCase() === textSearch);

    return (
        <section className="listFilter">
            <h2 className="listFilter__title">{title}</h2>
            <ol className="listFilter__list">

                {artistFilter.map((resultArtist) => {
                    const { id, artist, song, album, year, cover } = resultArtist;
                    return (
                        <li key={id} className="listFilter__list--item">
                            <img src={cover} alt={album} className="item__cover" />
                            <h3 className="item__artist">Artista: {artist}</h3>
                            <h4 className="item__song">Cancion: {song}</h4>
                            <h4 className="item__album">Album: {album}</h4>
                            <h4 className="item__year">Año:{year}</h4>
                        </li>
                    );
                })}

                {songsFilter.map((resultSongs) => {
                    const { id, artist, song, album, year, cover } = resultSongs;
                    return (
                        <li key={id} className="listFilter__list--item">
                            <img src={cover} alt={album} className="item__cover" />
                            <h3 className="item__artist">Artista:{artist}</h3>
                            <h4 className="item__song">Cancion: {song}</h4>
                            <h4 className="item__album">Album: {album}</h4>
                            <h5 className="item__year">Año:{year}</h5>
                        </li>
                    );
                })}

                {albumsFilter.map((resultAlbums) => {
                    const { id, artist, song, album, year, cover } = resultAlbums;
                    return (
                        <li key={id} className="listFilter__list--item">
                            <img src={cover} alt={album} className="item__cover" />
                            <h3 className="item__artist">Artista:{artist}</h3>
                            <h4 className="item__song">Cancion: {song}</h4>
                            <h4 className="item__album">Album: {album}</h4>
                            <h5 className="item__year">Año:{year}</h5>
                        </li>
                    );
                })}
            </ol>
        </section>
    )
}

export default FilteredList;