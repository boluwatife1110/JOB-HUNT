"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();

  // ✅ Use EMAIL instead of username
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Debug (remove later)
      console.log("Sending:", credentials);

      const response = await axios.post(
        "http://127.0.0.1:8000/users/signin/",
        credentials
      );

      // Save tokens
     localStorage.setItem("access_token", response.data.access_token);
localStorage.setItem("refresh_token", response.data.refresh_token);

      // Optional: save user_type if returned
      if (response.data.user_type) {
        localStorage.setItem("user_type", response.data.user_type);
      }

      console.log("Login Successful!");

      // Redirect
      router.push("/profile/");

    } catch (err) {
      console.log("Error:", err.response?.data);

      const message =
        err.response?.data?.detail ||
        err.response?.data?.email?.[0] ||
        err.response?.data?.non_field_errors?.[0] ||
        "Invalid email or password";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Welcome Back 
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`rounded-md p-3 font-semibold text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-amber-600 hover:bg-amber-700"
            }`}
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-amber-600 cursor-pointer hover:underline"
            onClick={() => router.push("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;