
export const initialState = [];
export function favoritesReducer(state, action) {
switch (action.type) {
case 'ADD_FAVORITE': {
if (state.find((character) => character.id === action.payload.id)) {
return state;
}
return [...state, action.payload];
}


case 'REMOVE_FAVORITE': {
return state.filter((character) => character.id !== action.payload.id);
}

default:
return state;
}
}