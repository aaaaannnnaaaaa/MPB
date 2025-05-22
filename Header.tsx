import SwipeButton from './SwipeButton';
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <SwipeButton 
          labelOff=""
          labelOn=""
          onChange={(checked) => {
            console.log('Modo:', checked ? 'escuro' : 'claro');
          }}
        />
      </nav>

      <svg width="200" height="50">
         <path d="M10 10 Q 60 50 100 10 Q 150 50 190 10" stroke="white" fill="none" />
      </svg>
      
      <div className="quote-box">
        <p className="quote">
          “A música popular brasileira é uma invenção extraordinária do povo brasileiro.”
          <br />
          <span className="author">— Caetano Veloso</span>
        </p>
      </div>
    
    <div className="flex">
      <h1 className="title">MPB</h1>
          
    <div className="justify">
      <p className="subtext">
         Música Popular Brasileira (MPB) é um gênero que encapsula a diversidade cultural e musical do Brasil, consolidando-se na década de 1960 como um marco da identidade nacional. Com raízes em estilos como modinha, lundu, choro, samba e bossa nova, a MPB evoluiu absorvendo influências regionais, internacionais e respondendo às
transformações sociais e políticas do país. Durante a ditadura militar (1964-1985), ganhou um caráter político e de resistência, mas sua origem está na fusão contínua de tradições musicais brasileiras.
      </p>
    </div>
    </div>

    <div className="flex-btn">
      <div className="see-low">
        <button>VER MENOS</button>
      </div>
    </div>
    
    </header>
  );
};

export default Header;