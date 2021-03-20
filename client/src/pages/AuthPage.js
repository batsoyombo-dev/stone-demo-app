import { useContext } from 'react';
import ContentContainer from "../components/other/ContentContainer"
import { AuthContext } from '../context/auth.context';
import { Redirect } from 'react-router-dom';
import Spinner from '../components/other/Spinner';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const AuthPage = () => {
    const { authState } = useContext(AuthContext);

    if(authState.isAuthenticated)
        return <Redirect to={{
                        pathname: "/"
                    }} />

    if(authState.isLoading)
        return (
            <div style={{ display: "flex", alignItems: "center", width: "100%", height: "100vh", justifyContent: "center" }}>
                <div>
                    <Spinner />
                </div>
            </div>
        )

    return (
        <ContentContainer 
            styleCustom={{ 
                "display": "flex",
                "justify-content": "center",
                "align-items": "center",
                "height": "100vh",
                "flex-direction": "column"
            }}>
            <ContentContainer.Title>stone</ContentContainer.Title>
            <ContentContainer.Inner styleCustom={{ "display": "flex", "width": "100%", "justify-content": "space-between" }}>
                <Login />
                <Register />
            </ContentContainer.Inner>
        </ContentContainer>
    )
}

export default AuthPage