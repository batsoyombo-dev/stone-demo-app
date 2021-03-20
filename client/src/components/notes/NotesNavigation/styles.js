import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const NavigationItem = styled.button`
    width: 100%;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    background: ${ props => props.selected ? props.theme.colorAccent : "#f2f2f2" };
    color: ${ props => props.selected ? "#f2f2f2" : props.theme.colorPrimary };
    border-radius: 10px;
    outline: none;
    :hover {
        opacity: 0.7;
    }
`;