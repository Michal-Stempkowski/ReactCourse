import Examples from "./js/Examples";
import ReactDOM from "react-dom";
import React from "react";
import HelloWorld from "./js/lessons/HelloWorld";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom-styles.css';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <h2>From the simplest snippet</h2>
    </div>,
    document.getElementById('this-is-our-application-root')
);

// ReactDOM.render(
//     <HelloWorld/>,
//     document.getElementById('this-is-our-application-root')
// );

// ReactDOM.render(<Examples />, document.getElementById("this-is-our-application-root"));