import _ from 'lodash';
import { FETCH_USERS, FETCH_USER, DELETE_USER } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_USERS:
      return _.mapKeys(action.payload.data, 'id');

    case DELETE_USER:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
