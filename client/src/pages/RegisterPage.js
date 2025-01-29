import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const RegisterPage = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    profile_pic: '',
  });
  const [uploadPhoto, setUploadPhoto] = useState('');
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    const uploadPhoto = await uploadFile(file);
    setUploadPhoto(file);

    setData((prev) => ({
      ...prev,
      profile_pic: uploadPhoto?.url,
    }));
  };

  const handleClearUploadPhoto = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setUploadPhoto(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`;

    try {
      const response = await axios.post(URL, data);
      console.log('response', response);

      // Show success message using toast
      toast.success(response.data.message || "Registration successful!");

      if (response.data.success) {
        setData({
          name: '',
          email: '',
          password: '',
          profile_pic: '',
        });

        navigate('/email');
      }
    } catch (error) {
      console.error('Error:', error);

      // Show error message using toast
      toast.error(error?.response?.data?.message || 'An unknown error occurred.');
    }
    console.log('data', data);
  };

  return (
    <div className="mt-5">
      <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto shadow-md">
        <h3 className="text-center text-2xl font-bold text-gray-700">Welcome to Chat App!</h3>

        <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-slate-100 px-2 py-1 focus:outline-primary border border-gray-300 rounded"
              value={data.name}
              onChange={handleOnChange}
              required
            />
          </div>

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

          <div className="flex flex-col gap-1">
            <label htmlFor="profile_pic">
              Photo:
              <div className="h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer px-2">
                <p className="text-sm max-w-[300px] text-ellipsis line-clamp-1">
                  {uploadPhoto?.name ? uploadPhoto?.name : 'Upload profile photo'}
                </p>
                {uploadPhoto?.name && (
                  <button
                    className="text-lg ml-2 hover:text-red-600"
                    onClick={handleClearUploadPhoto}
                  >
                    <IoClose />
                  </button>
                )}
              </div>
            </label>

            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              className="hidden"
              onChange={handleUploadPhoto}
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-lg px-4 py-2 hover:bg-secondary rounded mt-2 font-bold text-black leading-relaxed tracking-wide w-full border border-gray-300"
          >
            Register
          </button>
        </form>

        <p className="my-3 text-center">
          Already have an account?{' '}
          <Link to="/email" className="text-blue-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>

      {/* Toast Container */}
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            duration: 4000,
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            duration: 4000,
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </div>
  );
};

export default RegisterPage;
