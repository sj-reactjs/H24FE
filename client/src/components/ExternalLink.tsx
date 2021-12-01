import styled from 'styled-components';
import css from '@styled-system/css';
export const ExternalLink = styled('a')`
    ${css({
    textDecoration: 'none',
    color: 'primary_500',
    ':hover': {
        color: 'primary_800',
    }
})}
`;

ExternalLink.displayName = 'ExternalLink';
