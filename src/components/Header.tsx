import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import supanatorIcon from "@/assets/supanator-icon.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src={supanatorIcon} alt="Supanator" className="h-8 w-8" />
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Supanator
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/terms" className="text-sm font-medium hover:text-primary transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy
          </Link>
        </nav>

        <Button variant="gradient" size="sm">
          Download on App Store
        </Button>
      </div>
    </header>
  );
};

export default Header;