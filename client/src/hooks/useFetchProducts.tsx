import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const query = JSON.stringify({
      query: `{
              categories(ids: "156126", locale: de_DE) {
                name
                articleCount
                locale
                childrenCategories {
                  name
                  urlPath
                }
                categoryArticles(first: 50) {
                  articles {
                    name
                    variantName
                    prices {
                      currency
                      regular {
                        value
                      }
                    }
                    images(
                      format: WEBP
                      maxWidth: 200
                      maxHeight: 200
                      limit: 1
                    ) {
                      path
                    }
                  }
                }
              }
            }`,
    });

    async function fetchData() {
      const response = await fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: query,
      })
      const productData = await response.json()
      setCategories(productData.data.categories)
      setLoading(false)
    }
    fetchData()
  }, []);

  return { loading, categories };
};

export default useFetchProducts;
