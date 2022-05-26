import React from "react";
import SeasonDisplay from "./SeasonDisplay";

const DisplayLocation = (props) => {
    let result = "";

    if(props.state.error)
        result = "ERROR: CAN'T GET LOCATION";
    else
        if(props.state.latitude === null)
            result = "GETTING LOCATION...";
        else
            result = `LATITUDE: ${props.state.latitude}`;

    return (
        <div>
            <h1>{result}</h1>
            <SeasonDisplay state={props.state}/>
        </div>
    );
};

export default DisplayLocation;