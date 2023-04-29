import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style-sheets/Spoti.css';

const SpotifyApp = () => {
  const [token, setToken] = useState('');
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // Obtiene el token de acceso de Spotify
    const getToken = async () => {
      const clientId = '9d49203575da43e38c191962290aa13b';
      const clientSecret = 'fbbbf6e1646b4bee9f9e919336c3ddf2';
      const response = await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
        },
        data: 'grant_type=client_credentials',
        method: 'POST',
      });
      setToken(response.data.access_token);
    };
    getToken();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlay = (uri) => {
    const audio = new Audio(uri);
    audio.play();
  };
 
  return (
    <div>
      <h1>Buscador de Canciones</h1>
      <input type="text" className='barra' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='¿Qué canción buscas?'/>
      <button className='boton'onClick={handleSearch}>Buscar</button>
      <ul className='lista'>
        {tracks.map((track) => (
          <li key={track.id}>
            <img className='imagen' src={track.album.images[0].url} alt={track.name} />
            <h3>{track.name}</h3>
            <p>{track.artists[0].name}</p>
            <button className='playButton' onClick={() => handlePlay(track.preview_url)}>Play</button>            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyApp;