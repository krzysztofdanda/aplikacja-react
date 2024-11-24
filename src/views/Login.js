import './Login.css';

import { useState } from 'react';

import axios from "axios";

const Login = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;


        setFormData({
            ...formData,
            [name]: target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://akademia108.pl/api/social-app/user/login", {
            username: formData.username,
            password: formData.password
        })
            .then((res) => {

                console.log(res.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="User name" value={formData.username} onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                <button className="btn">Login</button>
            </form>

        </div>
    );
}

export default Login;