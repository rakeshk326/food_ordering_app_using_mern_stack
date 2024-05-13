import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import YummyLogo from '../Images/YummyLogo.png';
import { cartContext } from '../Contexts/CartContext';

const Login = () => {

  const { userDetails } = useContext(cartContext);
  const [userData, setUserData] = useState({
    fullName: '',
    age: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
    localStorage.setItem('userData', JSON.stringify({ ...userData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    userDetails((prevUserDetails) => ({ ...prevUserDetails, ...userData }));
  };  

  return (
    <div className="flex flex-col justify-center min-h-screen items-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-12 lg:h-16 w-auto"
          src={YummyLogo}
          alt="YummyLogo"
        />
        <h2 className="mt-5 md:mt-7 text-center text-xl md:text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register with your details
        </h2>
      </div>

      <div className="mt-5 md:mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleFormSubmit}>

          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={userData.fullName}
                onChange={handleInputChange}
                autoComplete="name"
                required
                className="block w-full rounded-md bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                id="age"
                name="age"
                type="number"
                value={userData.age}
                onChange={handleInputChange}
                autoComplete="age"
                required
                className="block w-full rounded-md bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phone"
                type="tel"
                value={userData.phone}
                onChange={handleInputChange}
                autoComplete="tel"
                required
                className="block w-full rounded-md bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={userData.address}
                onChange={handleInputChange}
                autoComplete="address"
                required
                className="block w-full rounded-md bg-white border border-gray-300 py-1.5 px-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <Link to="/main">Register</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;