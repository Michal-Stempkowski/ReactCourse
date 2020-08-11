import { ThemeContext } from './ThemeController';

import React, { useContext } from 'react';
import { Button } from 'reactstrap';

const StyledButton = ({ name = "", active = true, onClick = null }) => {
    const theme = useContext(ThemeContext);

    return (<Button style={theme} onClick={onClick} active={active}>{name}</Button>);
};

export default StyledButton;
