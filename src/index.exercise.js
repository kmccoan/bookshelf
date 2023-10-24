import React, {Fragment} from 'react';
import {createRoot} from "react-dom/client";
import {Logo} from "./components/logo";
import '@reach/dialog/styles.css'

const App = () => {
    function handleLogin() {
        alert("Login was clicked")
    }

    function handleRegister() {
        alert("Register was clicked")
    }

    return <Fragment>
        <Logo></Logo>
        <h1>Bookshelf</h1>
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
        </div>

    </Fragment>
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);