import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    margin: 5vh 0;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5vh;
`;

export const NoteTitleField = styled.input`
    outline none;
    background: #fff;
    padding: 5px 10px;
    flex: 1;
    margin: 0 2rem;
    border-radius: 10px;
    outline: none;
    border: 0.5px solid ${ props => props.theme.colorPrimary };
`;

export const Title = styled.h2`
    
`;

export const AddBtn = styled.button`
    padding: 5px 20px;
    border: none;
    border-radius: 10px;
    background: ${ props => props.theme.colorAccent };
    color: #f2f2f2;
    font-size: 18px;
    outline: none;
    :hover {
        opacity: 0.7;
    }
`;