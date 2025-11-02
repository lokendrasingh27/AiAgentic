import React from 'react'

const Header = () => {
  return (
//    <!-- Header / Navbar -->
<header class=" bg-black text-white border-b-1 py-1 border-gray-700 shadow-md  top-0 z-50">
  <div class="container mx-auto px-6 py-4 flex items-center justify-between">
    {/* <!-- Logo / Brand --> */}
    <a href="#" class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#855afc] via-[#0ea5e9] to-[#f97316] ">Agentic AI Suite</a>

    {/* <!-- Desktop Menu --> */}
    <nav class="hidden md:flex items-center gap-8  font-">
      <a href="#home" class="hover:text-blue-600 transition">Home</a>
      <a href="#about" class="hover:text-blue-600 transition">About</a>
      <a href="#architecture" class="hover:text-blue-600 transition">Architecture</a>
      <a href="#industries" class="hover:text-blue-600 transition">Industries</a>
      <a href="#contact" class="hover:text-blue-600 transition">Contact</a>
    </nav>

    {/* <!-- CTA Button --> */}
    <div class="hidden md:block">
  <a
    href="#demo"
    
    className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
  >
   Book a Demo <span>→</span>
  </a>    </div>

    {/* <!-- Mobile Menu Button --> */}
    <button id="menu-btn" class="md:hidden text-3xl text-gray-700 focus:outline-none">
      ☰
    </button>
  </div>

  {/* <!-- Mobile Dropdown Menu -->/ */}
  <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
    <nav class="flex flex-col items-center gap-4 py-4">
      <a href="#home" class="hover:text-blue-600 transition">Home</a>
      <a href="#about" class="hover:text-blue-600 transition">About</a>
      <a href="#architecture" class="hover:text-blue-600 transition">Architecture</a>
      <a href="#industries" class="hover:text-blue-600 transition">Industries</a>
      <a href="#contact" class="hover:text-blue-600 transition">Contact</a>
      <a
    href="#demo"
    
    className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
  >
   Book a Demo <span>→</span>
  </a>
    </nav>
  </div>
</header>

  )
}

export default Header
