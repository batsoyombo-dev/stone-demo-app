import { useState, useCallback, useContext } from 'react';
import { AuthContext } from "../../../context/auth.context";
import Form from "../Form";

const Login = () => {

    const { authState, handleLoginRequest } = useContext(AuthContext);

    console.log(authState)

    const [ loginState, setLoginState ] = useState({
        email: "",
        password: ""
    });

    const handleLoginChange = useCallback(e => {
        setLoginState({
            ...loginState,
            [ e.target.name ]: e.target.value
        })
    }, [ loginState ])

    const handleLoginSubmit = useCallback(e => {
        e.preventDefault();
        if(loginState.email.length === 0 || loginState.password.length === 0)
            return;
        
        handleLoginRequest(loginState)

    }, [ loginState, handleLoginRequest ])

    return (
        <Form
            styleCustom={{ "width": "40%"  }} 
            onSubmit={ handleLoginSubmit }>
            <Form.Title>Login</Form.Title>
            <Form.Group>
                <Form.TextField type="email" name="email" placeholder="Email..." value={ loginState.email } onChange={ handleLoginChange } />
            </Form.Group>
            <Form.Group>
                <Form.TextField type="password" name="password" placeholder="Password..." value={ loginState.password } onChange={ handleLoginChange } />
            </Form.Group>
            <Form.Button type="submit">Let's Go</Form.Button>
        </Form>
    )
}

export default Login;