import { useState, useCallback, useContext } from 'react';
import { AuthContext } from "../../../context/auth.context";
import Form from "../Form";

const Register = () => {

    const { authState, handleRegisterRequest } = useContext(AuthContext);

    const [ registerState, setRegisterState ] = useState({
        username: "",
        email: "",
        password: "",
        password1: ""
    })

    const handleRegisterChange = useCallback(e => {
        setRegisterState({
            ...registerState,
            [ e.target.name ]: e.target.value
        })
    }, [ registerState ])

    

    const handleRegisterSubmit = useCallback(e => {
        e.preventDefault();
        if(registerState.email.length === 0 
            || registerState.password.length === 0
            || registerState.password1.length === 0
            || registerState.username.length === 0)
            return;
        
        if(registerState.password.length < 6)
            return;

        if(registerState.password !== registerState.password1)
            return;

        delete registerState.password1;
        handleRegisterRequest(registerState);

    }, [ registerState, handleRegisterRequest ])

    return (
        <Form 
            styleCustom={{ "width": "40%" }} 
            onSubmit={ handleRegisterSubmit }>
            <Form.Title>Register</Form.Title>
            <Form.Group>
                <Form.TextField type="text" name="username" placeholder="Username..." value={ registerState.username } onChange={ handleRegisterChange } />
            </Form.Group>
            <Form.Group>
                <Form.TextField type="email" name="email" placeholder="Email..." value={ registerState.email } onChange={ handleRegisterChange } />
            </Form.Group>
            <Form.Group>
                <Form.TextField type="password" name="password" placeholder="Password..." value={ registerState.password } onChange={ handleRegisterChange } />
            </Form.Group>
            <Form.Group>
                <Form.TextField type="password" name="password1" placeholder="Password (Again)..." value={ registerState.password1 } onChange={ handleRegisterChange } />
            </Form.Group>
            <Form.Button type="submit">Let's Start</Form.Button>
        </Form>
    )
}

export default Register;