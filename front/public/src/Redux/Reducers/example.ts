
const initialState = {
    faction: '',
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case 'SELECT_FACTION': {
            const { name } = action.payload;
            return {
                ...state,
                faction: name,
            };
        }
        default:
            return state;
    }
}
