import React from 'react';


function LandingPage() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Fuel Your Body Right</h1>
        <p className="text-lg md:text-xl">Discover personalized nutrition plans tailored to your needs.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">
          Get Started
        </button>
      </header>

      <section className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Personalized Meal Plans</h3>
            <p>Receive meal plans based on your dietary preferences and goals.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Expert Nutrition Advice</h3>
            <p>Get guidance from certified nutritionists and dietitians.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Track Your Progress</h3>
            <p>Monitor your calorie intake, macros, and overall progress.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Nutrition App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
