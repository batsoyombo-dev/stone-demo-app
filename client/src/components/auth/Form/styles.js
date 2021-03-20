import styled from 'styled-components/macro'

const getCustomStyle = props => props.styleCustom !== undefined ? props.styleCustom : ""

export const Container = styled.form`
    ${ getCustomStyle }
    padding: 2.5rem;
`;

export const Title = styled.h1`
    ${ getCustomStyle }
    padding: 1rem;
    font-size: 3rem;
    color: ${ props => props.theme.colorPrimary };
    text-align: center;
    width: 100%;
`;

export const Group = styled.div`
    ${ getCustomStyle }
    width: 100%;
    margin: 1.5rem 0;
`;

export const TextField = styled.input`
    ${ getCustomStyle }
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    outline-color: ${ props => props.theme.colorPrimary };
    outline-width: 1;
    border: none;
    border-bottom: 1px solid ${ props => props.theme.colorPrimary };
`;

export const Button = styled.button`
    padding: 0.5rem 1.25rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    font-weight: bold;
    border: 2px solid ${ props => props.theme.colorAccent };
    color: ${ props => props.theme.colorAccent };
`;