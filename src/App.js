import React, { useEffect, useState} from "react";
import Home from "./Home";
import Search from "./components/Search";
import Head from "./components/Head";
import Showdetails from "./components/Showdetails";

export default function App(){ 
    const [pageStates, setPageStates] = useState(<Home handleOverview={handleOverview}/>);
    const [overView, setOverView] = useState(<></>);
    function changeState(state){  
        setPageStates(state);
    }
    function handleOverview(item){
        if(item === undefined)
        {
            setOverView(<></>)
        }
        else{
            setOverView(<Showdetails item={item} handleOverview={handleOverview}/>)
        }

    }
    console.log("ADOSPKDOPASdokPOASDOPASDKASdkASOPASDAS`L`PADSL`P")
    console.log(process.env.REACT_APP_API_KEY)
    return( <>
            <Head changeState={changeState} handleOverview={handleOverview}/>
            {overView}
            {pageStates}
        </>
    );
}

