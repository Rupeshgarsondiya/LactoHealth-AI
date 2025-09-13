import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Sample data for countries, states, and cities
const locationData = {
  "India": {
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
    "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Karnal"]
  },
  "USA": {
    "California": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Fresno"],
    "Texas": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
    "New York": ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse"],
    "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"]
  },
  "Brazil": {
    "São Paulo": ["São Paulo", "Campinas", "São Bernardo", "Santo André", "Osasco"],
    "Rio de Janeiro": ["Rio de Janeiro", "Niterói", "Duque de Caxias", "Nova Iguaçu", "Belford Roxo"],
    "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"]
  }
};

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [village, setVillage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  
  // NEW: Add loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  // Update states when country changes
  useEffect(() => {
    if (country && locationData[country]) {
      setAvailableStates(Object.keys(locationData[country]));
      setState("");
      setCity("");
      setAvailableCities([]);
    } else {
      setAvailableStates([]);
      setAvailableCities([]);
    }
  }, [country]);

  // Update cities when state changes
  useEffect(() => {
    if (country && state && locationData[country]?.[state]) {
      setAvailableCities(locationData[country][state]);
      setCity("");
    } else {
      setAvailableCities([]);
    }
  }, [state, country]);

  // NEW: Form validation function
  const validateForm = () => {
    if (!name.trim()) {
      setError("Full name is required");
      return false;
    }

    if (!mobile.trim()) {
      setError("Mobile number is required");
      return false;
    } else if (!/^[+]?[1-9]\d{1,14}$/.test(mobile.replace(/\s/g, ""))) {
      setError("Please enter a valid mobile number");
      return false;
    }

    if (!country) {
      setError("Please select your country");
      return false;
    }

    if (!state) {
      setError("Please select your state");
      return false;
    }

    if (!city) {
      setError("Please select your city");
      return false;
    }

    if (!password) {
      setError("Password is required");
      return false;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }

    return true;
  };

  // FIXED: Replace the old handleSubmit with API integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Validate form first
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Prepare data for API call
      const signupData = {
        name: name,
        email: email || null, // Send null if empty
        mobile: mobile,
        country: country,
        state: state,
        city: city,
        village: village || null, // Send null if empty
        password: password
      };

      console.log("Sending signup data:", signupData); // Debug log

      // Make API call to backend
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      console.log("Received response:", data); // Debug log

      if (response.ok && data.success) {
        // Success! Store user data and redirect
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isAuthenticated", "true");
        
        // Show success message
        alert("Account created successfully! Welcome to LactoHealth AI!");
        
        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        // Handle error response from server
        setError(data.detail || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setError("Network error. Please check if the backend server is running on http://localhost:8000");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-yellow-900"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-red-900 text-center">
          Sign Up
        </h2>

        {/* NEW: Error message display */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <label className="block mb-2 font-semibold text-lime-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Enter your full name"
        />

        <label className="block mb-2 font-semibold text-lime-700">Email (Optional):</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Enter your email"
        />

        <label className="block mb-2 font-semibold text-lime-700">Mobile Number:</label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Enter your mobile number"
        />

        <label className="block mb-2 font-semibold text-lime-700">Country:</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
        >
          <option value="">Select your country</option>
          {Object.keys(locationData).map(countryName => (
            <option key={countryName} value={countryName}>{countryName}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-lime-700">State:</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
          disabled={!country || isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select your state</option>
          {availableStates.map(stateName => (
            <option key={stateName} value={stateName}>{stateName}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-lime-700">City:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          disabled={!state || isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select your city</option>
          {availableCities.map(cityName => (
            <option key={cityName} value={cityName}>{cityName}</option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-lime-700">Village (Optional):</label>
        <input
          type="text"
          value={village}
          onChange={(e) => setVillage(e.target.value)}
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Enter your village/area"
        />

        <label className="block mb-2 font-semibold text-lime-700">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 mb-4 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Create a password (min 8 characters)"
        />

        <label className="block mb-2 font-semibold text-lime-700">
          Confirm Password:
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
          className="w-full p-3 mb-6 border border-yellow-400 rounded bg-yellow-50 text-gray-900 placeholder-yellow-900 focus:ring-lime-700 focus:border-lime-700 disabled:opacity-50"
          placeholder="Confirm your password"
        />

        {/* UPDATED: Button with loading state */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-lime-600 text-gray-50 py-3 rounded-md font-bold border border-yellow-900 hover:bg-red-900 hover:text-yellow-50 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Creating Account...
            </div>
          ) : (
            "Sign Up"
          )}
        </button>

        {/* NEW: Navigation to login */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-lime-700 font-semibold hover:text-lime-800 transition-colors"
            >
              Login here
            </button>
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-600">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-lime-700 font-semibold hover:text-lime-800 transition-colors"
            >
              Back
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
