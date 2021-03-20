import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 80%;
`;

export const Title = styled.h1`
    border-bottom: 0.5px solid ${ props => props.theme.colorPrimary };
    margin-bottom: 1rem;
    padding-bottom: 1rem;
`;