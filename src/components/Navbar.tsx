import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          <span className="text-xl font-bold font-mono">TechBlog</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Articles
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Tutorials
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <Button size="sm" className="font-mono">Subscribe</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
