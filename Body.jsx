import './Body.css';
import { useRef, useState } from 'react';
import construcao from './assets';
import ervaVenenosa from './assets/erva.png';
import grtDeIpanema from './assets/ipanema.png';
import gstTantoVc from './assets/gostava.png';
import vinil from './assets/disco.png'; 
import ervaMp3 from './assets/ervaVenenosaAudio.mp3'

const Body = () => {

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTogglePlay = (index, audioSrc) => {
    if (currentIndex === index) {
      // Toggle pause/play
      if (audioRef.current?.paused) {
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
    } else {
      // Toca nova música
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const newAudio = new Audio(audioSrc);
      audioRef.current = newAudio;
      newAudio.play();
      setCurrentIndex(index);
    }
  };


  const songs = [
    { title: 'Construção', artist: 'Chico Buarque e Fernanda Montenegro - 1971', image: construcao, audio: ''},
    { title: 'Erva venenosa', artist: 'Rita Lee - 2000', image: ervaVenenosa, audio: ervaMp3 },
    { title: 'Garota de Ipanema', artist: 'Tom Jobim - 1963', image: grtDeIpanema, audio: ''},
    { title: 'Gostava Tanta De Voce', artist: 'Tim Maia - 1973', image: gstTantoVc, audio: '' },
  ];

  return (
    <div className="body">
      <div className="header">
        <h3>MAIS TOCADAS DO</h3>
        <h1 className="mpb-title">MPB</h1>
      </div>
      <div className="song-list">
        {songs.map((song, index) => (
          <div key={index} className="song">
            <label className="play-toggle">
            <input
              type="checkbox"
              checked={currentIndex === index && !audioRef.current?.paused}
              onChange={() => handleTogglePlay(index, song.audio)}
            />
            <span className="icon"></span>
          </label>


            <div className="song-info">
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
            <img src={song.image} alt={song.title} className="song-image" />
          </div>
        ))}
      </div>
        <p className="oval-text"> Nome de música mais tocada em um console Play </p>
      {/* <div className="oval-text-container">
      </div> */}
      <div className="background-image"></div>

      {/* Disco de vinil no canto direito */}
      <img src={vinil} alt="Disco de vinil" className="half-disc" />
    </div>
  );
};

export default Body;
