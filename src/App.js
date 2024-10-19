import React, { useState } from 'react';
import "../src/styles/style.css"
import FilteredList from './components/FilteredList/filteredList';
import SearchBox from './components/SearchBox/searchBox';
import Third from '../src/assets/images/big-star-third.jfif';
import Music from '../src/assets/images/brian-eno-music.webp';
import Patchanka from '../src/assets/images/mano-negra-patchanka.jfif';
import Divididos from '../src/assets/images/sumo-divididos-por-la-felicidad.jfif';
import AfterChabon from '../src/assets/images/sumo-after-chabon.jfif';
import Llegando from '../src/assets/images/sumo-llenado-los-monos.jfif';
import LaWoman from '../src/assets/images/the-doors-la-woman.jfif';
import DavidW from '../src/assets/images/the-kinks-david.jfif';
import Locura from '../src/assets/images/virus-locura.jfif';
import Superficies from '../src/assets/images/virus-superficies-de-placer.jfif';


function App() {
  const [listElements, setListElements] = useState({
    songsList: [
      { id: 1, artist: "Sumo", song: "Hola Frank", album: "After Chabon", year: 1987, cover: AfterChabon },
      { id: 2, artist: "Mano Negra", song: "Mala Vida", album: "Patchanka", year: 1989, cover: Patchanka },
      { id: 3, artist: "Brian Eno", song: "The Lost Day", album: "Music", year: 1990, cover: Music },
      { id: 4, artist: "Virus", song: "Luna de Miel", album: "Locura", year: 1985, cover: Locura },
      { id: 5, artist: "The Kinks", song: "David Days", album: "Something Else", year: 1977, cover: DavidW },
      { id: 6, artist: "Big Star", song: "For You", album: "Third", year: 1976, cover: Third },
      { id: 7, artist: "The Doors", song: "Love Her Madly", album: "L.A Woman", year: 1970, cover: LaWoman },
      { id: 8, artist: "Sumo", song: "Divididos por la felicidad", album: "Divididos por la felicidad", year: 1986, cover: Divididos },
      { id: 9, artist: "Sumo", song: "Heroina", album: "Llegando los Monos", year: 1986, cover: Llegando },
      { id: 10, artist: "Virus", song: "Encuentro en el rio", album: "Superficies de Placer", year: 1986, cover: Superficies },
      { id: 11, artist: "Virus", song: "Pronta entrega", album: "Superficies de Placer", year: 1986, cover: Superficies },
      { id: 12, artist: "Virus", song: "Tomo lo que encuentro", album: "Superficies de Placer", year: 1986, cover: Superficies },
      { id: 13, artist: "Sumo", song: "No duermas", album: "Divididos por la felicidad", year: 1986, cover: Divididos },
      { id: 14, artist: "Sumo", song: "Nextweek", album: "Llegando los Monos", year: 1986, cover: Llegando },
      { id: 15, artist: "Sumo", song: "Los Viejos Vinagres", album: "Llegando los Monos", year: 1986, cover: Llegando },
      { id: 16, artist: "Virus", song: "Pecados para Dos", album: "Superficies de Placer", year: 1986, cover: Superficies },
    ],
    textSearch: "",
  });

  const handleInputChange = (e) => {
    setListElements((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className="App">
      <header>
        <h1 className='mainTitle'>BUSCADOR DE CANCIONES</h1>
        <SearchBox textSearch={listElements.textSearch} title="Ingresa el artista, cancion o album" inputChange={handleInputChange} />
      </header>
      <main>
        <FilteredList listElements={listElements.songsList} textSearch={listElements.textSearch} title="Resultados" />
      </main>
    </div>
  );
}

export default App;
