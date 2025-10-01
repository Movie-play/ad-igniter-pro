import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Wrench, Zap, Shield, Clock, Users, CheckCircle2, ArrowRight } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Build powerful, scalable web applications tailored to your business needs with modern technologies.",
      features: ["React & TypeScript", "Responsive Design", "API Integration", "Database Design"]
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with our comprehensive maintenance and support services.",
      features: ["Regular Updates", "Security Patches", "Performance Optimization", "Bug Fixes"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your website speed and performance for better user experience and SEO rankings.",
      features: ["Load Time Optimization", "CDN Setup", "Code Minification", "Image Optimization"]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your digital assets with enterprise-grade security implementations and monitoring.",
      features: ["SSL Certificates", "Security Audits", "Firewall Setup", "DDoS Protection"]
    }
  ];

  const benefits = [
    "24/7 Technical Support",
    "99.9% Uptime Guarantee",
    "Scalable Solutions",
    "Cost-Effective Pricing",
    "Fast Turnaround Time",
    "Experienced Team"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Professional <span className="text-gradient">Developer Services</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We provide comprehensive web development and maintenance services to help your business thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-glow mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mb-20">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-heading font-bold mb-6">
                      Why Choose Our Services?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Card className="bg-secondary border-0 p-6">
                      <div className="flex items-center gap-4">
                        <Clock className="w-8 h-8 text-primary" />
                        <div>
                          <div className="text-2xl font-bold">24/7</div>
                          <div className="text-sm text-muted-foreground">Support Available</div>
                        </div>
                      </div>
                    </Card>
                    <Card className="bg-secondary border-0 p-6">
                      <div className="flex items-center gap-4">
                        <Users className="w-8 h-8 text-primary" />
                        <div>
                          <div className="text-2xl font-bold">500+</div>
                          <div className="text-sm text-muted-foreground">Projects Completed</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-gradient-primary shadow-glow border-0 overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                    Get in touch with our team to discuss your requirements and receive a custom quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/contact">
                      <Button size="lg" variant="secondary" className="text-lg px-8">
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 text-white hover:bg-white/10">
                        Get Started Free
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
