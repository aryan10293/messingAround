import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function SignUp() { 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [age, setAge] = React.useState("");

    const handleData = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = {
          firstName:firstName,
          lastName: lastName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          age: age
        }

        const idk = await fetch('http://localhost:2050/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }); 

        const result = await idk.json();
        console.log(result);

    }
    return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left promo panel */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-green-500 to-blue-500 p-10 flex-col justify-center text-white">
            <h3 className="text-2xl font-bold">Welcome to NutriFlow</h3>
            <p className="mt-4 text-sm opacity-95">
              Build healthier habits with personalized meal plans, easy tracking and expert guidance.
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
                Recipe library & grocery lists
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full mr-3">✓</span>
                Progress analytics
              </li>
            </ul>

            <div className="mt-6 text-sm opacity-90">
              <p>Already have an account?</p>
              <Link to="/login" className="mt-2 inline-block text-white font-semibold underline">
                Log in
              </Link>
            </div>
          </div>

          {/* Right form panel (UI only) */}
          <div className="w-full md:w-1/2 p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-900">Create your account</h2>
            <p className="mt-1 text-sm text-gray-600">Enter basic info to get tailored nutrition guidance.</p>

            <form className="mt-6 space-y-5" onSubmit={handleData}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First name</label>
                  <input onChange={(e) => {setFirstName(e.target.value)}} name="firstName" placeholder="Jane" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Last name</label>
                  <input onChange={(e) => {setLastName(e.target.value)}} name="lastName" placeholder="Doe" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="email" onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="you@example.com" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input name="password" onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="••••••••" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Confirm password</label>
                  <input name="confirmPassword" onChange={(e) => {setConfirmPassword(e.target.value)}} type="password" placeholder="••••••••" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input name="age" type="number" placeholder="30" onChange={(e) => {setAge(e.target.value)}} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700">Height</label>
                  <div className="mt-1 flex gap-2">
                    <input name="height" placeholder="170" className="block w-1/2 rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                    <select name="heightUnit" className="block w-1/2 rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2">
                      <option>cm</option>
                      <option>in</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Weight</label>
                  <div className="mt-1 flex gap-2">
                    <input name="weight" placeholder="70" className="block w-1/2 rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2" />
                    <select name="weightUnit" className="block w-1/2 rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2">
                      <option>kg</option>
                      <option>lb</option>
                    </select>
                  </div>
                </div>*/}
              </div> 

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Activity level</label>
                  <select name="activity" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2">
                    <option>Choose...</option>
                    <option>Sedentary</option>
                    <option>Lightly active</option>
                    <option>Moderately active</option>
                    <option>Very active</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Primary goal</label>
                  <select name="goal" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-green-400 focus:border-transparent px-3 py-2">
                    <option>Choose...</option>
                    <option>Lose weight</option>
                    <option>Maintain weight</option>
                    <option>Gain muscle</option>
                    <option>Improve energy</option>
                  </select>
                </div>
              </div> */}


              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input id="terms" name="terms" type="checkbox" className="h-4 w-4 rounded text-green-600 border-gray-300 focus:ring-green-400" />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                    I agree to the <a href="/privacy" className="text-green-600 underline">privacy policy</a>
                  </label>
                </div>

                <a href="/login" className="text-sm text-gray-600 hover:underline">Already have an account?</a>
              </div>

              <div>
                <button  type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium shadow">
                  Create account
                </button>
              </div>
            </form>

            <p className="mt-4 text-xs text-gray-400 text-center">
              By creating an account you agree to our terms. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

};

export default SignUp


 
// ...existing code...