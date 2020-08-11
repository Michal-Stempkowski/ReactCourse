import React, { useEffect } from 'react';

const UnmountExample = ({}) =>
{
    useEffect(
        () => {
            console.log('in useEffect');
            return () => console.log('cleanup after use effect');
        },
        []);

    return null;
};


export default UnmountExample;