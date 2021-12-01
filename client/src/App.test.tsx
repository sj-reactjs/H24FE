import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { screen, act } from '@testing-library/react'
import App from './App'

describe('App component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
  });

  test('App Component render', () => {
    const { asFragment } = render(<App />);
    jest.useFakeTimers();

    act(() => {
      jest.runAllTimers();
    });

    setTimeout(() => {
      const input = screen.getByTestId('search')
      userEvent.type(input, 'test1')
    }, 1000);

    setTimeout(() => {
      expect(asFragment()).toMatchSnapshot();
    }, 3500);

  })

})
