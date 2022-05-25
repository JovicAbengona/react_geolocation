import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { latitude: null, error: null };
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ latitude: position.coords.latitude }); },
            (err)      => { this.setState({ error: "CAN'T GET CURRENT LOCATION" }); }
        );
    }

    render() {
        return <div><div>Latitude: { this.state.latitude }</div> <div>ERROR: { this.state.error }</div></div>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));