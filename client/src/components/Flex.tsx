import styled from 'styled-components';
import Box from './Box';

type Props = {
  display?: string;
}
const Flex = styled(Box) <Props>``;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
