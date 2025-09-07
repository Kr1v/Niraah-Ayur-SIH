import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Brain, Shield, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const OrganicHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5"></div>
        
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vibrant-teal/20 to-transparent rounded-blob animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-soft-coral/20 to-transparent animate-morph"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-lavender/20 to-transparent rounded-organic animate-float"></div>
        
        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-vibrant-teal rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass dark:glass-dark px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-vibrant-teal animate-glow" />
              <span className="text-sm font-medium font-space">Next-Gen Ayurvedic Platform</span>
              <div className="w-2 h-2 bg-soft-coral rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-space font-bold leading-tight">
                <span className="block">Healing</span>
                <span className="bg-gradient-to-r from-vibrant-teal via-soft-coral to-sunset-orange bg-clip-text text-transparent animate-glow">
                  Redefined
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Where ancient Ayurvedic wisdom meets{" "}
                <span className="text-vibrant-teal font-semibold">artificial intelligence</span>{" "}
                to create personalized healing journeys.
              </p>
            </div>

            {/* Floating Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Smart Patients", color: "vibrant-teal" },
                { icon: Brain, label: "AI Insights", color: "soft-coral" },
                { icon: Leaf, label: "8K+ Foods", color: "sage-green" },
                { icon: Shield, label: "Secure", color: "lavender" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="glass dark:glass-dark p-4 rounded-2xl group hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-${item.color}/20 rounded-full flex items-center justify-center group-hover:animate-float`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <span className="font-space font-medium">{item.label}</span>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-vibrant-teal/5 to-soft-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group font-space relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sunset-orange to-warm-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass dark:glass-dark border-white/20 hover:border-vibrant-teal/50 font-space group"
              >
                <Zap className="w-4 h-4 mr-2 group-hover:text-vibrant-teal transition-colors" />
                Watch Magic
              </Button>
            </div>

            {/* Stats with organic design */}
            <div className="flex items-center gap-8 pt-8">
              {[
                { value: "500+", label: "Healers", color: "vibrant-teal" },
                { value: "10K+", label: "Lives", color: "soft-coral" },
                { value: "98%", label: "Joy", color: "lavender" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl font-space font-bold text-${stat.color} group-hover:animate-pulse`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main image container with organic shape */}
              <div className="relative w-full h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-vibrant-teal/20 to-soft-coral/20 animate-morph"></div>
                <img 
                  src={heroImage} 
                  alt="Ayurvedic healing journey" 
                  className="w-full h-full object-cover rounded-blob animate-blob"
                />
                
                {/* Floating overlay elements */}
                <div className="absolute -top-4 -right-4 glass dark:glass-dark p-4 rounded-2xl animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-vibrant-teal rounded-full flex items-center justify-center animate-pulse">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-space font-semibold">AI Active</div>
                      <div className="text-xs text-muted-foreground">Analyzing Dosha</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 glass dark:glass-dark p-4 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-sm font-space font-semibold">Holistic Care</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <span>6 Rasas</span>
                    <div className="w-1 h-1 bg-soft-coral rounded-full"></div>
                    <span>AI Powered</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 -left-6 w-12 h-12 bg-gradient-to-br from-soft-coral/30 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 -right-6 w-8 h-8 bg-gradient-to-br from-lavender/30 to-transparent rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicHero;