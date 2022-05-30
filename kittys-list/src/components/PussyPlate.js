import React from 'react';
import {useRef, memo} from "react";
import like from "./img/border_like.svg";
import fav from "./img/full_like.svg";

function PussyPlate({classForElem,id,url,addFav}){

    const element = useRef();

    function toggleActionRemAdd(){
        addFav(id,url)
    }

    return(        
        <div key={id} id={id} className="pussy">
          <img src={url} alt="kitty"></img>
          <img ref={element} src={localStorage.getItem(id)!== null ? fav : like} alt="kitty" className={classForElem} onClick={toggleActionRemAdd}></img>
        </div>
    );

}

export default memo(PussyPlate);