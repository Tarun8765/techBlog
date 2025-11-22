import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { MobileMenu } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold font-mono"> TechBlogs</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          <NavLink
            to="/articles"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Articles
          </NavLink>
          <NavLink
            to="/tutorial"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Tutorials
          </NavLink>
          <NavLink
            to="/resources"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
          >
            Contact
          </NavLink>
          <NavLink to="/newsletter">
            <Button size="sm" className="font-mono">
              Subscribe
            </Button>
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
