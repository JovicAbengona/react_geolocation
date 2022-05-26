import React from "react";
import SeasonDisplay from "./SeasonDisplay";

const DisplayLocation = (props) => {
    let result = "";

    if(props.state.error)
        result = <h1 className="ui red header">ERROR: CAN'T GET LOCATION</h1>;
    else
        if(props.state.latitude === null)
            result = <div><i class="ui active inline loader"></i><h1 className="ui grey header">GETTING LOCATION... </h1></div>;
        else
            result = <h1>LATITUDE: {props.state.latitude}</h1>;

    return (
        <div>
            {result}
            <SeasonDisplay state={props.state}/>
        </div>
    );
};

export default DisplayLocation;