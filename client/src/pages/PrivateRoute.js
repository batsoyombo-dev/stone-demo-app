import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const PrivateRoute = ({ children, ...rest }) => {
    const { authState } = useContext(AuthContext);
    console.log("dwqdw")
    return (
        <Route
            { ...rest }
            render={ ({ location }) =>
                authState.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: location }
                        }} />
                )
            } />
    )
}

export default PrivateRoute;