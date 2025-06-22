'use client'

import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-mono-200 shadow-glass">
      <div className="container">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="group flex items-center space-x-4">
              <div className="relative">
                <div className="w-10 h-10 bg-mono-900 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                  <span className="text-white font-extralight text-lg tracking-wider">AI</span>
                </div>
              </div>
              <span className="text-xl sm:text-2xl font-display font-extralight text-mono-900 tracking-tight transition-colors duration-300 group-hover:text-accent-cool-600"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
                <span className="hidden sm:inline">Fractional AI Partners</span>
                <span className="sm:hidden">Fractional AI</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-mono-600 hover:text-mono-900 font-light tracking-wide transition-all duration-300 py-2 group"
                style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-cool-500 transition-all duration-500 group-hover:w-full"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}></span>
              </a>
            ))}
            <a href="/contact" className="btn-accent">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mono-800 hover:text-mono-600 focus:outline-none transition-all duration-300 p-2"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'top-3'
                }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}></span>
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-white border-t border-mono-200 transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
        <div className="container py-8">
          <div className="space-y-6">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-xl font-light text-mono-600 hover:text-mono-900 tracking-wide transition-colors duration-300 animate-slide-in"
                style={{ 
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6 border-t border-mono-200">
              <a href="/contact" className="btn-accent w-full text-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}