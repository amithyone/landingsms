import React from "react";
import { Button } from "../../components/ui/button";

interface MacbookProProps {
  onNavigate: (page: 'home' | 'login' | 'register') => void;
}

export const MacbookPro = ({ onNavigate }: MacbookProProps): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-20 py-6 bg-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="ml-3 text-xl font-bold text-white">SecureNumber</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={() => onNavigate('register')}
            className="px-6 py-2 rounded-full border border-white/40 bg-transparent hover:bg-white/10 text-white font-medium transition-all duration-200"
          >
            Sign Up
          </Button>
          <Button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-all duration-200">
            onClick={() => onNavigate('login')}
            Sign in
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white overflow-hidden pt-20">
        {/* Cloud decorations */}
        <div className="absolute top-10 right-20 w-32 h-20 bg-white/20 rounded-full blur-sm"></div>
        <div className="absolute top-32 right-40 w-24 h-16 bg-white/15 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-10 w-40 h-24 bg-white/10 rounded-full blur-sm"></div>
        
        <div className="container mx-auto px-6 lg:px-20 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Not comfortable sharing your phone number? — Use Ours!
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Access 900+ services without revealing your personal phone number. Get SMS and OTP messages from any service.
              </p>
              <Button 
                onClick={() => onNavigate('register')}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold text-lg"
              >
                Get Started For Free
              </Button>
            </div>
            
            {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Hand holding phone illustration */}
                <div className="w-80 h-96 relative">
                  {/* Hand */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-amber-100 rounded-t-full"></div>
                  
                  {/* Phone */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-80 bg-gray-900 rounded-3xl p-1 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-3xl relative overflow-hidden">
                      {/* Status bar */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                      
                      {/* Screen content */}
                      <div className="p-6 pt-12 space-y-4">
                        <div className="bg-orange-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                          <p className="text-sm font-medium">Verification Code</p>
                          <p className="text-xs opacity-90">Your code: 123456</p>
                        </div>
                        <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-br-md max-w-[70%]">
                          <p className="text-sm">✓ Received</p>
                        </div>
                        <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                          <p className="text-sm font-medium">PayPal Security</p>
                          <p className="text-xs opacity-90">Code: 789012</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating notification badges */}
                <div className="absolute top-10 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  New SMS
                </div>
                <div className="absolute bottom-32 -left-8 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  OTP Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60">
            <div className="text-2xl font-bold text-gray-600">Google</div>
            <div className="text-2xl font-bold text-gray-600">WhatsApp</div>
            <div className="text-2xl font-bold text-gray-600">Hinge</div>
            <div className="text-2xl font-bold text-gray-600">Tinder</div>
            <div className="text-2xl font-bold text-gray-600">Uber</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Global virtual numbers, instant data<br />
              & airtime top-ups — all in one.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether it's verifying online, topping up data and airtime, we make everything seamless, secure, and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Get Virtual Number Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Virtual Number</h3>
                <p className="text-gray-600 mb-6">
                  Get virtual numbers from multiple countries for SMS verification and privacy protection.
                </p>
                <Button 
                  onClick={() => onNavigate('register')}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Get Number
                </Button>
              </div>
              {/* Decorative phone icon */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-green-200 rounded-full opacity-30"></div>
              <div className="absolute right-8 bottom-8 text-6xl opacity-20">📱</div>
            </div>

            {/* Buy Data Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy Data, Airtime and Bill Payment</h3>
                <p className="text-gray-600 mb-6">
                  Top up your mobile data, airtime, and pay bills instantly across multiple networks.
                </p>
                <Button 
                  onClick={() => onNavigate('register')}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  Buy Data Now
                </Button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
              <div className="absolute right-8 bottom-8 text-6xl opacity-20">💳</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Numbers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2">Real Numbers for</h3>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Instant OTP and SMS verification, stay private and secured.
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Verify</h4>
                    <p className="text-gray-600">Receive SMS and voice verification calls from any service without revealing your personal number.</p>
                    <button className="text-blue-500 font-medium text-sm mt-1 hover:underline">Learn More</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secured</h4>
                    <p className="text-gray-600">Your personal information stays completely private. We handle all verification processes securely.</p>
                    <button className="text-blue-500 font-medium text-sm mt-1 hover:underline">Learn More</button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global</h4>
                    <p className="text-gray-600">Access virtual numbers from multiple countries and use them with 900+ services worldwide.</p>
                    <button className="text-blue-500 font-medium text-sm mt-1 hover:underline">Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Person with phone image placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                {/* Person silhouette */}
                <div className="w-48 h-72 bg-gradient-to-b from-blue-300 to-blue-400 rounded-t-full relative">
                  {/* Phone in hand */}
                  <div className="absolute bottom-16 right-4 w-12 h-20 bg-gray-800 rounded-lg"></div>
                  <div className="absolute bottom-16 right-4 w-12 h-20 bg-blue-400 rounded-lg transform rotate-12"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-12 left-12 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute top-20 right-16 w-8 h-8 bg-white/25 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get started today
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sign up in quick, free and easy. We respect your privacy.<br />
            Your account will be ready to use within seconds.
          </p>
          <Button 
            onClick={() => onNavigate('register')}
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-full"
          >
            Sign Up
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16">
            Loved by users<br />
            worldwide.
          </h2>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by thousands of individuals and businesses who value privacy, speed, and reliability.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">"I have been using SMS for a WhatsApp number for several months now. The service is reliable, fast, and the customer support is excellent."</p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">"This is by far the best SMS service I have used. It's fast, OTP verification is instant, and I love the support team is great."</p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Chen</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 mb-6">"Got a temporary USA Number on Facebook and it worked perfectly. Great service, highly recommend to others."</p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <div className="font-semibold text-gray-900">David Kim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked<br />
              Questions.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">What is SecureNumber?</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-4">
                SecureNumber is a service that provides virtual phone numbers for SMS and voice verification. You can use our numbers to verify accounts on various platforms without revealing your personal phone number.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Are the numbers real?</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">How often are numbers updated?</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">How secure is it?</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">How is this different from Google Voice or Twilio?</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-400 to-green-400">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Stay Private.<br />
                Stay Verified.
              </h2>
              <p className="text-xl text-white/90">
                Receive international numbers for SMS and voice verification—secure, instant, and reliable. Start protecting your privacy today.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => onNavigate('login')}
                  className="px-6 py-3 bg-white text-teal-600 hover:bg-gray-100 rounded-full font-semibold"
                >
                  Sign in
                </Button>
                <Button 
                  onClick={() => onNavigate('register')}
                  className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold border-2 border-white/20"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            
            {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-3xl relative overflow-hidden">
                    {/* Status bar */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-300 rounded-full"></div>
                    
                    {/* Screen content */}
                    <div className="p-4 pt-12 space-y-3">
                      <div className="bg-orange-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                        <p className="text-sm font-medium">PayPal</p>
                        <p className="text-xs opacity-90">Your verification code is 123456</p>
                      </div>
                      <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                        <p className="text-sm font-medium">WhatsApp</p>
                        <p className="text-xs opacity-90">Code: 789012</p>
                      </div>
                      <div className="bg-green-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                        <p className="text-sm font-medium">Google</p>
                        <p className="text-xs opacity-90">Verification: 456789</p>
                      </div>
                      <div className="bg-purple-500 text-white p-3 rounded-2xl rounded-bl-md max-w-[80%] ml-auto">
                        <p className="text-sm font-medium">Instagram</p>
                        <p className="text-xs opacity-90">Your code: 321654</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="ml-3 text-xl font-bold">SecureNumber</span>
              </div>
              <p className="text-gray-400">
                We are the team of real-time SMS verification and virtual number service providers.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs">📧</span>
                </div>
                <span className="text-sm text-gray-400">hello@securenumber.com</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white text-sm">Get Numbers</a></li>
                <li><a href="#" className="hover:text-white text-sm">Buy Data</a></li>
                <li><a href="#" className="hover:text-white text-sm">Airtime</a></li>
                <li><a href="#" className="hover:text-white text-sm">Bill Payment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="hover:text-white text-sm">Help Center</a></li>
                <li><a href="#" className="hover:text-white text-sm">API Docs</a></li>
                <li><a href="#" className="hover:text-white text-sm">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white text-sm">About</a></li>
                <li><a href="#" className="hover:text-white text-sm">Privacy</a></li>
                <li><a href="#" className="hover:text-white text-sm">Terms</a></li>
                <li><a href="#" className="hover:text-white text-sm">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white text-sm">Help</a></li>
                <li><a href="#" className="hover:text-white text-sm">Support</a></li>
                <li><a href="#" className="hover:text-white text-sm">Community</a></li>
                <li><a href="#" className="hover:text-white text-sm">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2024 SecureNumber. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};