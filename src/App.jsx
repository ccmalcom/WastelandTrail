import logo from './logo.svg';
// import m1 from './data/sprites/skins/m1.png'
import '../src/App.css'
import Actor from './components/actor';
import Player from './components/player';

function App() {
  
  return (
    <div className='camera'>
      <div className="map pixel-art">
        <div className='player'>
        <Player skin="m1"/>
        </div>
      </div>
    </div>
  );
}

export default App;
