import React from "react";
import blender from "./img/blender.png";
import csharp from "./img/c-sharp.png";
import unity from "./img/unity.png";
import photoshop from "./img/photoshop.png";
import css from "./img/css.png";
import html from "./img/html.png";
import javascript from "./img/javascript.png";
import nodejs from "./img/node-js.png";
import react from "./img/react.png";
import solidity from "./img/solidity.png";
import unreal from "./img/unreal.png";
import mongodb from "./img/mongodb.png";
import unitywhite from "./img/unity-white.png";

function Badge(props){

    switch (props.skill){
        case "blender":
            return(
                <div className="badge"><img src={blender} alt=""/></div>
            );
        case "csharp":
            return(
                <div className="badge"><img src={csharp} alt=""/></div>
            );
        case "unity":
            return(
                <div className="badge"><img src={unity} alt=""/></div>
            );
        case "photoshop":
            return(
                <div className="badge"><img src={photoshop} alt=""/></div>
            );
        case "html":
            return(
                <div className="badge"><img src={html} alt=""/></div>
            );
        case "react":
            return(
                <div className="badge"><img src={react} alt=""/></div>
            );
        case "css":
            return(
                <div className="badge"><img src={css} alt=""/></div>
            );
        case "javascript":
            return(
                <div className="badge"><img src={javascript} alt=""/></div>
            );
        case "nodejs":
            return(
                <div className="badge"><img src={nodejs} alt=""/></div>
            );
        case "unreal":
            return(
                <div className="badge"><img src={unreal} alt=""/></div>
            );
        case "solidity":
            return(
                <div className="badge"><img src={solidity} alt=""/></div>
            );
        case "mongodb":
            return(
                <div className="badge"><img src={mongodb} alt=""/></div>
            );
        case "unitywhite":
            return(
                <div className="badge"><img src={unitywhite} alt=""/></div>
            );
        default:
            return(
                <div className="badge">{props.skill}</div>
            )
    }
}

export default Badge;