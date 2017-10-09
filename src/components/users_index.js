import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from "../actions/index";

class UsersIndex extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onDeleteClick(id) {
    this.props.deleteUser(id, () => {
      this.props.history.push('/');
    });
  }

  renderList() {
    console.log(this.props.users);
    return _.map(this.props.users, (user) => {
      return (
        <tr key = {user.id}>
            <th>{user.id}</th>
            <th>{user.first_name}</th>
            <th>{user.last_name}</th>
            <th>{user.stateCity.state}</th>
            <th>{user.stateCity.city}</th>
            <th>
              <div className="btn-toolbar">
                  <div className="btn-group mr-2">
                      <Link
                          to={`/user/${user.id}`}
                          className="btn btn-primary pull-xs-left">
                          Update
                      </Link>
                  </div>
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      className="btn btn-danger pull-xs-right"
                      onClick={() => this.onDeleteClick(user.id)}>Delete
                     </button>
                  </div>
              </div>
            </th>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-5">CRUD Users</h1>
            <p className="lead">This is a simple user app.</p>
        </div>
        <div className="col-sm-12 col-md-12 col-xs-12">
          <p className="clearfix">
            <Link
              className="btn btn-primary btn-md pull-xs-right"
              to="/user/new"
            >
              + Add New User
            </Link>
          </p>
        </div>
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>State</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    users: state.users,
  };
}

export default connect(mapStateToProps, { fetchUsers, deleteUser })(UsersIndex);