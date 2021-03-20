import React from 'react';
import { Button, Container, Group, TextField, Title } from "./styles";

const Form = ({ children, ...props }) => {
    console.log("dwdwqwq");
    return (
        <Container { ...props }>
            { children }
        </Container>
    )
}

Form.Title = Title;
Form.TextField = TextField
Form.Group = Group
Form.Button = Button

export default Form;