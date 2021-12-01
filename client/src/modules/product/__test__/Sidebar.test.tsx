import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Sidebar from '../Sidebar'
import { SidebarProps } from '../../../types'


describe('Sidebar Component', () => {
  let props: SidebarProps;
  beforeEach(() => {
    props = {
      categories: [
        { "name": "Test1", "urlPath": "kategorie/t1/" },
        { "name": "Test2", "urlPath": "kategorie/t2/" },
        { "name": "Test3", "urlPath": "kategorie/t3/" }
      ],
    }
  })

  test('render', () => {
    const { queryByText } = render(<Sidebar categories={props.categories} />);
    const linkElement = queryByText(/Test1/i);
    expect(linkElement).toBeInTheDocument();
    const anotherLinkElement = queryByText(/Test10/i);
    expect(anotherLinkElement).not.toBeInTheDocument();
  })

  test('Component snapshot', () => {
    const { asFragment } = render(<Sidebar categories={props.categories} />);
    expect(asFragment()).toMatchSnapshot();
  })
})
