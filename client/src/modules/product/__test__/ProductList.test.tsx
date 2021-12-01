import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { PageProps } from '../../../types';
import ProductList from '../ProductList';

describe('ProductCard Component', () => {
  let props: { categories: PageProps[] };
  beforeEach(() => {
    props = {
      categories: [
        {
          articleCount: 75485,
          childrenCategories: [{ name: 'Wohnzimmer', urlPath: 'kategorie/wohnzimmermoebel/' }],
          categoryArticles: {
            "articles": [{
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
            }]
          },
          locale: "de_DE",
          name: "Möbel"
        }
      ]
    }
  })

  test('render', () => {
    const { asFragment } = render(<ProductList {...props} />);
    expect(screen.getByTestId('add-button')).toBeInTheDocument()
    expect(screen.getByTestId('product-price')).toBeInTheDocument()
    expect(screen.getByTestId('product-name')).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot();
  })

  // test('click on add button', () => {
  //   render(<ProductCard {...props} />);
  //   expect(screen.getByTestId('add-button')).toBeInTheDocument()
  //   expect(screen.getByTestId('product-price')).toBeInTheDocument()
  //   expect(screen.getByTestId('product-name')).toBeInTheDocument()

  //   fireEvent.click(screen.getByTestId('add-button'))

  // })

})
