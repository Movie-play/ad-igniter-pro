import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information that you provide directly to us, including name, email address, and payment information when you register for our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about products and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">
                  We do not share your personal information with third parties except as described in this policy or with your consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information from unauthorized access and disclosure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at privacy@cinestreampro.com
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

export default Privacy;
