"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className={`text-xl font-bold transition-all duration-500 ${
            mounted ? (scrolled ? "text-gray-800" : "text-white") : "opacity-0"
          }`}
          style={{
            transform: mounted ? "translateY(0)" : "translateY(-20px)",
            transition: "transform 0.5s ease, opacity 0.5s ease, color 0.5s ease",
          }}
        >
          Arro Construction LLC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname === link.href
                  ? scrolled
                    ? "text-[rgb(var(--primary))] font-semibold"
                    : "text-white font-semibold"
                  : scrolled
                    ? "text-gray-800 hover:text-[rgb(var(--primary))]"
                    : "text-white hover:text-gray-300"
              } font-medium transition-colors`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(-20px)",
                transition: `transform 0.5s ease ${0.1 + index * 0.1}s, opacity 0.5s ease ${0.1 + index * 0.1}s, color 0.3s ease`,
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{
              backgroundColor: "rgb(45, 118, 147)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-20px)",
              transition: `transform 0.5s ease ${0.1 + navLinks.length * 0.1}s, opacity 0.5s ease ${0.1 + navLinks.length * 0.1}s`,
            }}
          >
            Get a Free Quote
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"} focus:outline-none`}
          onClick={toggleMenu}
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-[rgb(var(--primary))] font-semibold"
                    : "text-gray-800 hover:text-[rgb(var(--primary))] font-medium transition-colors"
                } block py-2`}
                onClick={() => setIsOpen(false)}
                style={{
                  opacity: 1,
                  transform: "translateX(0)",
                  animation: `slideLeft 0.3s ease forwards ${0.1 + index * 0.1}s`,
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: "rgb(45, 118, 147)",
                opacity: 1,
                transform: "translateX(0)",
                animation: `slideLeft 0.3s ease forwards ${0.1 + navLinks.length * 0.1}s`,
              }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
