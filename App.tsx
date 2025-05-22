// import DecryptedText from './components/DecryptedText';
// import Orb from './components/Orb';
// import SplashCursor from './components/SplashCursor';


import Body from './Body';
import Header from './Header';

function App() {
  return (
//     <div style={{
//       position: 'relative',
//       overflow: 'hidden',
//       height: '100vh',
//       backgroundColor: '#111',
//       color: '#fff',
//     }}>
//       <div style={{ width: '100%', height: '600px', position: 'relative' }}>
//       <div style={{ position: 'relative', zIndex: 1, padding: '3rem' }}>
//         {/* Example 1: Defaults (hover to decrypt) */}
// <DecryptedText text="Hover me!" />

// {/* Example 3: Animate on view (runs once) */}
// <div style={{ marginTop: '4rem' }}>
// <DecryptedText
//   text="Classic music"
//   loop
//   loopDelay={5000}
//   animateOn="view"
//   revealDirection="start"
//   className="text-white"
//   encryptedClassName="text-gray-500"
// />
// </div>
//       </div>
//     <Orb
//       hoverIntensity={0.5}
//       rotateOnHover={true}
//      hue={0}
//       forceHoverState={false}
//    />
// </div>
//       <SplashCursor />
//       <ClickSpark />
//     </div>
<>
    <Header />
    <Body />
</>
  );
}

export default App;