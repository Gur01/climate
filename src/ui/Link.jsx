import { ArrowLeft } from '@/ui';
import { Link as NextLink } from 'next/link';
import styled from 'styled-components';

export const Link = ({ hasChildren, ...rest }) => {
    return hasChildren ? (
        <StyledLink>
            <NextLink {...rest} />
            <ArrowLeft />
        </StyledLink>
    ) : (
        <NextLink {...rest} />
    );
};

const StyledLink = styled.div``;
