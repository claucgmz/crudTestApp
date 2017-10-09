import axios from 'axios';

class UsersAPI {
  static fetchAllUsers() {
    const request = axios.get('/api/users');
    return request;
  }

  static fetchUser(id) {
    const request = axios.get(`/api/users/${id}`);
    return request;
  }

  static createUser(user) {
    const request = axios.post('/api/users', user);
    return request;
  }

  static updateUser(id, user) {
    const request = axios.put(`/api/users/${id}`, user);
    return request;
  }

  static deleteUser(id) {
    const request = axios.delete(`/api/users/${id}`);
    return request;
  }

}
export default UsersAPI;
