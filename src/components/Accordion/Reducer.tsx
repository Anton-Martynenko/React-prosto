type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED";
export const reducer = (state: StateType, action: ActionType) : StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            // const stateCopy = {...state};
            // stateCopy.collapsed = !state.collapsed
            // return stateCopy;
            return {...state, collapsed: !state.collapsed};
        default:
            throw new Error('Bad action type')
    }
    return state;
}