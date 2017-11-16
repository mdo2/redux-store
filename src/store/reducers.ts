export const initialState = {
  loaded: false,
  loading: false,
  data: new Array<string>()
};

export function reducer(state = initialState, action: { type: string, payload: any }) {

  switch(action.type) {
    case 'ADD_TODO':
      const todo: string = action.payload;
      const data = [ ...state.data, todo ];
      state = {
        ...state,
        data
      }
      break;
  }

  return state;
}