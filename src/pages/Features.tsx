import React, { useState, type JSX } from 'react';
import Navbar from '../components/Navbar';

const features = [
	{
		title: 'Personalized Meal Plans',
		desc: 'Custom plans based on your goals, dietary preferences, and allergies.',
		icon: (
			<svg
				className="w-6 h-6 text-green-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z"
				/>
				<path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 11V7a2 2 0 012-2h2" />
			</svg>
		),
	},
	{
		title: 'Macro & Calorie Tracking',
		desc: 'Track calories, macros and micronutrients with easy logging tools.',
		icon: (
			<svg
				className="w-6 h-6 text-blue-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 7h18M3 12h18M3 17h18"
				/>
			</svg>
		),
	},
	{
		title: 'Recipe Library',
		desc: 'Search healthy recipes filtered by time, ingredients, and goals.',
		icon: (
			<svg
				className="w-6 h-6 text-yellow-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 2l3 7H9l3-7zM6 21h12"
				/>
			</svg>
		),
	},
	{
		title: 'Progress Analytics',
		desc: 'Visualize trends and celebrate milestones with charts and reports.',
		icon: (
			<svg
				className="w-6 h-6 text-purple-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 3v18h18"
				/>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7 14l3-4 4 6 5-8"
				/>
			</svg>
		),
	},
	{
		title: 'Grocery List & Planner',
		desc: 'Auto-generate shopping lists from your weekly plan.',
		icon: (
			<svg
				className="w-6 h-6 text-red-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4"
				/>
				<circle cx="10" cy="20" r="1" />
				<circle cx="18" cy="20" r="1" />
			</svg>
		),
	},
	{
		title: 'Expert Guidance',
		desc: 'Access articles and consultations from registered dietitians.',
		icon: (
			<svg
				className="w-6 h-6 text-indigo-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
				/>
				<path
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
				/>
			</svg>
		),
	},
];

const faqs = [
	{
		q: 'How do personalized meal plans work?',
		a:
			'We ask a few questions about your goals, allergies, and food preferences then generate weekly meals that match your targets. Plans are adjustable as you progress.',
	},
	{
		q: 'Can I track vegan/vegetarian diets?',
		a: 'Yes — filter and set your dietary preferences and all recipes, plans and suggestions will respect them.',
	},
	{
		q: 'Is there a free tier?',
		a: 'There is a generous free tier that includes tracking, recipes and basic plans. Premium adds 1:1 consultations and advanced analytics.',
	},
];

export default function Features(): JSX.Element {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<div className="font-sans bg-gray-50 min-h-screen">
			<Navbar />

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Hero */}
				<section className="bg-white rounded-xl shadow p-8 md:flex md:items-center md:justify-between">
					<div>
						<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
							Everything you need to eat smarter
						</h1>
						<p className="mt-3 text-gray-600 max-w-xl">
							NutriFlow helps you build sustainable habits: personalized plans,
							effortless tracking, and real nutrition guidance —
							<br className="hidden sm:block" />
							all in one place.
						</p>

						<div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
							<a
								href="/signup"
								className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md shadow"
							>
								Get Started
							</a>
							<a
								href="#features"
								className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100"
							>
								See Features
							</a>
						</div>
					</div>

					<div className="mt-8 md:mt-0 md:ml-8">
						<div className="rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-6">
							<div className="text-sm text-gray-500">Weekly snapshot</div>
							<div className="mt-4 grid grid-cols-3 gap-3">
								<div className="bg-white p-3 rounded shadow text-center">
									<div className="text-xs text-gray-500">Calories</div>
									<div className="text-lg font-semibold">2,100</div>
								</div>
								<div className="bg-white p-3 rounded shadow text-center">
									<div className="text-xs text-gray-500">Protein</div>
									<div className="text-lg font-semibold">120g</div>
								</div>
								<div className="bg-white p-3 rounded shadow text-center">
									<div className="text-xs text-gray-500">Workouts</div>
									<div className="text-lg font-semibold">4</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Feature cards */}
				<section id="features" className="mt-10">
					<h2 className="text-2xl font-bold text-gray-900">Core features</h2>
					<p className="mt-2 text-gray-600 max-w-2xl">
						Tools and resources to support healthy, sustainable progress.
					</p>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((f) => (
							<div
								key={f.title}
								className="bg-white rounded-lg shadow p-5 hover:shadow-md transition"
							>
								<div className="flex items-start space-x-4">
									<div className="flex-shrink-0">{f.icon}</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900">
											{f.title}
										</h3>
										<p className="mt-1 text-gray-600 text-sm">
											{f.desc}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Resources & FAQ */}
				<section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg p-6 shadow">
						<h3 className="text-lg font-semibold text-gray-900">
							Learning resources
						</h3>
						<p className="mt-2 text-gray-600">
							Curated articles, quick guides and meal prep tips to help you learn
							while doing.
						</p>

						<ul className="mt-4 space-y-3">
							<li>
								<a
									href="#"
									className="text-green-600 hover:underline"
								>
									Macro basics: Protein, carbs, and fats explained
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-green-600 hover:underline"
								>
									Meal prep for busy schedules
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-green-600 hover:underline"
								>
									Nutrition for different training goals
								</a>
							</li>
						</ul>
					</div>

					<div className="bg-white rounded-lg p-6 shadow">
						<h3 className="text-lg font-semibold text-gray-900">
							Frequently asked
						</h3>

						<div className="mt-4 space-y-2">
							{faqs.map((f, i) => {
								const open = openIndex === i;
								return (
									<div
										key={f.q}
										className="border rounded-md overflow-hidden"
									>
										<button
											onClick={() => setOpenIndex(open ? null : i)}
											className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-50"
										>
											<span className="text-gray-800">{f.q}</span>
											<svg
												className={`w-5 h-5 text-gray-500 transform transition-transform ${
													open ? 'rotate-180' : ''
												}`}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeWidth={2}
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</button>

										{open && (
											<div className="px-4 py-3 text-gray-600 border-t">
												{f.a}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8 text-white text-center">
					<h4 className="text-xl font-bold">Ready to make progress?</h4>
					<p className="mt-2">
						Start a free plan and see how NutriFlow fits your lifestyle.
					</p>
					<div className="mt-4">
						<a
							href="/signup"
							className="inline-block px-6 py-3 bg-white text-green-600 font-semibold rounded shadow hover:opacity-95"
						>
							Create account — it’s free
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}