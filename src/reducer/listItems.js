// action types
const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM'

// action creators
export const addListItem = item => ({ type: ADD_LIST_ITEM, item });
export const deleteListItem = item => ({ type: DELETE_LIST_ITEM, item });

// initial state
const listItems = [];

// reducer
export default function (state = listItems, action) {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return [...state, action.item];

    case DELETE_LIST_ITEM:
      let newStateArr = state.filter(item => item !== action.item)
      return [...newStateArr]

    default:
      return state;
  }
}
