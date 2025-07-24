import Header from "@/components/Header";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By downloading, installing, or using Supanator ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                Supanator is a Supabase client application for iOS that allows users to manage their Supabase projects, including database management, Edge Functions, and environment secrets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground">You are responsible for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                <li>Maintaining the confidentiality of your Supabase credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring compliance with Supabase's terms of service</li>
                <li>Using the App in accordance with applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Privacy and Data</h2>
              <p className="text-muted-foreground">
                Supanator connects directly to your Supabase projects. We do not store or transmit your data through our servers. All data remains between your device and your Supabase instance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                The App is provided "as is" without warranty of any kind. We shall not be liable for any damages arising from the use of the App, including but not limited to data loss or service interruption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Updates and Modifications</h2>
              <p className="text-muted-foreground">
                We reserve the right to update these Terms of Service at any time. Continued use of the App after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us through the App Store or our support channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;