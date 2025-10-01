import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <Card className="bg-card border-border shadow-card">
            <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using CineStream Pro, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground mb-4">
                  Permission is granted to temporarily access the materials on CineStream Pro for personal, non-commercial transitory viewing only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">3. User Account</h2>
                <p className="text-muted-foreground mb-4">
                  You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">4. Service Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify or discontinue the service at any time without notice. We shall not be liable to you or any third party for any modification or discontinuance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">5. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at legal@cinestreampro.com
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

export default Terms;
