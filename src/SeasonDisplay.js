import React from "react";

const SeasonDisplay = (props) => {
    console.log(props)
    if(!props.state.error && props.state.latitude !==  null){
        const hemisphere = (props.state.latitude > 0) ? "Nothern Hemisphere" : "Southern Hemisphere";
        let season = null;

        if(hemisphere === "Northern Hemisphere")
            season = (props.state.date >= 3 && props.state.date <= 8) ? "Summer" : "Winter"
        else
            season = (props.state.date >= 3 && props.state.date <= 8) ? "Winter" : "Summer"

        const icon = (season === "Summer") ? "ui orange sun icon" : "ui blue snowflake icon";

        return (
            <p>You are in the <span className="ui green header">{hemisphere}</span>. It's currently <i className={icon} /><span className="ui blue header">{season}</span> <i className={icon} />here.</p>
        );
    }
}

export default SeasonDisplay;