import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Play, Star, Zap, Shield, Clock, Users, Code, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Play,
      title: "Unlimited Streaming",
      description: "Access thousands of movies and series in HD quality"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security for your data protection"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized streaming with minimal buffering time"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Watch anytime, anywhere on any device"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website and application development tailored to your needs"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Professional ongoing maintenance and support for your projects"
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Expert technical consulting for your digital transformation"
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Priority support with guaranteed response times"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 gradient-hero opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Unlimited Entertainment
                <span className="block text-gradient">Starts Here</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stream thousands of movies and series in stunning quality. Professional development and maintenance services available for your business needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link to="/browse">
                  <Button size="lg" className="gradient-primary shadow-glow text-lg px-8 py-6 hover:opacity-90">
                    <Play className="w-5 h-5 mr-2" />
                    Start Watching
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                    View Services
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <span>10,000+ Movies</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span>2M+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Secure & Safe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Why Choose <span className="text-gradient">CineStream Pro</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experience the ultimate streaming platform with premium features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Professional <span className="text-gradient">Developer Services</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Expert development and maintenance solutions for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-glow flex-shrink-0">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" className="gradient-primary shadow-glow hover:opacity-90">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-primary shadow-glow border-0 overflow-hidden">
              <CardContent className="p-12 md:p-16 text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                    Join millions of users enjoying unlimited entertainment and professional services
                  </p>
                  <Link to="/login">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                      Create Free Account
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
