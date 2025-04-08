import React, { useState } from 'react';
import { BACKEND_URL } from '../utils';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ChevronRight } from 'lucide-react';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error);
        return;
      }
      
      // Success
      navigate('/login');
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gaming elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
        
        {/* Hexagon grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgxMHYxMEgwek0xMCAxMGgxMHYxMEgxMHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        
        {/* Card */}
        <div className="bg-gray-800 border border-red-500 border-opacity-20 rounded-xl shadow-2xl shadow-red-900/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-red-900/30 px-6 py-5">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <span className="mr-2">Create Your Account</span>
              <div className="h-1 w-1 rounded-full bg-red-500 animate-pulse"></div>
            </h2>
            <p className="text-gray-400 mt-1">Join the elite gaming community</p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSignup} className="p-6">
            {error && (
              <div className="mb-6 bg-red-900/20 border border-red-500/50 rounded-lg p-4 text-red-200 text-sm">
                {error}
              </div>
            )}
            
            {/* Name input */}
            <div className="mb-5">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-red-500 opacity-70" />
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 px-4 py-3 bg-gray-900/60 border border-red-500/30 focus:border-red-500 rounded-lg focus:ring-2 focus:ring-red-500/30 outline-none text-white transition duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
            
            {/* Email input */}
            <div className="mb-5">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-red-500 opacity-70" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-4 py-3 bg-gray-900/60 border border-red-500/30 focus:border-red-500 rounded-lg focus:ring-2 focus:ring-red-500/30 outline-none text-white transition duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            
            {/* Password input */}
            <div className="mb-6">
              <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-red-500 opacity-70" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-4 py-3 bg-gray-900/60 border border-red-500/30 focus:border-red-500 rounded-lg focus:ring-2 focus:ring-red-500/30 outline-none text-white transition duration-300"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>
            
            {/* Signup button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 cursor-pointer bg-red-600 text-white font-bold rounded-lg flex items-center justify-center transition duration-300 ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700 transform hover:scale-[0.99] active:scale-[0.97]'
              }`}
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Signup
                  <ChevronRight className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
            
            {/* Divider */}
            <div className="relative flex items-center my-6">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>
            
            {/* Social login */}
            <button
              type="button"
              className="w-full py-3 cursor-pointer bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center text-white hover:bg-gray-800 transition duration-300"
            >
              <img
                className="w-5 h-5 mr-3"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google logo"
              />
              Sign up with Google
            </button>
          </form>
          
          {/* Footer */}
          <div className="px-6 py-4 bg-gray-900/50 text-center border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-red-400 cursor-pointer hover:text-red-300 font-medium transition duration-300"
              >
                Login
              </button>
            </p>
          </div>
        </div>
        
        {/* Gaming footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="text-xs text-gray-600">©2025 GADGETTEHUB</span>
            <span className="text-xs text-gray-600">|</span>
            <span className="text-xs text-red-500">LEVEL UP YOUR GAME</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;