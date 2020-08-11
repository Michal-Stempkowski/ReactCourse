import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';


const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee"
  },
  dark: {
    color: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

const ThemeController = ({children}) => {
    const [theme, setTheme] = useState(themes.light);

    return (<>
        <ButtonGroup>
            <Button color="primary" onClick={() => setTheme(themes.light)} active={theme === themes.light}>Light</Button>
            <Button color="primary" onClick={() => setTheme(themes.dark)} active={theme === themes.dark}>Dark</Button>
        </ButtonGroup>
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    </>);
};

export default ThemeController;
