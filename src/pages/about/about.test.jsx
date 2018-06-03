import React from 'react';
import { shallow } from 'enzyme';

import About from './index';

describe('About', () => {
  const Component = shallow(<About />);
  it('renders 1 component', () => {
    expect(Component).toHaveLength(1);
  });

  it('is of type <div/>', () => {
    expect(Component.type()).toBe('div');
  });

  it('matches snapshot', () => {
    const aboutPage = shallow(<About />);
    expect(aboutPage).toMatchSnapshot();
  });
});
