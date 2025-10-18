import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface RegisterProps {
  onNavigate: (page: 'home' | 'login' | 'register') => void;
}

export const Register = ({ onNavigate }: RegisterProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image and Branding */}
      <div className="flex-1 relative bg-gradient-to-br from-cyan-100 via-green-100 to-cyan-200 flex items-center justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-16 right-24 w-40 h-40 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-24 left-20 w-28 h-28 bg-white/15 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-8 w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-800">SecureNumber</span>
          </button>
        </div>

        {/* Main illustration area */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Person illustration placeholder */}
          <div className="relative">
            {/* Person silhouette */}
            <div className="w-80 h-96 relative">
              {/* Head */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-amber-200 rounded-full"></div>
              
              {/* Body */}
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-32 h-48 bg-orange-400 rounded-t-3xl"></div>
              
              {/* Arms */}
              <div className="absolute top-32 left-8 w-16 h-32 bg-orange-400 rounded-full transform -rotate-12"></div>
              <div className="absolute top-32 right-8 w-16 h-32 bg-orange-400 rounded-full transform rotate-12"></div>
              
              {/* Phone in hand */}
              <div className="absolute top-40 right-12 w-12 h-20 bg-gray-800 rounded-lg transform rotate-12 shadow-lg">
                <div className="w-full h-full bg-blue-400 rounded-lg p-1">
                  <div className="w-full h-full bg-white rounded-md"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-12 right-4 w-20 h-16 bg-blue-500 rounded-2xl transform rotate-12 shadow-lg flex items-center justify-center">
              <div className="w-12 h-8 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg"></div>
            </div>
            
            {/* Additional decorative SIM-like element */}
            <div className="absolute bottom-8 left-4 w-16 h-12 bg-green-500 rounded-lg transform -rotate-12 shadow-lg">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-yellow-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Sign up to get started</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Choose a username"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full"
              />
            </div>

            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold">
              Create Account
            </Button>
          </form>

          <div className="text-center">
            <button className="text-cyan-500 hover:text-cyan-600 font-medium flex items-center justify-center gap-2 mx-auto">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button 
              onClick={() => onNavigate('login')}
              className="text-cyan-500 hover:text-cyan-600 font-medium"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};