"use client";
import React, { useState,useEffect } from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full sm:w-[400px] bg-white p-8 rounded-lg shadow-2xl transform transition duration-500 hover:scale-105">
        <h2
          className="text-center text-3xl font-semibold text-black mb-6"
          data-aos="fade-up"
        >
          Login to Your Account
        </h2>

        <form className="space-y-6">
          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <input
              type="password"
              className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md focus:outline-none transform hover:scale-105 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">Don't have an account? </span>
          <a href="#" className="text-yellow-400">
            Sign up
          </a>
        </div>

        <div className="mt-8 text-center">
          <span className="text-gray-500">Or login with</span>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition duration-300"
              aria-label="Login with Google"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaGoogle />
            </button>
            <button
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition duration-300"
              aria-label="Login with Facebook"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <FaFacebookF />
            </button>
            <button
              className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-300 transition duration-300"
              aria-label="Login with Twitter"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
