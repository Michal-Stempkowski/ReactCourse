import React, { useCallback, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';

const Example = ({name, children}) => {
    const [isVisible, setVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        setVisible(!isVisible);
    },
    [isVisible, setVisible]);

    const areaStyle = isVisible ? 'highlighted-area' : 'normal-area';

    const rowStyle = `with-margins ${areaStyle}`;

    return (
        <Row className={rowStyle}>
            <Col>
                <Button color="primary" onClick={toggleVisibility}>{name}</Button>
            </Col>
            <Col>
                {isVisible && children}
            </Col>
        </Row>
    );
};

export default Example;