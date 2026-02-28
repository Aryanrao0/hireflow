import { Link, useLocation } from "react-router";
import { BookOpenIcon, LayoutDashboardIcon, SparklesIcon } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-base-100/90 backdrop-blur-xl border-b border-primary/30 sticky top-0 z-50 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 pointer-events-none" />
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full px-6 py-4 relative">
        <div className="flex items-center justify-between">

          {/* LEFT — LOGO */}
          <Link
            to="/"
            className="group flex items-center gap-3 hover:scale-110 transition-all duration-300 relative"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-300 group-hover:rotate-6">
              <SparklesIcon className="size-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>

            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider group-hover:tracking-widest transition-all duration-300">
                HireFlow
              </span>
              <span className="text-xs text-base-content/60 font-medium -mt-1 group-hover:text-base-content/80 transition-colors duration-300">
                Code Together
              </span>
            </div>
          </Link>

          {/* RIGHT — NAV LINKS */}
          <div className="flex items-center gap-2">
            
            {/* PROBLEMS */}
            <Link
              to="/problems"
              className={`group relative px-5 py-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive("/problems")
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                  : "text-base-content/70 hover:text-base-content hover:shadow-lg"
              }`}
            >
              {!isActive("/problems") && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="flex items-center gap-2.5 relative z-10">
                <BookOpenIcon className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="font-semibold hidden sm:inline">Problems</span>
              </div>
            </Link>

            {/* DASHBOARD */}
            <Link
              to="/dashboard"
              className={`group relative px-5 py-2.5 rounded-xl transition-all duration-300 overflow-hidden ${
                isActive("/dashboard")
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                  : "text-base-content/70 hover:text-base-content hover:shadow-lg"
              }`}
            >
              {!isActive("/dashboard") && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
              <div className="flex items-center gap-2.5 relative z-10">
                <LayoutDashboardIcon className="size-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="font-semibold hidden sm:inline">Dashboard</span>
              </div>
            </Link>

            {/* USER */}
            <div className="ml-4">
              <UserButton />
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
