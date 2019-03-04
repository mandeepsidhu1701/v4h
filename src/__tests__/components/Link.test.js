import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Link from '../../components/Link'

describe('<Link />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<div><Link page="http://www.facebook.com">Facebook</Link></div>);
      const component = wrapper.find(Link).dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});