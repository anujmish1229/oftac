import { Mail, MapPin, Hexagon, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
  { name: "Donate", href: "/donate" },
];

var isMenuOpen = false;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} OFTAC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-background/50" />
              <a
                href="mailto:oftacorganization@gmail.com">oftacorganization@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-background/50 text-sm">
            Registered Community-Based Organization in Uganda
          </p>
        </div>
      </div>
    </footer>
  );
};
