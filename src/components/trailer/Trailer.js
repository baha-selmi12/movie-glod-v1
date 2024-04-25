import {useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Trailer.css'

import React, { useEffect } from 'react'

const Trailer =() =>{
    let params = useParams();
    console.log(params.ytTrailerId);
    let key= params.ytTrailerId;
    console.log("params: ", params);
    // const [key, setKey] = useState("");
    // useEffect(() => {
    //     setKey(params.ytTrailerId);
    //   }, [key]);
    return(
    //     <div className="react-player-container">
    //   {(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://www.youtube.com/watch?v=${key}`} 
    //   width = '100%' height='100%' />:null}
    // </div>
    <h1>asba</h1>
    )
}

export default Trailer