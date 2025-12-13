import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        if (storedTheme) {
            setTheme(storedTheme)
            document.documentElement.classList.toggle("dark", storedTheme === "dark")
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.classList.toggle("dark")
        localStorage.setItem("theme", newTheme)
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            ) : (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            )}
        </button>
    )
}
