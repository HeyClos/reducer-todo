import React from 'react'

export const initialState = {
    item: [],
    completed: false,
    id: null
};


export const reducers = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
              ...state,
              item: action.payload
              id: new Date()
            };
          case 'UPDATE_TITLE':
            return {
              ...state,
              title: action.payload,
              editing: !state.editing
            };
      default:
        return state;
    }
};
  
