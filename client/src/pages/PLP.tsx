import React, { useContext, useEffect } from 'react';
import ProductList from '../modules/product/ProductList';
import { Container } from '../components/Grid';
import Box from '../components/Box';
// import useFetchProducts from '../hooks/useFetchProducts';
import withLoader from '../hoc/withLoader';
import { ProductContext } from '../context/ProductContext';


const PLP = () => {
  const { loading, categories }: any = useContext(ProductContext)
  useEffect(() => {
    if (!loading && categories[0]?.name) {
      document.title = `${categories[0]?.name} - Home24`
    }
  }, [categories, loading])

  return (
    <Container>
      <Box textAlign="left">
        <h1>{categories[0].name} <small>{categories[0].articleCount}</small></h1>
      </Box>
      <ProductList categories={categories} />
    </Container>
  );
};

export default withLoader(PLP);
