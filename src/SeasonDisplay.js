import React from "react";

const SeasonDisplay = (props) => {
    console.log(props)
    if(!props.state.error && props.state.latitude !==  null){
        let hemisphere = (props.state.latitude > 0) ? "Nothern Hemisphere" : "Southern Hemisphere";
        let season = null;

        if(hemisphere === "Northern Hemisphere"){
            if(props.state.date >= 3 && props.state.date <= 8)
                season = "Summer";
            else
                season = "Winter"
        }
        else{
            if(props.state.date >= 3 && props.state.date <= 8)
                season = "Winter";
            else
                season = "Summer"
        }

        return (
            <p>You are in the <b>{hemisphere}</b>. It's currently <b>{season}</b> here.</p>
        );
    }
}

export default SeasonDisplay;