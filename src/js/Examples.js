import JavaScriptExpression from './lessons/JavaScriptExpression';
import JsxAlsoGeneratesObjects from './lessons/JsxAlsoGeneratesObjects';
import JsxEscapesSpecialCharacters from './lessons/JsxEscapesSpecialCharacters';
import Properties from './lessons/Properties';
import Children from './lessons/Children';
import Callbacks from './lessons/Callbacks';
import StateHookIntro from './lessons/StateHookIntro';
import StateHook from './lessons/StateHook';
import StateHookLazyLoad from './lessons/StateHookLazyLoad';
import HowOftenIsRenderCalled from './lessons/HowOftenIsRenderCalled';
import EffectHook from './lessons/EffectHook';
import EffectHookIntro from './lessons/EffectHookIntro';
import ComponentDidUnmount from './lessons/ComponentDidUnmount';
import CallbackHook from './lessons/CallbackHook';
import MemoHook from './lessons/MemoHook';
import ContextHook from './lessons/ContextHook';
import ContextHookNesting from './lessons/ContextHookNesting';
import ReducerHook from './lessons/ReducerHook';
import RefHookForStateSharing from './lessons/RefHookForStateSharing';
import RefHook from './lessons/RefHook';
import RefHookAndRefForwarding from './lessons/RefHookAndRefForwarding';
import ImperativeHandleHook from './lessons/ImperativeHandleHook';
import UseLayoutEffectPartOne from './lessons/UseLayoutEffectPartOne';
import UseLayoutEffectPartTwo from './lessons/UseLayoutEffectPartTwo';
import CustomHook from './lessons/CustomHook';
import DebugValueHook from './lessons/DebugValueHook';

import React from 'react';
import { Container } from 'reactstrap';

const Examples = () => {
    return (
        <Container >
            <JavaScriptExpression />
            <JsxAlsoGeneratesObjects />
            <JsxEscapesSpecialCharacters />
            <Properties />
            <Children />
            <Callbacks />
            <StateHookIntro />
            <StateHook />
            <HowOftenIsRenderCalled />
            <StateHookLazyLoad />
            <EffectHookIntro />
            <EffectHook />
            <ComponentDidUnmount />
            <CallbackHook />
            <MemoHook />
            <ContextHook />
            <ContextHookNesting />
            <ReducerHook />
            <RefHook />
            <RefHookAndRefForwarding />
            <RefHookForStateSharing />
            <ImperativeHandleHook />
            <UseLayoutEffectPartOne />
            <UseLayoutEffectPartTwo />
            <CustomHook />
            <DebugValueHook />
        </Container>);
};

export default Examples;
