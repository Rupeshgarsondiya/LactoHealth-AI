import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginType, setLoginType] = useState(""); // "email" or "mobile"
  const [identifier, setIdentifier] = useState(""); // email or mobile value
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: identifier,
          password: password,
          login_type: loginType // Send login type to backend
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isAuthenticated", "true");
        
        // Show success message
        alert("Login successful! Welcome back to LactoHealth AI!");
        
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        // Handle error response
        setError(data.detail || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please check if the backend server is running.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToSelection = () => {
    setLoginType("");
    setIdentifier("");
    setPassword("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-sm border-2 border-yellow-900">
        <h2 className="text-3xl font-extrabold mb-6 text-red-900 text-center">Login</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        {/* Step 1: Choose login method */}
        {!loginType && (
          <div className="space-y-4">
            <p className="text-center text-gray-700 mb-6">Choose your login method:</p>
            
            <button
              type="button"
              onClick={() => setLoginType("email")}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-bold border border-yellow-900 hover:bg-blue-700 transition duration-200 flex items-center justify-center"
            >
              📧 Login with Email
            </button>
            
            <button
              type="button"
              onClick={() => setLoginType("mobile")}
              className="w-full bg-green-600 text-white py-3 rounded-md font-bold border border-yellow-900 hover:bg-green-700 transition duration-200 flex items-center justify-center"
            >
              📱 Login with Mobile
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-lime-700 font-semibold hover:text-lime-800 transition-colors"
                >
                  Sign up here
                </button>
              </p>
            </div>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full mt-4 bg-gray-200 text-gray-900 py-3 rounded-md font-bold border border-yellow-900 hover:bg-gray-300 transition duration-200"
            >
              Back
            </button>
          </div>
        )}

        {/* Step 2: Login form based on selected method */}
        {loginType && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">
                  Login with {loginType === "email" ? "📧 Email" : "📱 Mobile"}
                </span>
                <button
                  type="button"
                  onClick={handleBackToSelection}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Change method
                </button>
              </div>
            </div>

            <label className="block mb-2 font-semibold text-lime-700">
              {loginType === "email" ? "Email Address:" : "Mobile Number:"}
            </label>
            <input
              type={loginType === "email" ? "email" : "tel"}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              disabled={isLoading}
              className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
              placeholder={
                loginType === "email" 
                  ? "Enter your email address" 
                  : "Enter your mobile number"
              }
            />

            <label className="block mb-2 font-semibold text-lime-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="w-full p-3 mb-6 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
              placeholder="Enter your password"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-lime-600 text-gray-50 py-3 rounded-md font-bold border border-yellow-900 hover:bg-red-900 hover:text-yellow-50 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                "Login"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="text-lime-700 font-semibold hover:text-lime-800 transition-colors"
                >
                  Sign up here
                </button>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
