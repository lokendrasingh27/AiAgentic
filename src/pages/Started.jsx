import React from 'react'

const Started = () => {
  return (
     <section class="py-20 bg- text-center">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold mb-8">Get Started: Experience the Agentic Suite</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="border p-6 rounded-xl">
          <h3 class="text-xl font-semibold mb-2">Book a Demo</h3>
          <p class="mb-4 text-gray-700">See the platform in action for your specific industry.</p>
          <a href="#demo" class="bg-blue-600 text-white px-5 py-2 rounded-lg inline-block">Schedule Now</a>
        </div>
        <div class="border p-6 rounded-xl">
          <h3 class="text-xl font-semibold mb-2">Free Trial</h3>
          <p class="mb-4 text-gray-700">Try hands-on automation with guided onboarding.</p>
          <a href="#trial" class="bg-blue-600 text-white px-5 py-2 rounded-lg inline-block">Start Trial</a>
        </div>
        <div class="border p-6 rounded-xl">
          <h3 class="text-xl font-semibold mb-2">Talk to Sales</h3>
          <p class="mb-4 text-gray-700">Get pricing tailored to your organization’s needs.</p>
          <a href="#contact" class="bg-blue-600 text-white px-5 py-2 rounded-lg inline-block">Contact Sales</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Started
