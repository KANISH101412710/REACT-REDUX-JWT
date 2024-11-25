import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2FuaXNoIEhpcnBhcmEiLCJlbWFpbCI6ImthbmlzaGg5OTA5QGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyMTEzMTk2LCJleHAiOjE3MzQ3MDUxOTZ9.ghqHlZkWfPavnCu5pYjKdB3EXQ6ZaKhuWEVeBlaiGM0"; 
        const user = { name: "Kanish Hirpara", email: "kanishh9909@gmail.com" };
        dispatch(login(user, token));
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default Login;

