import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide seamless entertainment experiences and professional development services that empower businesses worldwide."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A passionate group of developers, designers, and content curators dedicated to excellence in every project."
    },
    {
      icon: Award,
      title: "Our Quality",
      description: "Committed to delivering premium quality in both streaming content and technical solutions with zero compromise."
    },
    {
      icon: Zap,
      title: "Our Innovation",
      description: "Constantly evolving with cutting-edge technology to stay ahead in the digital entertainment landscape."
    }
  ];

  const stats = [
    { number: "2M+", label: "Active Users" },
    { number: "10K+", label: "Movies & Series" },
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              About <span className="text-gradient">CineStream Pro</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Leading the way in streaming entertainment and professional web development services since 2020.
            </p>
          </div>

          <section className="mb-20">
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-12">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-heading font-bold mb-6 text-center">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      CineStream Pro was born from a vision to revolutionize how people experience digital entertainment while providing world-class development services. Founded in 2020, we've grown from a small startup to a platform serving millions of users globally.
                    </p>
                    <p>
                      Our dual focus on streaming entertainment and professional web development services makes us unique in the industry. We believe that great technology should serve great content, and vice versa. This philosophy drives everything we do.
                    </p>
                    <p>
                      Today, we're proud to offer not just an extensive library of movies and series, but also comprehensive development and maintenance services that help businesses establish and grow their online presence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border shadow-card text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-heading font-bold text-gradient mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-glow mb-6">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
