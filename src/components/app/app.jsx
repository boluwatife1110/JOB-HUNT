"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    username: "",
    email: "",
    password: "",
    phone_number: "",

    user_type: "job_seeker", 
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/register/`,
        formData
      );

      if (response.status === 201 || response.status === 200) {
        router.push("/signin");
      }
    } catch (err) {
      const djangoError = err.response?.data 
        ? JSON.stringify(err.response.data) 
        : "An error occurred during registration.";
      
      setError(djangoError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex  min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Create Account 
        </h1>
        
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">

         
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />

           <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900"
          />
        <Select
  value={formData.user_type}
  onValueChange={(value) =>
    setFormData((prev) => ({
      ...prev,
      user_type: value,
    }))
  }
>
  <SelectTrigger className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:ring-2 focus:ring-amber-500">
    <SelectValue placeholder="Select user type" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="job_seeker">Job Seeker</SelectItem>
    <SelectItem value="recruiter">Recruiter</SelectItem>
  </SelectContent>
</Select>

          <button 
            type="submit" 
            disabled={loading} 
            className={`rounded-md p-3 font-semibold text-white transition-colors ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-amber-600 hover:bg-amber-700"
            }`}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        {error && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600 break-words">
            <span className="font-bold">Error:</span> {error}
          </div>
        )}
         <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-amber-600 cursor-pointer hover:underline"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>



  );
};

export default RegisterPage;