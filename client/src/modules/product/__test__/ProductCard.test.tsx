import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'
import { Article } from '../../../types';

describe('ProductCard Component', () => {
  let props: Article;
  beforeEach(() => {
    props = {
      "name": "Premium Komfortmatratze Smood",
      "variantName": "180 x 200cm",
      "images": [{
        "path": "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp"
      }],
      "prices": {
        "currency": "EUR", "regular": {
          "value": 56999
        }
      }
    }
  })

  test('render', () => {
    const { asFragment } = render(<ProductCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  })

  test('click on add button', () => {
    render(<ProductCard {...props} />);
    expect(screen.getByTestId('add-button')).toBeInTheDocument()
    expect(screen.getByTestId('product-price')).toBeInTheDocument()
    expect(screen.getByTestId('product-name')).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('add-button'))

  })

})
