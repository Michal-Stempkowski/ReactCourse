import Example from '../components/Example';

import React from 'react';

const JsxAlsoGeneratesObjects = () => {
    let result = <h1>I was not inside an if statement</h1>;

    if (2 + 2 === 5) {
        result = <h1>I definately was inside an if statement</h1>;
    }

    return <Example name='Jsx also generates objects (JsxAlsoGeneratesObjects.js)' >
        {result}
    </Example>;
};

export default JsxAlsoGeneratesObjects;