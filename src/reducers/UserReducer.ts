export interface InitialState {
  avatar: string,
  favorites: any[],
  appointments: any[]
}

export const initialState: InitialState = {
  avatar: '',
  favorites: [],
  appointments: []
};

export const UserReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };
      break;
    default:
      return state;
  }
}