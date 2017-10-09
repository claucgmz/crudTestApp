import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchUser, updateUser } from "../actions/index";

const trimSpace = value => value && value.replace(/ +/g, ' ');

class UserUpdate extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchUser(id);
  }

  onSubmit(values){
    this.props.updateUser(this.props.user.id, values, () => {
      this.props.history.push('/');
    });
  }


  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}:</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  render(){
    const user = this.props.user;
    const { handleSubmit } = this.props;
    const { pristine, submitting, valid } = this.props;

    if (!user) {
      return '';
    }

    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Users</Link></li>
          <li className="breadcrumb-item active">Update user</li>
        </ol>
        <p className="h2">Update user</p>
        <hr />
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="First Name"
            name="first_name"
            component={this.renderField}
            normalize={trimSpace}
          />
          <Field
            label="Last Name"
            name="last_name"
            component={this.renderField}
            normalize={trimSpace}
          />
          <Field
            label="City"
            name="city"
            component={this.renderField}
            normalize={trimSpace}
          />
          <Field
            label="State"
            name="state"
            component={this.renderField}
            normalize={trimSpace}
          />
          <div className="btn-toolbar">
            <div className="btn-group mr-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!valid || pristine || submitting}
              >
                Update User
              </button>
            </div>
            <div className="btn-group mr-2">
              <Link to="/" className="btn btn-danger cancel-button">Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }, ownProps) {
  const user = users[ownProps.match.params.id];
  const initialUserData = {
    first_name: user.first_name,
    last_name: user.last_name,
    city: user.stateCity ? user.stateCity.city : '',
    state: user.stateCity ? user.stateCity.state : '',
  };
  return { initialValues: initialUserData, user: users[ownProps.match.params.id] };
}

function validate(values) {
  const errors = {};

  if(!values.first_name){
    errors.first_name = 'Enter a First Name.'
  }

  if(!values.second_name){
    errors.second_name = 'Enter a Second Name.'
  }

  if(!values.city){
    errors.city = 'Enter a City.'
  }

  if(!values.state){
    errors.state = 'Enter a State.'
  }
  return errors;
}

UserUpdate = reduxForm({
  validate,
  form: 'UserUpdateForm',
  enableReinitialize: true,
})(UserUpdate);

UserUpdate = connect(mapStateToProps, { fetchUser, updateUser })(UserUpdate)

export default UserUpdate;
