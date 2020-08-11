import React, { useCallback, useDebugValue, useEffect, useState } from 'react';

const useFeedV2 = (url) =>
{
    const [data, setData] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [lastInvalidation, setLastInvalidation] = useState(null);

    const invalidate = useCallback(
        () => setLastInvalidation(new Date()),
        [setLastInvalidation]);

    useEffect(
        () => {
            setData(null);
            setLoaded(false);

            console.log("fetching data from", url);
            fetch(url)
                .then(response => response.json())
                .then(
                    (result) => {
                        setData(result);
                        setLoaded(true);
                        console.log("data fetched from", url);
                    });
        },
        [url, setData, setLoaded, lastInvalidation]);

    useDebugValue(isLoaded ? "loaded" : "not loaded");
    useDebugValue(data);
    useDebugValue(lastInvalidation);

    return [data, isLoaded, invalidate];
};


export default useFeedV2;