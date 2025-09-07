import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Leaf, Menu, Sparkles } from "lucide-react";

const OrganicHeader = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass dark:glass-dark border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo with organic shape */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-vibrant-teal to-soft-coral animate-morph flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white animate-float" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-sunset-orange rounded-full animate-glow"></div>
          </div>
          <span className="text-xl font-space font-bold bg-gradient-to-r from-vibrant-teal to-soft-coral bg-clip-text text-transparent">
            Niraah
          </span>
        </div>

        {/* Floating Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-full px-6 py-2 border border-white/10">
          {['Features', 'About', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
            >
              {item}
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-teal/20 to-soft-coral/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-blob"></div>
              <Sparkles className="absolute top-1 right-1 w-2 h-2 text-soft-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:inline-flex font-space">
            Login
          </Button>
          <Button 
            variant="hero" 
            size="sm" 
            className="relative overflow-hidden group font-space"
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-soft-coral to-sunset-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-vibrant-teal rounded-full animate-particle"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default OrganicHeader;