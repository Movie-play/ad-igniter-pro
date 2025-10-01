import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@cinestreampro.com",
      link: "mailto:info@cinestreampro.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Cinema Street, Entertainment District, CA 90028",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center shadow-glow mx-auto mb-4">
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border shadow-card max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    required
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    required
                    placeholder="Tell us more..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full gradient-primary shadow-glow hover:opacity-90">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
