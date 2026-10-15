import { Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";

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
                href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
