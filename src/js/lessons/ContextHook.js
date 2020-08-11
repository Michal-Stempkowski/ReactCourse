import Example from '../components/Example';

import ThemeController from './context-hook-implementation/ThemeController';
import StyledComponent from './context-hook-implementation/StyledComponent';

import React from 'react';

const ContextHook = () =>
{
    return (
        <Example name='Context Hook (ContextHook.js)' >
            <ThemeController>
                <StyledComponent title='Theme controller - no need for passing styles down components' />
            </ThemeController>
        </Example>);
};


export default ContextHook;