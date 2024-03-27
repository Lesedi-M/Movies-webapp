'use client'
import { ThemeProvider } from "next-themes"

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
        <div className="dark:bg-gray-900 min-h-screen select-none transition-colors duration-300">
            {children}
        </div>
    </ThemeProvider>
  )
}