import Example from '../components/Example';

import ThemeController from './context-hook-implementation/ThemeController';
import StyledComponent from './context-hook-implementation/StyledComponent';

import React from 'react';

const ContextHookNesting = () =>
{
    return (<Example name='Context Hook Nesting (ContextHookNesting.js)' >
        <ThemeController>
            <StyledComponent title='first theme controller' />
        </ThemeController>
        <ThemeController>
            <StyledComponent title='second theme controller' />
        </ThemeController>
        <ThemeController>
            <ThemeController>
                <StyledComponent title='nested theme controller' />
            </ThemeController>
            <StyledComponent title='outer theme controller' />
        </ThemeController>
    </Example>);
};


export default ContextHookNesting;