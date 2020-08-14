import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

const ComponentWithUseLayout = () =>
{
    const inputRef = useRef();
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(inputRef.current.clientHeight);
    });

    const resetHeight = useCallback(
        () => setHeight(0),
        [setHeight]);

    return (
        <OrderFormV2Layout title='useLayoutEffect Example (no blinking)' >
            <h2>textarea height: {height}px</h2>
            <textarea onMouseOut={resetHeight} onMouseUp={resetHeight} ref={inputRef} />
        </OrderFormV2Layout>);
};


export default ComponentWithUseLayout;