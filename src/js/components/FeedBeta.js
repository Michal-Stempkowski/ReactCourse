import React, { useEffect } from 'react';

const FeedBeta = ({url, onLoaded, lastInvalidation=null}) =>
{
    useEffect(
        () => {
            console.log("fetching data from", url);
            fetch(url)
                .then(response => response.json())
                .then(
                    (result) => {
                        onLoaded(result);
                        console.log("data fetched from", url);
                    });
        },
        [url, onLoaded, lastInvalidation]);

    return (null);
};


export default FeedBeta;