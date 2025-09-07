import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Users, Brain, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ayurveda.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-vibrant-teal">
                <Leaf className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Ayurvedic Nutrition Science</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Modernizing{" "}
                <span className="bg-gradient-to-r from-vibrant-teal to-soft-coral bg-clip-text text-transparent">
                  Ayurvedic
                </span>{" "}
                Diet Planning
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Intelligent practice management software that seamlessly blends ancient Ayurvedic wisdom 
                with modern nutritional science for personalized, holistic dietary care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-vibrant-teal/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-vibrant-teal" />
                </div>
                <span className="text-sm font-medium">Patient Management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-soft-coral/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-warm-coral" />
                </div>
                <span className="text-sm font-medium">AI-Powered Plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-lavender/10 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-deep-teal" />
                </div>
                <span className="text-sm font-medium">8,000+ Foods</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sage-green/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-sage-green" />
                </div>
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-vibrant-teal">500+</div>
                <div className="text-sm text-muted-foreground">Practitioners</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-soft-coral">10K+</div>
                <div className="text-sm text-muted-foreground">Patients Served</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-lavender">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-vibrant-teal/10 to-soft-coral/10 rounded-2xl overflow-hidden shadow-elevation">
                <img
                  src={heroImage} 
                  alt="Ayurvedic herbs and healthy foods" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-soft border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-vibrant-teal rounded-full flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Diet Plan Ready</div>
                    <div className="text-xs text-muted-foreground">Pitta Dosha Balance</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-soft border border-border">
                <div className="text-sm font-medium">Traditional + Modern</div>
                <div className="text-xs text-muted-foreground">6 Rasas • Calories • Nutrients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;