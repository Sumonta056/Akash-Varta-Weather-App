import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 px-4 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/logo-n.png" : "/logo-d.png"}
            alt="Weather Logo"
            className="h-10"
          />
        </Link>
        <div>
          <div
            className={`flext imte cursor-pointer transition-transform duration-500 
            ${isDark ? "transform rotate-180" : "rotate-0"}`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="w-6 h-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="w-6 h-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
