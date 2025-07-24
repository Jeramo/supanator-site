import Header from "@/components/Header";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                Supanator is designed with privacy in mind. We do not collect, store, or transmit your personal data or Supabase project data through our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
              <p className="text-muted-foreground">
                The App connects directly to your Supabase projects using the credentials you provide. All data communication occurs directly between your device and your Supabase instance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
              <p className="text-muted-foreground">
                Your Supabase credentials and preferences are stored securely on your device using iOS Keychain and secure storage mechanisms. This data is never transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Analytics and Crash Reporting</h2>
              <p className="text-muted-foreground">
                We may collect anonymous usage analytics and crash reports to improve the App's performance and user experience. This data does not contain personal information or project data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground">
                The App integrates with Supabase services. Your use of Supabase is governed by their privacy policy. We recommend reviewing Supabase's privacy policy for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your credentials and ensure secure communication with Supabase services. All communications use HTTPS encryption.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground">
                The App is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us through the App Store or our support channels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;