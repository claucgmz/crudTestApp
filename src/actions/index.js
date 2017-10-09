import UsersAPI from '../api/UsersApi';

export const FETCH_USERS = 'FETCH_USERS';
export const CREATE_USER = 'CREATE_USER';
export const FETCH_USER = 'FETCH_USER';
export const DELETE_USER = 'DELETE_USER';
export const FETCH_CITY_STATE = 'FETCH_CITY_STATE';
export const UPDATE_USER = 'UPDATE_USER';

export const fetchUsers = () => {
  const request = UsersAPI.fetchAllUsers();
  return {
    type: FETCH_USERS,
    payload: request,
  };
};

export const fetchUser = (id) => {
  const request = UsersAPI.fetchUser(id);
  return {
    type: FETCH_USER,
    payload: request,
  };
};

export const createUser = (user, callback) => {
  const request = UsersAPI.createUser(user)
    .then(() => callback());
  return {
    type: CREATE_USER,
    payload: request,
  };
};

export const updateUser  = (id, user, callback) => {
  const request = UsersAPI.updateUser(id, user)
    .then(() => callback());
  return {
    type: UPDATE_USER,
    payload: request,
  };
};

export const deleteUser = (id, callback) => {
  UsersAPI.deleteUser(id)
    .then(() => callback());
  return {
    type: DELETE_USER,
    payload: id,
  };
};
