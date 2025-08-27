import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {COMPANY_NAME, COMPANY_TAGLINE, PHONE_NUMBER} from "@/website-text.ts";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-trust-blue-light rounded-lg flex items-center justify-center">
              <img src="/website_logo.png" alt="Company Logo" className="h-8 w-auto" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{COMPANY_NAME}</h1>
              <p className="text-muted-foreground text-sm">{COMPANY_TAGLINE}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center space-x-2"
                onClick={() => window.open(`tel:${PHONE_NUMBER}`, '_self')}
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </Button>
            <Button size="sm" className="bg-[var(--gradient-primary)] hover:opacity-90 items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Contact</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};