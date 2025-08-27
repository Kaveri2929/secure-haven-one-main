import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Plane, 
  Heart, 
  User, 
  Home, 
  Building, 
  FileText, 
  Calculator,
  TrendingUp,
  PiggyBank,
  GraduationCap,
  Key
} from "lucide-react";
import {
  SERVICES_TITLE, SERVICES_DESCRIPTION, LIFE_INSURANCE_TITLE, LIFE_INSURANCE_DESC, TRAVEL_INSURANCE_TITLE, TRAVEL_INSURANCE_DESC,
  SUPERVISA_INSURANCE_TITLE, SUPERVISA_INSURANCE_DESC, CRITICAL_ILLNESS_TITLE, CRITICAL_ILLNESS_DESC,
  DISABILITY_INSURANCE_TITLE, DISABILITY_INSURANCE_DESC, MORTGAGE_INSURANCE_TITLE, MORTGAGE_INSURANCE_DESC,
  HEALTH_DENTAL_TITLE, HEALTH_DENTAL_DESC, CORPORATE_INSURANCE_TITLE, CORPORATE_INSURANCE_DESC,
  ESTATE_PLANNING_TITLE, ESTATE_PLANNING_DESC, FINANCIAL_PLANNING_TITLE, FINANCIAL_PLANNING_DESC,
  INVESTMENT_MANAGEMENT_TITLE, INVESTMENT_MANAGEMENT_DESC, TFSA_TITLE, TFSA_DESC,
  RRSP_TITLE, RRSP_DESC, RESP_TITLE, RESP_DESC, FHSA_TITLE, FHSA_DESC
} from '../website-text';


const insuranceServices = [
  { icon: Shield, title: LIFE_INSURANCE_TITLE, description: LIFE_INSURANCE_DESC },
  { icon: Plane, title: TRAVEL_INSURANCE_TITLE, description: TRAVEL_INSURANCE_DESC },
  { icon: Shield, title: SUPERVISA_INSURANCE_TITLE, description: SUPERVISA_INSURANCE_DESC },
  { icon: Heart, title: CRITICAL_ILLNESS_TITLE, description: CRITICAL_ILLNESS_DESC },
  { icon: User, title: DISABILITY_INSURANCE_TITLE, description: DISABILITY_INSURANCE_DESC },
  { icon: Home, title: MORTGAGE_INSURANCE_TITLE, description: MORTGAGE_INSURANCE_DESC },
  { icon: Shield, title: HEALTH_DENTAL_TITLE, description: HEALTH_DENTAL_DESC },
  { icon: Building, title: CORPORATE_INSURANCE_TITLE, description: CORPORATE_INSURANCE_DESC },
];

const planningServices = [
  { icon: FileText, title: ESTATE_PLANNING_TITLE, description: ESTATE_PLANNING_DESC },
  { icon: Calculator, title: FINANCIAL_PLANNING_TITLE, description: FINANCIAL_PLANNING_DESC },
  { icon: TrendingUp, title: INVESTMENT_MANAGEMENT_TITLE, description: INVESTMENT_MANAGEMENT_DESC },
];

const savingsAccounts = [
  { icon: PiggyBank, title: TFSA_TITLE, description: TFSA_DESC },
  { icon: Calculator, title: RRSP_TITLE, description: RRSP_DESC },
  { icon: GraduationCap, title: RESP_TITLE, description: RESP_DESC },
  { icon: Key, title: FHSA_TITLE, description: FHSA_DESC },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {SERVICES_TITLE}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {SERVICES_DESCRIPTION}
          </p>
        </div>

        {/* Insurance Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Insurance Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <service.icon className="w-12 h-12 mx-auto text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planning Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Planning & Investment Services</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {planningServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <service.icon className="w-16 h-16 mx-auto text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Savings Accounts */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Registered Savings Plans</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsAccounts.map((account, index) => (
              <Card key={index} className="group hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-1 border-2 border-accent/20">
                <CardHeader className="text-center pb-4">
                  <account.icon className="w-12 h-12 mx-auto text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <CardTitle className="text-lg">{account.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>{account.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};