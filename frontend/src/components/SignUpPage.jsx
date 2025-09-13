import React, { useState } from "react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // TODO: Add signup API call
    console.log("Sign up attempted with", { name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-yellow-900"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-red-900 text-center">
          Sign Up
        </h2>

        <label className="block mb-2 font-semibold text-lime-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700"
          placeholder="Enter your full name"
        />

        <label className="block mb-2 font-semibold text-lime-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700"
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-semibold text-lime-700">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700"
          placeholder="Create a password"
        />

        <label className="block mb-2 font-semibold text-lime-700">
          Confirm Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-3 mb-6 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700"
          placeholder="Confirm your password"
        />

        <button
          type="submit"
          className="w-full bg-lime-600 text-gray-50 py-3 rounded-md font-bold border border-yellow-900 hover:bg-red-900 hover:text-yellow-50 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;