import React from 'react';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { formatter } from '../../utils/formatter';
import { Article } from '../../types'

const ProductCard: React.FC<Article> = ({
  images,
  name,
  prices
}) => {
  const handleAddtoCart = (event: any) => {
    console.log("selected Product to `add to cart`", name)
  }
  return (
    <Box
      borderWidth={'sm'}
      borderStyle={'solid'}
      borderColor={'primary_500'}
      m={'-2px'}
      borderRadius="md"
      boxShadow="lg">
      <Box role="img"
        aria-label={name}
        borderRadius="2px 2px 0px 0px"
        overflow="hidden"
        height="auto">
        <img src={images[0].path} alt={name} width="100%" />
      </Box>

      <Box p="xs" height="75px">
        <Text data-testid="product-name" fontWeight="bold" fontFamily="primary" fontSize="md">
          {name}
        </Text>
      </Box>
      <Flex p="xs">
        <Box flex="50%" alignSelf="center">
          <Text data-testid="product-price" color="primary_600">{formatter.format(prices.regular.value / 100)}</Text>
        </Box>
        <Box flex="50%">
          <Button
            tabIndex="0"
            role="button"
            aria-label={`Add ${name} to cart`}
            aria-pressed={true}
            data-testid="add-button"
            onClick={handleAddtoCart}
            variant="secondary"
            width="100%"
            p="0"
            disabled={false}>
            Add to cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProductCard;
