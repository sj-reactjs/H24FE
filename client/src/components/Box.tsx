import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textAlign,
  borderRadius
} from 'styled-system';

type Props = {
  borderRadius?: string;
  borderColor?: string;
  p?: string;
  boxShadow?: string;
  className?: string;
  width?: string[] | string;
  padding?: string;
  role?: string;
  height?: string;
  flex?: string;
  alignSelf?: string;
  mb?: string;
  textAlign?: string;
  borderWidth?: string
}

const Box: React.FC<any> = styled('div')`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
  ${borderRadius}
`;

Box.displayName = 'Box';

export default Box;
