import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test ('collapsed should be true', () => {
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.collapsed).toBe(true);
})

test ('collapsed should be false', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED});

    expect(newState.collapsed).toBe(false);
})

test ('crazy action test', () => {
    const state: StateType = {
        collapsed: false
    }

    expect(() => {reducer(state, {type: 'CRAZYTYPE'})}).toThrowError();
})