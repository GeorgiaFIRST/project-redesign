import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import Index from "../components/index";

const App = () => {
    return (
        <div>
            <Index></Index>
        </div>
    )
}

ReactDOM.render(< App />, document.getElementById("root"))