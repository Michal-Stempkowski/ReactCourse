import Example from '../components/Example';

import React from 'react';

const htmlSpecialCharacters = '<script>console.log("hello there");</script>';

const JsxEscapesSpecialCharacters = () =>
    <Example name='Jsx escapes special characters (JsxEscapesSpecialCharacters.js)' >
        {htmlSpecialCharacters}
    </Example>;

export default JsxEscapesSpecialCharacters;