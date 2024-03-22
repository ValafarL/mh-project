import React from "react";
import "../css/showdetails.css"
import Highlight from "./Highlight";
import { FaTimes } from 'react-icons/fa';

export default function Showdetails({item, handleOverview}){
    return <div className="over-sreen-div" onClick={()=>{handleOverview(undefined)}}>
        <div className="over-screen-window">
            <Highlight item={item}/>
            <button className="close-button" onClick={()=>{handleOverview(undefined)}}>
                <FaTimes className="close-icon" />
            </button>
        </div>
    </div>
}