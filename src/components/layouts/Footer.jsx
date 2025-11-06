import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Logo from "/src/assets/shanti-removebg-preview.png"

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Sync darkMode with html class on mount
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return newMode
    })
  }

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Contact", "Blog"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "FAQ"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Community", "Developers"],
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-[#0b1220] text-black dark:text-white border-t font-lexend">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo + Description */}
          <div className="flex flex-col gap-4 md:w-1/4">
            <NavLink to={"/"}>
              <img
              src={Logo}
              alt="Shanti Logo"
              className="w-32 md:w-40"
            />
            </NavLink>
            <p className="text-sm md:text-base text-muted-foreground dark:text-gray-400">
              Shanti is a modern chat platform that brings people together in a safe
              and intuitive space.
            </p>
            {/* Dark Mode Toggle */}
            {/* <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="flex items-center gap-2 mt-2 w-fit"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              
            </Button> */}
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-20 flex-1">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-lg mb-4 text-[#5e5eee]">{section.title}</h3>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li
                      key={link}
                      className="text-sm hover:text-[#5e5eee] transition-colors cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-sm md:text-base text-muted-foreground dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <span>© {new Date().getFullYear()} Shanti. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-[#5e5eee] cursor-pointer">Facebook</span>
            <span className="hover:text-[#5e5eee] cursor-pointer">Twitter</span>
            <span className="hover:text-[#5e5eee] cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
