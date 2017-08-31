// action types
const ADD_LIST_ITEM = "ADD_LIST_ITEM"
const DELETE_LIST_ITEM = "DELETE_LIST_ITEM"

// action creators
export const addListItem = item => ({ type: ADD_LIST_ITEM, item })
export const deleteListItem = index => ({ type: DELETE_LIST_ITEM, index })

// initial state
const listItems = []

// reducer
export default function(state = listItems, action) {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return [...state, action.item]

    case DELETE_LIST_ITEM:
      let newStateArr = [...state]
      newStateArr.splice(action.index, 1)
      return newStateArr

    default:
      return state
  }
}
