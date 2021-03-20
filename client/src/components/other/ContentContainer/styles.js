import styled from 'styled-components/macro'

const getCustomStyle = props => props.styleCustom !== undefined ? props.styleCustom : ""

export const Container = styled.div`
    width: ${ props => props.styleCustom !== undefined && props.styleCustom.width !== undefined ? props.style.width : "1200px" };
    ${ getCustomStyle }
    margin: auto;
    @media(min-width: 1800px) {
        width: 1600px;
    }
    @media(max-width: 1600px) {
        width: 1200px;
    }
    @media(max-width: 1400px) {
        width: 800px;
    }
`;

export const Inner = styled.div`
    ${ getCustomStyle }
`;

export const Title = styled.h1`
    ${ getCustomStyle }
    padding: 0.5rem 1rem;
    font-size: 72px;
    color: ${ props => props.theme.colorAccent };
    border-left: 5px solid ${ props => props.theme.colorAccent };
    border-right: 5px solid ${ props => props.theme.colorAccent };
    border-bottom: 5px solid ${ props => props.theme.colorAccent };
    border-radius: 0 0 50px 50px;
    text-align: center;
`;