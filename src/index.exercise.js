import React, {Fragment, useCallback} from 'react';
import {createRoot} from "react-dom/client";
import {Logo} from "./components/logo";
import '@reach/dialog/styles.css'
import {Dialog} from "@reach/dialog";

const LoginForm = ({onSubmit, buttonText}) => {
    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        })
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br/>
        <input type="text" id="username" name="username"/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password" name="password"/><br/>
        <button type="submit" className="close-button">{buttonText}</button>
    </form>
}

const App = () => {
    const [showDialog, setShowDialog] = React.useState(false);
    const [whichModal, setWhichModal] = React.useState("none");
    function handleLoginButtonClick() {
        setWhichModal("login");
        setShowDialog(true);
    }

    const handleLoginSubmit = useCallback((formData) => {
        setShowDialog(false);
        console.log('login', formData)
    }, [setShowDialog]);

    function handleRegisterButtonClick() {
        setWhichModal("register");
        setShowDialog(true);
    }

    const handleRegisterSubmit = useCallback((formData) => {
        setShowDialog(false);
        console.log('register', formData)
    }, [setShowDialog]);

    return <Fragment>
        <Logo></Logo>
        <h1>Bookshelf</h1>
        <div>
            <button onClick={handleLoginButtonClick}>Login</button>
        </div>
        <div>
            <button onClick={handleRegisterButtonClick}>Register</button>
        </div>
        <Dialog aria-label="login form" isOpen={showDialog && whichModal === "login"} onDismiss={handleLoginSubmit}>
            <LoginForm onSubmit={handleLoginSubmit} buttonText="Login"/>
        </Dialog>

        <Dialog aria-label="register form" isOpen={showDialog && whichModal === "register"} onDismiss={handleRegisterSubmit}>
            <LoginForm onSubmit={handleRegisterSubmit} buttonText="Register"/>
        </Dialog>

    </Fragment>
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);