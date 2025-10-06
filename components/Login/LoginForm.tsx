'use client';

import { useState } from 'react';
import { Input } from '../ui/input';

function LoginForm() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    return (
            <div className="w-full max-w-xl p-6">
                {/* Header */}
                <h2 className="text-2xl font-bold text-center mb-6 ">
                    Sign-in to your account
                </h2>
                <hr />
                <br />

                <form>
                    <div className="mb-4">
                        
                        <Input
                            type="text"
                            id="text"
                            label="Username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-5 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <Input
                            type="password"
                            id="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="text-black-400 mb-4">
                        <h5 className="text-center">
                            Don't have account yet?{" "}
                            <strong>
                                <a
                                    href="/register"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Register
                                </a>
                            </strong>{" "}
                            here!
                        </h5>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
    );
}

export default LoginForm;
