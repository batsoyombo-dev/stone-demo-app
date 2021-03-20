// Other imports
import { useEffect } from 'react';
import AuthContextProvider from './context/auth.context';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
// My imports
import AuthPage from './pages/AuthPage';
import PrivateRoute from './pages/PrivateRoute';
import NotesPage from './pages/NotesPage';
import './App.css'
import NoteContainer from './components/notes/NoteContainer';

const theme = {
    colorPrimary: "#3d3f56",
    colorAccent: "#6c63ff"
}

const App = () => {

    return (
        <AuthContextProvider>
            <ThemeProvider theme={ theme }>
                <Router>
                    <Switch>
                        <PrivateRoute exact path="/">
                            <NotesPage />
                        </PrivateRoute>
                        <Route exact path="/auth">
                            <AuthPage />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </AuthContextProvider>
    )
}

export default App;