import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '.';

test('Component', () => {
  const { getByText } = render(<MyComponent>Hello</MyComponent>);

  getByText('Hello');
});
