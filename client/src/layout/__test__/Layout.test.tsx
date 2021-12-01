import '@testing-library/jest-dom'
import * as React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import Footer from '../Footer'
import Header from '../Header'

describe('Header Component Test cased', () => {

  test('Header Component render', () => {
    const { asFragment, getByAltText } = render(<Header />);
    expect(getByAltText('Home24')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot();
  })

  test('Header Component > Search chaneg', () => {
    const changeHandler = jest.fn()
    render(<Header changeHandler={changeHandler} />);
    const input = screen.getByTestId('search')
    userEvent.type(input, 'test1')
    expect(input).toHaveValue('test1')
    expect(changeHandler).toHaveBeenCalled()
    userEvent.type(input, 'test2')
    expect(input).not.toHaveValue('test1')
  })
})

describe('Footer component', () => {
  test('Footer Component', () => {
    const { asFragment, getByText } = render(<Footer />);
    const footerText = `© Home24 ${new Date().getFullYear()}`
    expect(getByText(footerText)).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot();
  })
})