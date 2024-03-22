import React , {useState, useEffect} from "react";
import "../css/head.css"
import Home from "../Home";
import Search from "./Search";
import Movies from "./Movies";
import Series from "./Series";

export default function Head({changeState, handleOverview}){
    const [searchInput, setSearchInput] = useState("");

    function search (e) {
        e.preventDefault();
        changeState(<Search searchKey={searchInput} handleOverview={handleOverview}/>)
    }

    return(
        <header className="header-bar">
            <div className="container-bar-left">
                <p className="logo-text">MoviesHub</p>
                <ul>
                    <button className="nav-button" onClick={()=>{changeState(<Home handleOverview={handleOverview}/>)}}>Home</button>
                    <button className="nav-button" onClick={()=>{changeState(<Movies handleOverview={handleOverview}/>)}}>Movies</button>
                    <button className="nav-button" onClick={()=>{changeState(<Series handleOverview={handleOverview}/>)}}>Series</button>
                </ul>
            </div>
            <div className="container-bar-right">
                <form onSubmit={search}>
                    <input onChange={(e) => setSearchInput(e.target.value)} 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search" 
                    />
                    <button className="button-submit" type={"submit"}> search</button>
                </form>
            </div>
        </header>
        
    )
}