import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import UserUpdate from '../src/components/user_new';

describe('<UserUpdate />', () => {
  it('should have a form to update user', () => {
    const wrapper = shallow(<UserUpdate />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('should have 4 inputs', () => {
    const wrapper = shallow(<UserUpdate />);
    expect(wrapper.find('input')).to.have.length(4);
  });

  it('should have a submit button', () => {
    const wrapper = shallow(<UserUpdate />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for fetchUser and updateUser', () => {
    const wrapper = shallow(<UserUpdate />);
    expect(wrapper.props().fetchUser).to.be.defined;
    expect(wrapper.props().updateUser).to.be.defined;
  });

});
