import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Cookie <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">1. What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device to help provide a better user experience. They help us understand how you use our website and improve our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">2. Types of Cookies We Use</h2>
                <p className="text-muted-foreground mb-4">
                  We use essential cookies for site functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">3. Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">4. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please contact us at cookies@cinestreampro.com
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cookies;
