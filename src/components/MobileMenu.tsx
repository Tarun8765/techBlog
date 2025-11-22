import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="flex flex-col gap-4 mt-8">
          <NavLink
            to="/"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/articles"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            Articles
          </NavLink>
          <NavLink
            to="/tutorial"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            Tutorials
          </NavLink>
          <NavLink
            to="/resources"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            Resources
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            activeClassName="text-primary"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink to="/newsletter" onClick={() => setOpen(false)}>
            <Button size="sm" className="font-mono w-full">
              Subscribe
            </Button>
          </NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
