const chai = require('chai');
const sinon_ = require('sinon');
const enzyme = require('enzyme');

const expect = chai.expect;
const mount = enzyme.mount;
const render = enzyme.render;
const shallow = enzyme.shallow;

global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;