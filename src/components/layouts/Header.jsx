import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Sync darkMode with html class on mount
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Dashboard", path: "/dashboard" },
  ]

  return (
    <header className="border-b bg-background dark:bg-[#0b1220] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <NavLink to={"/"} className="logo w-32 md:w-40">
          <img
            src="/src/assets/shanti-removebg-preview.png"
            alt="Shanti Logo"
            className="w-full h-auto"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-[18px] font-medium font-lexend transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#5e5eee] after:transition-all after:duration-300 hover:after:w-full hover:text-[#5e5eee]",
                  isActive
                    ? "text-[#5e5eee] after:w-full"
                    : darkMode
                    ? "text-white"
                    : "text-black"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="cursor-pointer"
          >
            {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-muted-foreground" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <div className="flex flex-col mt-8 space-y-4">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-lg font-medium font-lexend text-center transition-colors hover:text-primary",
                        isActive
                          ? "text-[#5e5eee]"
                          : darkMode
                          ? "text-white"
                          : "text-black"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Theme Toggle in Mobile Drawer */}
                <Button
                  variant="outline"
                  onClick={toggleDarkMode}
                  className="mt-4 flex items-center gap-2 w-[14%] m-auto cursor-pointer"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  {/* {darkMode ? "Light Mode" : "Dark Mode"} */}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
