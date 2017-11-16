import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: new Array()
};

export function reducer(state = initialState, action: { type: string, payload: any }) {

  switch(action.type) {
    case fromActions.ADD_TODO:
      const todo = action.payload;
      const data = [ ...state.data, todo ];
      state = {
        ...state,
        data
      }
      break;

    case fromActions.REMOVE_TODO:
      state = {
        ...state,
        data: state.data.filter((todo: any) => todo.label !== action.payload.label)
      };
      break;
  }

  return state;
}