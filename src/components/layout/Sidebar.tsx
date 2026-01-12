import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  ScanLine,
  FileText,
  Calendar,
  Watch,
  Mic,
  Database,
  Bell,
  Brain,
  Gamepad2,
  Activity,
  Search,
  Heart,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  LogIn,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: MessageSquare, label: "Medical Q&A", path: "/chatbot" },
  { icon: ScanLine, label: "Skin Detection", path: "/skin-detection" },
  { icon: FileText, label: "Report Scanning", path: "/report-scanning" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: Watch, label: "Health Prediction", path: "/health-prediction" },
  { icon: Mic, label: "Voice Consultation", path: "/voice-consultation" },
  { icon: Database, label: "Health Records", path: "/health-records" },
  { icon: Bell, label: "Alerts", path: "/alerts" },
  { icon: Brain, label: "Mental Health", path: "/mental-health" },
  { icon: Gamepad2, label: "Games & Exercise", path: "/games" },
  { icon: Activity, label: "Signal Analysis", path: "/signal-analysis" },
  { icon: Search, label: "Cancer Detection", path: "/cancer-detection" },
  { icon: Heart, label: "Lifestyle", path: "/lifestyle" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-card shadow-card lg:hidden"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isCollapsed ? 80 : 280 }}
        className={cn(
          "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border z-50 flex flex-col",
          "transition-transform duration-300 lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-display font-bold text-xl text-foreground whitespace-nowrap overflow-hidden"
              >
                MedCare AI
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 pb-4 overflow-y-auto">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200",
                      "hover:bg-sidebar-accent group",
                      isActive && "bg-primary text-primary-foreground hover:bg-primary"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-colors",
                        isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                      )}
                    />
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className={cn(
                            "text-sm font-medium whitespace-nowrap overflow-hidden",
                            isActive ? "text-primary-foreground" : "text-foreground"
                          )}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className={cn("px-3 pb-4", isCollapsed ? "space-y-2" : "space-y-2")}>
          <Link to="/signin" onClick={() => setIsMobileOpen(false)}>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start gap-3",
                isCollapsed && "justify-center px-0"
              )}
            >
              <LogIn className="w-4 h-4 flex-shrink-0" />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    Sign In
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </Link>
          <Link to="/signup" onClick={() => setIsMobileOpen(false)}>
            <Button
              className={cn(
                "w-full justify-start gap-3 gradient-primary",
                isCollapsed && "justify-center px-0"
              )}
            >
              <UserPlus className="w-4 h-4 flex-shrink-0" />
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    Sign Up
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </Link>
        </div>

        {/* Collapse Toggle */}
        <div className="p-4 border-t border-sidebar-border hidden lg:block">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl hover:bg-sidebar-accent transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Collapse</span>
              </>
            )}
          </button>
        </div>
      </motion.aside>

      {/* Spacer for content */}
      <div className={cn("hidden lg:block flex-shrink-0 transition-all duration-300", isCollapsed ? "w-20" : "w-[280px]")} />
    </>
  );
}
