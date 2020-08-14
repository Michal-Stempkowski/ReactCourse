import Example from '../components/Example';
import RowWithChildren from '../components/RowWithChildren';

import OrderFormV2Layout from './children-implementation/OrderFormV2Layout';
import EditableLogSource from './state-hook-implementation/EditableLogSource';

// see: https://github.com/kolodny/immutability-helper
import update from 'immutability-helper';
import { Button } from 'reactstrap';
import React, { useState } from 'react';
import uniqid from 'uniqid';

const createNewLogSource = () => {
    return {
        id: uniqid(),
        dnsName: 'new',
        type: '',
        eps: 0
    };
};

const StateHook = () =>
{
    const [logSources, setLogSources] = useState([]);

    const onLogSourceAdded = () => {
        setLogSources(update(logSources, { $push: [createNewLogSource()] }));
    }

    const onLogSourceChanged = (i, diff) => {
        setLogSources(update(logSources, { [i]: diff }));
    };
    const onLogSourceDeleted = (i) => {
        setLogSources(update(logSources, { $splice: [[i, 1]]}));
    };
    const onLogSourceDuplicated = (i) => {
        const newLogSource = update(logSources[i], { id: { $set: uniqid() }});
        setLogSources(update(logSources, { $splice: [[i, 0, newLogSource]]}));
    };
    const onLogSourcesCleared = () => {
        setLogSources([]);
    }

    return (<Example name='State Hook - Advanced example (StateHook.js)' >
        <OrderFormV2Layout title='immutability-helper / more complicated example'>
            <RowWithChildren>
                <Button color='primary' onClick={onLogSourceAdded}>Add new Log Source</Button>
                <Button color='danger' onClick={onLogSourcesCleared}>Clear list</Button>
            </RowWithChildren>
            {logSources.map((l, i) => (
                <EditableLogSource
                    key={l.id /*i*/}
                    initialValue={l}
                    onChange={(diff) => onLogSourceChanged(i, diff)}
                    onDelete={() => onLogSourceDeleted(i)}
                    onDuplicate={() => onLogSourceDuplicated(i)} />))}
        </OrderFormV2Layout>
    </Example>);
};

export default StateHook;