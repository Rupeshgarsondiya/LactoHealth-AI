import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic (API call)
    console.log("Login attempted with", { email, password });
  };

  return (

   <div className="min-h-screen flex items-center justify-center bg-yellow-50">
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-yellow-900"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-red-900 text-center">Login</h2>

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
        className="w-full p-3 mb-6 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700"
        placeholder="Enter your password"
      />

      <button
        type="submit"
        className="w-full bg-lime-600 text-gray-50 py-3 rounded-md font-bold border border-yellow-900 hover:bg-red-900 hover:text-yellow-50 transition duration-200"
      >
        Login
      </button>
    </form>
  </div>

  );
};

export default LoginPage;