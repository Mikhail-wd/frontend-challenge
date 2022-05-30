import React from 'react';
import { useEffect, useState} from 'react';
import PussyPlate from "./components/PussyPlate.js";
import './App.css';

function App() {

  const [pussys_list, setValue] = useState([])
  const [activeWindow, setActiveWindow] = useState(0)
  const [favorite_pussys_list, setFavotite] = useState([])
  const data = null;
  const xhr = new XMLHttpRequest();
  var fav_arr=[];


    
  useEffect(()=>{
    
    if (pussys_list !== []){
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        return(setValue(JSON.parse(this.responseText)))
      }
    });
    xhr.open("GET", "https://api.thecatapi.com/v1/images/search?size=thumb&limit=15");
    xhr.setRequestHeader("x-api-key", "0b520c62-c887-4b7e-a633-61989325c6de");
    xhr.send(data); 

    if (localStorage.length !== 0 ){
      for(var i=0; i<localStorage.length; ++i) {
        fav_arr[i]=[localStorage.key(i),localStorage.getItem(localStorage.key(i))];
      }
    };
    setFavotite(fav_arr);

  }},[]);
  
  function addToFavorite(id,url,element){
    document.getElementById(id).lastChild.classList.add("favor_full")
    localStorage.setItem(id,url);
    if (localStorage.length !== 0 ){
      for(var i=0; i<localStorage.length; ++i) {
        fav_arr[i]=[localStorage.key(i),localStorage.getItem(localStorage.key(i))];
      }
    };
    setFavotite(fav_arr);
  }

  function removeFromFavorite(id,url,element){
    localStorage.removeItem(id);
    if (localStorage.length !== 0 ){
      for(var i=0; i<localStorage.length; ++i) {
        fav_arr[i]=[localStorage.key(i),localStorage.getItem(localStorage.key(i))];
      }
    };
    setFavotite(fav_arr);
  }

  function choseAll() {
    setActiveWindow(0)
  }

  function choseFav() {
    setActiveWindow(1)
  }

  return (
    <div className="App">
      <div className="header">
        <div className={"nav_block all_pussys"+(activeWindow === 0 ? " active" : "")} onClick={choseAll}>
          <p>Все котики</p>
        </div>
        <div className={"nav_block favorit_pussys"+(activeWindow === 1 ? " active" : "")} onClick={choseFav}>
          <p>Любимые котики</p>
        </div>
      </div>
      <div className={"pussys_list"+(activeWindow === 0 ? " display" : " hide")}>
        {pussys_list.map((index) => <PussyPlate key={Math.random()} classForElem={"favor"} id={index.id} url={index.url} addFav={addToFavorite}/>)}
      </div>
      <div className={"favorite_pussys"+(activeWindow === 1 ? " display" : " hide")}>
        {favorite_pussys_list.map((index) =><PussyPlate key={Math.random()} classForElem={"favor_full"} id={index[0]} url={index[1]} addFav={removeFromFavorite}/>)}
      </div>
    </div>
  );
}

export default App;
