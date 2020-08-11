import Example from '../components/Example';

import React from 'react';

// Regular javascript code, could be in different modules:
const user = {
    name: "Michal",
    surname: "Stempkowski"
};

const ourAwesomeFormattingFunction = user => {
    return `User ${user.name} ${user.surname}`
}

// Our React component

const JavaScriptExpression = () =>
    <Example name='Jsx allows you to put any javascript expression (JavaScriptExpression.js)' >
        <h1>Hello {ourAwesomeFormattingFunction(user)} logging on day: {new Date().toDateString()}</h1>
    </Example>;

export default JavaScriptExpression;