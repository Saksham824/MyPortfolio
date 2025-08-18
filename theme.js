"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {/* Sun (light mode) */}
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:scale-0 dark:-rotate-90" />
      {/* Moon (dark mode) */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
