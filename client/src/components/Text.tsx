import styled from 'styled-components';
import { typography, space, color } from 'styled-system';

type Props = {
  fontWeight?: string;
  fontFamily?: string;
  fontSize?: string
}

const Text = styled.div<Props>`
  ${typography}
  ${space}
  ${color}
`;


export default Text;
