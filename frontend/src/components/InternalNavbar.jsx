import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
import { getCurrentUser } from "../utils/auth";

export default function InternalNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  const isActive = (path) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { path: "/career-paths", label: "Career Paths", icon: "explore" },
    { path: "/all-careers", label: "All Careers", icon: "travel_explore" },
    { path: "/assessments", label: "Assessments", icon: "quiz" },
    { path: "/mentors", label: "Mentors", icon: "groups" },
    { path: "/profile", label: "Profile", icon: "person" },
    { path: "/settings", label: "Settings", icon: "settings" },
  ];

  const handleNav = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    if (auth && auth.logout) {
      auth.logout();
    }
    navigate("/login");
  };

  // Close mobile drawer on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sidebarContent = (
    <div className="p-6 flex flex-col h-full justify-between">
      <div className="flex flex-col gap-6">
        {/* Logo - redirects to dashboard for logged-in users */}
        <div
          className={`flex items-center gap-3 cursor-pointer select-none transition-transform hover:scale-[1.02] ${
            isDarkMode ? "text-[#8b5cf6]" : "text-primary"
          }`}
          onClick={() => handleNav("/dashboard")}
          title="CareerviewX Dashboard"
        >
          <img
            src="/logo.png"
            alt="CareerviewX Logo"
            className="size-9 rounded-xl shadow-lg shadow-purple-500/30"
          />
          <h2
            className={`text-xl font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-charcoal"
            }`}
          >
            CareerviewX
          </h2>
        </div>

        {/* Profile Card */}
        <div
          className={`flex gap-3 items-center p-2 rounded-xl cursor-pointer border transition-all ${
            isDarkMode
              ? "bg-[#1a142e]/50 border-[#2d264a]/50 hover:bg-white/5"
              : "bg-white border-border-light hover:bg-slate-50"
          }`}
          onClick={() => handleNav("/profile")}
        >
          <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md flex-shrink-0">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div className="flex flex-col overflow-hidden min-w-0">
            <h1
              className={`text-sm font-semibold truncate ${
                isDarkMode ? "text-white" : "text-charcoal"
              }`}
            >
              {user?.name || "User"}
            </h1>
            <p
              className={`text-xs truncate ${
                isDarkMode ? "text-[#a094b8]" : "text-slate-500"
              }`}
            >
              {user?.email || "Career Explorer"}
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all text-left w-full border-0 cursor-pointer ${
                  active
                    ? isDarkMode
                      ? "bg-gradient-to-r from-[#8b5cf6]/20 to-[#8b5cf6]/5 border-l-4 border-[#8b5cf6] text-white font-semibold"
                      : "bg-primary/10 text-primary border-l-4 border-primary font-semibold"
                    : isDarkMode
                    ? "text-[#a094b8] hover:text-white hover:bg-white/5 font-medium"
                    : "text-gray-600 hover:text-primary hover:bg-slate-100 font-medium"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[20px] transition-colors ${
                    active
                      ? isDarkMode
                        ? "text-[#8b5cf6]"
                        : "text-primary"
                      : isDarkMode
                      ? "text-[#a094b8] group-hover:text-white"
                      : "text-gray-500 group-hover:text-primary"
                  }`}
                >
                  {item.icon}
                </span>
                <p className="text-sm truncate">{item.label}</p>
              </button>
            );
          })}

          {/* Theme Toggle Button in nav */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all text-left w-full border-0 cursor-pointer ${
              isDarkMode
                ? "text-[#a094b8] hover:text-white hover:bg-white/5 font-medium"
                : "text-gray-600 hover:text-primary hover:bg-slate-100 font-medium"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
            <p className="text-sm">
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </p>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all text-red-400 hover:text-red-300 hover:bg-red-500/10 text-left w-full border-0 cursor-pointer mt-1"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <p className="text-sm font-medium">Logout</p>
          </button>
        </nav>
      </div>

      {/* Premium Upgrade Card */}
      <div
        className={`p-4 rounded-xl border relative overflow-hidden mt-6 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#8b5cf6]/20 to-transparent border-[#8b5cf6]/30"
            : "bg-gradient-to-br from-primary/10 to-transparent border-primary/20"
        }`}
      >
        <div
          className={`absolute -right-4 -top-4 size-16 rounded-full blur-2xl ${
            isDarkMode ? "bg-[#8b5cf6]/10" : "bg-primary/10"
          }`}
        />
        <p
          className={`text-xs font-bold mb-1 relative z-10 ${
            isDarkMode ? "text-white" : "text-charcoal"
          }`}
        >
          Pro Guidance
        </p>
        <p
          className={`text-[11px] mb-3 leading-relaxed relative z-10 ${
            isDarkMode ? "text-[#a094b8]" : "text-slate-600"
          }`}
        >
          Explore personalized roadmaps and 1-on-1 expert mentor sessions.
        </p>
        <button
          onClick={() => handleNav("/mentors")}
          className={`w-full py-1.5 text-white text-xs font-bold rounded-lg transition-all shadow-md cursor-pointer border-0 ${
            isDarkMode
              ? "bg-[#8b5cf6] hover:bg-[#8b5cf6]/90 shadow-[#8b5cf6]/20"
              : "bg-primary hover:bg-primary/90 shadow-primary/20"
          }`}
        >
          Find a Mentor
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* ── Left Sidebar (Desktop: lg and up) ── */}
      <aside
        className={`w-64 flex-shrink-0 border-r hidden lg:flex flex-col h-screen sticky top-0 z-40 transition-colors duration-300 ${
          isDarkMode
            ? "border-[#2d264a] bg-[#140f26]"
            : "border-border-light bg-sidebar-light"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* ── Top Header Bar (Mobile / Tablet: below lg) ── */}
      <header
        className={`lg:hidden flex items-center justify-between px-4 py-3 border-b backdrop-blur-xl sticky top-0 z-40 w-full transition-colors duration-300 ${
          isDarkMode
            ? "border-[#2d264a] bg-[#140f26]/90"
            : "border-border-light bg-white/90"
        }`}
      >
        {/* Mobile Logo */}
        <div
          className={`flex items-center gap-2.5 cursor-pointer ${
            isDarkMode ? "text-[#8b5cf6]" : "text-primary"
          }`}
          onClick={() => handleNav("/dashboard")}
          title="CareerviewX Dashboard"
        >
          <img
            src="/logo.png"
            alt="CareerviewX Logo"
            className="size-8 rounded-lg"
          />
          <h2
            className={`text-lg font-bold tracking-tight ${
              isDarkMode ? "text-white" : "text-charcoal"
            }`}
          >
            CareerviewX
          </h2>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`flex items-center justify-center size-9 rounded-lg border transition-all cursor-pointer ${
              isDarkMode
                ? "bg-[#1a142e] border-[#2d264a] text-white hover:bg-white/10"
                : "bg-slate-100 border-border-light text-charcoal hover:bg-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {isDarkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className={`flex items-center justify-center size-9 rounded-lg border transition-all cursor-pointer ${
              isDarkMode
                ? "bg-[#1a142e] border-[#2d264a] text-white hover:bg-white/10"
                : "bg-slate-100 border-border-light text-charcoal hover:bg-slate-200"
            }`}
          >
            <span className="material-symbols-outlined text-xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* ── Mobile Slide-out Drawer Overlay & Drawer ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            className={`relative w-72 max-w-[85vw] h-full shadow-2xl flex flex-col z-10 transition-transform duration-300 ${
              isDarkMode ? "bg-[#140f26]" : "bg-white"
            }`}
          >
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
