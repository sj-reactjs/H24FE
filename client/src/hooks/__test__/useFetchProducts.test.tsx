import { renderHook } from '@testing-library/react-hooks'
import { PageProps } from '../../types';
import useFetchProducts from './../useFetchProducts'

// describe('useFetchProducts', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   })

//   test('useFetchProducts Hook load with delay', async () => {
//     const { result, waitForNextUpdate } = renderHook(() => useFetchProducts())
//     expect(result.current.loading).toBeTruthy()
//     await waitForNextUpdate()
//     expect(result.current.loading).toBeFalsy()
//     // expect(result.current.data.id).not.toBeNull()
//     // expect(result.current.data).toEqual(datasource)
//   })
// })

describe('the useFetchProducts hook', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() => Promise.resolve<any>({
        json: () => Promise.resolve({
          data: {
            categories: [{
              "name": "Möbel",
              "articleCount": 75571, "locale": "de_DE",
              "childrenCategories": [
                { "name": "Wohnzimmer", "urlPath": "kategorie/wohnzimmermoebel/" },
                { "name": "Schlafzimmer", "urlPath": "kategorie/schlafzimmermoebel/" }
              ],
              "categoryArticles": {
                "articles": [
                  {
                    "name": "Premium Komfortmatratze Smood",
                    "variantName": "180 x 200cm",
                    "prices": {
                      "currency": "EUR",
                      "regular": {
                        "value": 56999
                      }
                    },
                    "images": [{
                      "path": "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp"
                    }]
                  }
                ]
              }
            }
            ]
          }
        }
        )
      }))
  });
  afterEach(() => {
    // global.fetch.mockClear();
  });
  afterAll(() => {
    // global.fetch.mockRestore();
  });

  it('should make the api call to fetch the default value and set it in the state', async () => {
    const {
      result,
      waitForNextUpdate
    } = renderHook(() => useFetchProducts());
    await waitForNextUpdate();
    expect(fetch).toHaveBeenCalled();
    expect(result.current.loading).toBeFalsy()
    expect(result.current.categories[0]).toHaveProperty('childrenCategories')
    expect(result.current.categories).not.toEqual({})
  });

});
