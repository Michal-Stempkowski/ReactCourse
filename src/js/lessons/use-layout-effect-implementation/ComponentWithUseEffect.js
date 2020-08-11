import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React, { useCallback, useEffect, useRef, useState } from 'react';

const ComponentWithUseEffect = () =>
{
    const inputRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        console.log('render');
        setHeight(inputRef.current.clientHeight);
    });

    const resetHeight = useCallback(
        () => setHeight(0),
        [setHeight]);

    return (
        <OrderFormV2Layout title='useEffect Example (blinking)' >
            <h2>textarea height: {height}px</h2>
            <textarea onMouseOut={resetHeight} onMouseUp={resetHeight} ref={inputRef} />
        </OrderFormV2Layout>);
};


export default ComponentWithUseEffect;