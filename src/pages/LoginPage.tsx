import React, {useEffect, useState} from 'react';
import { InputField } from './../common';
import { fetchUsers } from '../features/usersSlice.ts';
import {useDispatch, useSelector} from "react-redux";
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleLogin = () => {
        if (loading) {
            setErrorMessage('Loading user data, please wait...');
            return;
        }

        if (error) {
            setErrorMessage('An error occurred while fetching user data.');
            return;
        }

        const userExists = users.some((user: any) => user.username === username);

        if (userExists) {
            alert('Login successful!');
            login();
            navigate('/login');
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid username or password.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>

                <div className="mb-6">
                    <InputField
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-6">
                    <InputField
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {errorMessage && (
                    <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
                )}

                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;