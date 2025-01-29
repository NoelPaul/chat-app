import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/login`;

    try {
      const response = await axios.post(URL, data, {
        withCredentials: true, // This ensures the token is set as an HTTP-only cookie
      });

      if (response.data?.success) {
        toast.success('Login successful!');
        // Redirect to a different page (e.g., dashboard or home)
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Error:', error);

      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto shadow-md">
        <h3 className="text-center text-2xl font-bold text-gray-700">Login</h3>

        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-slate-100 px-2 py-1 focus:outline-primary border border-gray-300 rounded"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="bg-slate-100 px-2 py-1 focus:outline-primary border border-gray-300 rounded"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-lg px-4 py-2 hover:bg-secondary rounded mt-2 font-bold text-black leading-relaxed tracking-wide w-full border border-gray-300"
          >
            Login
          </button>
        </form>

        <p className="my-3 text-center">
          Don't have an account?{' '}
          <span
            className="text-blue-500 font-semibold hover:underline cursor-pointer"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </div>

      {/* Toast Container */}
      <Toaster />
    </div>
  );
};

export default LoginPage;
