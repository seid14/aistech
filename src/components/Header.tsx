import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/50 shadow-lg sticky top-0 z-50 overflow-hidden">
      {/* Tech-inspired background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zm10 0c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-aistech-blue/5 via-transparent to-sky-500/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Status indicator */}
            <div className="relative">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <a href="#home" className="group text-2xl font-bold bg-gradient-to-r from-aistech-blue to-sky-500 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105">
              <span className="relative">
                Aistech
                {/* Tech-inspired underline animation */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-aistech-blue to-sky-500 group-hover:w-full transition-all duration-500"></div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-aistech-blue/20 to-sky-500/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#home" className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-lg hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20">
              <span className="relative z-10 font-medium">Home</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-aistech-blue to-sky-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#services" className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-lg hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20">
              <span className="relative z-10 font-medium">Services</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-aistech-blue to-sky-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#about" className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-lg hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20">
              <span className="relative z-10 font-medium">About</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-aistech-blue to-sky-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contact" className="group relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-lg hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20">
              <span className="relative z-10 font-medium">Contact</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-aistech-blue to-sky-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          </nav>

          {/* Theme Toggle and Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="group relative p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:text-aistech-blue focus:outline-none focus:text-aistech-blue transition-all duration-300 hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20 hover:scale-105"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {theme === 'light' ? (
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              {/* Tech-inspired glow effect */}
              <div className="absolute inset-0 rounded-xl bg-aistech-blue/20 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group relative p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-aistech-blue focus:outline-none focus:text-aistech-blue transition-all duration-300 hover:bg-aistech-blue/10 dark:hover:bg-aistech-blue/20"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                    <span className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                  </span>
                </div>
                {/* Tech-inspired pulse effect */}
                <div className="absolute inset-0 rounded-lg bg-aistech-blue/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/70 shadow-lg">
              <a href="#home" className="group flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-aistech-blue/10 hover:to-sky-500/10 hover:shadow-md hover:scale-105">
                <span className="w-2 h-2 bg-aistech-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="font-medium">Home</span>
              </a>
              <a href="#services" className="group flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-aistech-blue/10 hover:to-sky-500/10 hover:shadow-md hover:scale-105">
                <span className="w-2 h-2 bg-aistech-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="font-medium">Services</span>
              </a>
              <a href="#about" className="group flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-aistech-blue/10 hover:to-sky-500/10 hover:shadow-md hover:scale-105">
                <span className="w-2 h-2 bg-aistech-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="font-medium">About</span>
              </a>
              <a href="#contact" className="group flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-aistech-blue transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-aistech-blue/10 hover:to-sky-500/10 hover:shadow-md hover:scale-105">
                <span className="w-2 h-2 bg-aistech-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="font-medium">Contact</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
