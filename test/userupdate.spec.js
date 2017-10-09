import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import UsersIndex from '../src/components/users_index';

describe('<UsersIndex/>', function () {
  it('should have a table to display the users', function () {
    const wrapper = shallow(<UsersIndex/>);
    expect(wrapper.find('table')).to.have.length(1);
  });

  it('should have props for users, fetchUsers and deleteUser', function () {
    const wrapper = shallow(<UsersIndex/>);
    expect(wrapper.props().users).to.be.defined;
    expect(wrapper.props().deleteUser).to.be.defined;
    expect(wrapper.props().fetchUsers).to.be.defined;
  });
});