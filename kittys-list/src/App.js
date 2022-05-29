import './App.css';
import pussyimg from "./img/puss.png";
import favorite from "./img/full_like.svg";
import like from "./img/border_like.svg"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="nav_block all_pussys active">
          <p>Все котики</p>
        </div>
        <div className="nav_block favorit_pussys">
          <p>Любимые котики</p>
        </div>
      </div>
      <div className="pussys_list">
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
          <img src={favorite} alt="favor" className="favor"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
          <img src={favorite} alt="favor" className="favor"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
          <img src={like} alt="favor" className="favor_hollow"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
        </div>
        <div className="pussy">
          <img src={pussyimg} alt="kitty"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
