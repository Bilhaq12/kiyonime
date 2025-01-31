"use client"

import Link from "next/link"
import { Moon, Sun, Search, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
            KIYOCOMICS
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/schedule" className="text-sm font-medium">
            Schedule
          </Link>
          <Link href="/browse" className="text-sm font-medium">
            Browse
          </Link>
        </nav>
        <div className="flex items-center ml-auto space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search anime..." className="pl-8 w-[200px]" />
          </div>
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/schedule" className="text-sm font-medium">
              Schedule
            </Link>
            <Link href="/browse" className="text-sm font-medium">
              Browse
            </Link>
            <div className="relative mt-2">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search anime..." className="pl-8 w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

