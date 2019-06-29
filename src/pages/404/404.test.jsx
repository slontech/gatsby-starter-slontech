import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './index';

describe('About', () => {
  const Component = shallow(<NotFound />);
  it('renders 1 component', () => {
    expect(Component).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const notFoundPage = shallow(<NotFound />);
    expect(notFoundPage).toMatchSnapshot();
  });
});
