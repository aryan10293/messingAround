import React from 'react';
import Navbar from '../components/Navbar';

const SignIn: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-in logic here

        const formData = {
          email: email,
          password: password,
        }

        const response = await fetch('http://localhost:2050/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }); 

        const result = await response.json();
        console.log(result);
    }
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left promo / illustration */}
          <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-green-500 to-blue-500 text-white">
            <h3 className="text-2xl font-bold">Welcome back to NutriFlow</h3>
            <p className="mt-4 text-sm opacity-95">
              Sign in to continue your nutrition journey — personalized meal plans, tracking, and expert guidance.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full mr-3">✓</span>
                Personalized meal plans
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full mr-3">✓</span>
                Macro & calorie tracking
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full mr-3">✓</span>
                Progress analytics & insights
              </li>
            </ul>

            <div className="mt-6 text-sm opacity-90">
              <p>New here?</p>
              <a href="/signup" className="mt-2 inline-block text-white font-semibold underline">
                Create an account
              </a>
            </div>
          </div>

          {/* Right sign-in form */}
          <div className="p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Sign in to your account</h2>
            <p className="mt-1 text-sm text-gray-600">Enter your email and password to access your dashboard.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" action="#" method="POST" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                    onChange={(e) => {setEmail(e.target.value)}}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2"
                />
              </div>

              <div>
                <label htmlFor="password"  className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                    onChange={(e) => {setPassword(e.target.value)}}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-400"
                  />
                  <label htmlFor="remember" className="ml-3 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="/forgot" className="font-medium text-green-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium shadow"
                >
                  Sign in
                </button>
              </div>

              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-200" />
                <span className="mx-4 text-xs text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-200" />
              </div>

              <p className="text-xs text-gray-500 text-center">
                Don't have an account?{' '}
                <a href="/signup" className="text-green-600 underline">
                  Create one
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
