import { Shield, TrendingUp, Users } from "lucide-react";
import ContactButton from "@/components/ContactButton.tsx";
import {FEATURE_1_TEXT, FEATURE_2_TEXT, FEATURE_3_TEXT, HERO_DESCRIPTION, HERO_TITLE} from "@/website-text.ts";

export const Hero = () => {
  return (
    <section className="relative bg-[var(--gradient-subtle)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-foreground leading-tight">
                {HERO_TITLE}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {HERO_DESCRIPTION}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-foreground font-medium">{FEATURE_1_TEXT}</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                <span className="text-foreground font-medium">{FEATURE_2_TEXT}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-accent" />
                <span className="text-foreground font-medium">{FEATURE_3_TEXT}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactButton/>
            </div>

          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                  src="/main_picture.jpg"
                  alt="Professional financial services office"
                  className="w-full aspect-[1181/531] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};