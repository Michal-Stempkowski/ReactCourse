import React from 'react';
import { Spinner} from 'reactstrap';

const HideWhenNotLoaded = ({isLoaded, children, size}) => {
    return (
        isLoaded ?
            <>{React.Children.map(children, (child, i) => (<>{child}</>))}</> :
            <Spinner color='primary' size={size} />);
};

export default HideWhenNotLoaded;