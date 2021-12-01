import styled from 'styled-components';
import { space, layout } from 'styled-system';
import css from '@styled-system/css';

export const ListItem = styled.li`
  ${css({
  margin: '0 0 1em'
})}
`;

ListItem.displayName = 'ListItem';

type Props = {
  listStyleType?: string;
  margin?: number | string;
  padding?: number | string;
  width?: number | string;
}

const List = styled.ul<Props>`
  list-style-type: ${(props) => props.listStyleType};
  ${space}
  ${layout}
`;

List.defaultProps = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  width: '100%',
};

List.displayName = 'List';

export default List;
