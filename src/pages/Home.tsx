import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Database, Zap, Key, Smartphone, Palette } from "lucide-react";
import supanatorIcon from "@/assets/supanator-icon.png";

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Authentication",
      description: "Secure login with Supabase credentials",
      features: [
        "Service Role Key support",
        "Experimental API Key",
        "Demo credentials for testing",
        "Beautiful gradient login interface"
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Database Management",
      description: "Complete database administration tools",
      features: [
        "Browse all database tables",
        "View table schemas and metadata",
        "Edit table rows directly",
        "Execute custom SQL queries"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Edge Functions",
      description: "Manage your serverless functions",
      features: [
        "Auto-discover deployed functions",
        "View function metadata",
        "Management API integration",
        "Function configuration details"
      ]
    },
    {
      icon: <Key className="h-6 w-6 text-white" />,
      title: "Environment Secrets",
      description: "Secure secrets management",
      features: [
        "View and manage secrets",
        "Toggle visibility for sensitive values",
        "Real-time data sync",
        "Direct Management API integration"
      ]
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "Modern Design",
      description: "Beautiful and intuitive interface",
      features: [
        "Clean UI with gradients",
        "Card-based layout",
        "Dark mode support",
        "Responsive design"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Technical Stack",
      description: "Built with latest iOS technologies",
      features: [
        "SwiftUI framework",
        "Combine reactive programming",
        "iOS 15+ features",
        "Direct Supabase API integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <img 
              src={supanatorIcon} 
              alt="Supanator Icon" 
              className="h-24 w-24 md:h-32 md:w-32 shadow-glow"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Supanator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The ultimate Supabase client for iOS. Manage your databases, functions, and secrets with a beautiful, intuitive interface.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="text-lg">
              Download on App Store
            </Button>
            <Button variant="outline" size="xl" className="text-lg">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your Supabase projects efficiently and beautifully.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download Supanator today and experience the most beautiful way to manage your Supabase projects on iOS.
          </p>
          <Button variant="hero" size="xl" className="text-lg">
            Download Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Supanator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;