import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';

const trimSpace = value => value && value.replace(/ +/g, ' ');

class UserNew extends Component {
  onSubmit(values) {
    this.props.createUser(values, () => {
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
          {touched ? error : ''}
        </div>
      </div>
    );
  }


  render() {
    const { handleSubmit } = this.props;
    const { pristine, submitting, valid } = this.props;
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Users</Link></li>
          <li className="breadcrumb-item active">Add user</li>
        </ol>
        <p className="h2">Add user</p>
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
                  Add User
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

function validate(values) {
  const errors = {};

  if (!values.first_name) {
    errors.first_name = 'Enter a First Name.';
  }

  if (!values.last_name) {
    errors.last_name = 'Enter a Last Name.';
  }

  if (!values.city) {
    errors.city = 'Enter a City.';
  }

  if (!values.state) {
    errors.state = 'Enter a State.';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    stateCity: state.stateCity,
  };
}

export default reduxForm({
  validate,
  form: 'UserNewForm',
})(connect(mapStateToProps, { createUser })(UserNew));
