import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login validation or submit data to backend for processing
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className='pl-2 z-0 fixed' style={{marginTop: '2vh', marginBottom: 'auto', marginLeft: '73.5vw'}}>
    <div className="flex justify-end items-center h-screen mr-2">
      <div className="h-auto" style = {{width: '24vw'}}>
        <div className="bg-gray-200 rounded-lg shadow-lg p-6">
          <h1 className="text-xl font-bold mb-3">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-1 border border-gray-300 hover:border-blue-400 rounded"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block mb-1">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-1 border border-gray-300 hover:border-blue-400 rounded"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="flex items-center mb-3">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button
              type="submit"
              className="w-full py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-3">
            No account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
