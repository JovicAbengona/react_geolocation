import React from "react";
import ReactDOM from "react-dom";
import DisplayLocation from "./DisplayLocation";

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = { latitude: null, error: false };
        window.navigator.geolocation.getCurrentPosition(
            (position) => { this.setState({ latitude: position.coords.latitude }); },
            (err)      => { this.setState({ error: true }); }
        );
    }

    render() {
        return <center><div><DisplayLocation state={this.state} /></div></center>
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));