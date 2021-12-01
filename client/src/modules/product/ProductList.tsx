import React, { useContext } from 'react';
import { Row, Col } from '../../components/Grid';
import Box from '../../components/Box';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';

import { Article, PageProps } from '../../types'
import { ProductContext } from '../../context/ProductContext';


type Props = {
  categories: PageProps[]
}

const ProductList: React.FC<Props> = (props) => {
  const { categories } = props
  const { searchQuery = '' } = useContext(ProductContext)
  const articals = categories
    .map((category: any) => {
      return category.categoryArticles.articles.map((article: Article, index: number) => {
        if (searchQuery !== '' && !article.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())) {
          return null;
        }
        return (
          <Col role="listitem" aria-label={article.name} data-testid="product-card" sm={12} md={6} xl={4} key={index}>
            <Box mb="md">
              <ProductCard
                {...article}
              />
            </Box>
          </Col>);
      });
    }).filter(Boolean);

  return (
    <>
      <Row test-id="data-container" role="main">
        <Col sm={12} md={4} xl={3}>
          <Sidebar categories={categories[0]?.childrenCategories} />
        </Col>
        <Col sm={12} md={8} xl={9}>
          <Row role="list" aria-label="All Products" aria-live="polite">
            {articals}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductList;
