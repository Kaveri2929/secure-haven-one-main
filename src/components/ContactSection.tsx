import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactButton from "@/components/ContactButton.tsx";
import {
  CTA_DESCRIPTION,
  CTA_TITLE,
  EMAIL_ADDRESS, FOOTER, OFFICE_ADDRESS,
  OFFICE_HOURS_OPERATION,
  PHONE_HOURS_OPERATION,
  PHONE_NUMBER
} from "@/website-text.ts";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{CTA_TITLE}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {CTA_DESCRIPTION}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold text-lg">{PHONE_NUMBER}</p>
              <p className="text-sm opacity-80">{PHONE_HOURS_OPERATION}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <Mail className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold text-lg">{EMAIL_ADDRESS}</p>
              <p className="text-sm opacity-80">24/7 Email Support</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Office Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold">{OFFICE_HOURS_OPERATION}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-primary-foreground backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold">{OFFICE_ADDRESS}</p>
              <p className="text-sm opacity-80">In-person & Virtual meetings</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <ContactButton/>
          <p className="mt-4 text-sm opacity-80">
            {FOOTER}
          </p>
        </div>
      </div>
    </section>
  );
};