import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {

        if(email !== "" && password !== ""){
            if(email === "test@gmail.com" && password === "123"){
                localStorage.setItem("token", "skdnknsdnsdssdnnsfksd");
                navigate("/");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            navigate("/");
        }
    }, []);

    return (
        <div className='m-10'>
            <h1>Login Form</h1>
            <div>
                <input placeholder='email...' className='border p-2 mt-2' onChange={e => setEmail(e.target.value)} /><br />
                <input placeholder='password...' className='border p-2 mt-2' onChange={e => setPassword(e.target.value)} /><br />
                <button className='border p-2 mt-2 active:bg-slate-300 bg-green-500 text-white' onClick={login}>Login</button>
            </div></div>
    )
}

export default Login