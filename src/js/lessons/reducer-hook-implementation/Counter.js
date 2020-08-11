import Display from '../../components/Display';
import EditableRowWithInput from '../../components/EditableRowWithInput';

import OrderFormV2Layout from '../children-implementation/OrderFormV2Layout';

import update from 'immutability-helper';
import React, { useReducer } from 'react';
import { Button } from 'reactstrap';

const makeDefaultState = () => {
    return { count: 0, name: "counter" };
};

const reduce = (state, action) => {
    switch (action.type) {
        case 'increment':
            return update(state, { count: { $set: state.count + 1 } });
        case 'decrement':
            return update(state, { count: { $set: state.count - 1 } });
        case 'rename':
            return update(state, { name: { $set: action.newName } });
        case 'reset':
            return makeDefaultState();
        default:
            throw new Error();
  }
};

const Counter = () =>
{
    const [state, dispatch] = useReducer(reduce, makeDefaultState());

    return (
        <OrderFormV2Layout title='We can use reducers for Redux-like event managment'>
            <Display label={state.name} value={state.count} />
            <Button color='primary' onClick={() => dispatch({ type: 'increment' })}>Increase</Button>
            <Button color='primary' onClick={() => dispatch({ type: 'decrement' })}>Decrease</Button>
            <Button color='primary' onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
            <EditableRowWithInput
                id='counterName'
                label='Rename counter'
                initialValue={state.name}
                onChange={(newValue) => dispatch({ type: 'rename', newName: newValue })} />
        </OrderFormV2Layout>);
};


export default Counter;