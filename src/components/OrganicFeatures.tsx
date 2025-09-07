import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Users, 
  Shield, 
  Smartphone, 
  BarChart3,
  Leaf,
  Zap,
  Sparkles,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Dosha Analysis",
    description: "Advanced AI algorithms that understand your unique constitution through deep Ayurvedic pattern recognition.",
    highlights: ["Quantum Processing", "Prakriti Mapping", "Live Adaptation"],
    gradient: "from-vibrant-teal to-soft-coral",
    position: "translate-y-0",
  },
  {
    icon: Database,
    title: "Cosmic Food Matrix",
    description: "8,000+ foods with energetic properties mapped through traditional wisdom and modern nutritional science.",
    highlights: ["Energy Signatures", "Seasonal Flow", "Cultural Fusion"],
    gradient: "from-soft-coral to-sunset-orange",
    position: "translate-y-4",
  },
  {
    icon: Users,
    title: "Harmony Hub",
    description: "Intuitive practice management that flows like nature, connecting healers and seekers seamlessly.",
    highlights: ["Fluid Scheduling", "Growth Tracking", "Heart Analytics"],
    gradient: "from-sunset-orange to-lavender",
    position: "translate-y-0",
  },
  {
    icon: BarChart3,
    title: "Wellness Waves",
    description: "Visual healing journeys that reveal patterns in health, diet compliance, and spiritual growth.",
    highlights: ["Energy Patterns", "Progress Flows", "Healing Curves"],
    gradient: "from-lavender to-sage-green",
    position: "translate-y-4",
  },
  {
    icon: Shield,
    title: "Sacred Security",
    description: "Your healing data protected with quantum-level encryption and universal privacy consciousness.",
    highlights: ["Energy Shields", "Cosmic Compliance", "Sacred Vaults"],
    gradient: "from-sage-green to-vibrant-teal",
    position: "translate-y-0",
  },
  {
    icon: Smartphone,
    title: "Everywhere Healing",
    description: "Access your personalized Ayurvedic guidance across all devices, like carrying wisdom in your pocket.",
    highlights: ["Cloud Consciousness", "Sync Reality", "Mobile Magic"],
    gradient: "from-vibrant-teal to-soft-coral",
    position: "translate-y-4",
  },
];

const OrganicFeatures = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-vibrant-teal/10 to-transparent rounded-blob animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-soft-coral/10 to-transparent animate-morph"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 glass dark:glass-dark px-6 py-3 rounded-full mb-6">
            <Heart className="w-5 h-5 text-soft-coral animate-pulse" />
            <span className="text-sm font-space font-medium">Platform Consciousness</span>
            <Sparkles className="w-4 h-4 text-vibrant-teal animate-glow" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-8">
            <span className="bg-gradient-to-r from-vibrant-teal via-soft-coral to-sunset-orange bg-clip-text text-transparent">
              Infinite Possibilities
            </span>
            <br />
            <span className="text-foreground">for Healing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience the future of Ayurvedic practice through an interface that 
            thinks, learns, and evolves with your healing journey.
          </p>
        </div>

        {/* Features Grid with Asymmetric Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden group hover:scale-105 transition-all duration-500 border-white/10 dark:border-white/5 glass dark:glass-dark ${feature.position}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-vibrant-teal rounded-full animate-particle opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:animate-float relative`}>
                    <feature.icon className="w-7 h-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                  </div>
                  
                  <Zap className="w-5 h-5 text-vibrant-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow" />
                </div>
                
                <CardTitle className="text-xl font-space font-semibold text-foreground group-hover:text-vibrant-teal transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <Badge 
                      key={highlightIndex} 
                      variant="secondary" 
                      className="text-xs bg-white/10 dark:bg-black/20 text-foreground border border-white/20 hover:border-vibrant-teal/50 transition-colors duration-300"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-teal/20 to-soft-coral/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg"></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 glass dark:glass-dark px-8 py-4 rounded-full border border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-vibrant-teal rounded-full animate-pulse"></div>
              <span className="text-sm font-space font-medium">Powered by Quantum Azure</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-soft-coral animate-float" />
              <span className="text-sm font-space font-medium">Infinite Scalability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFeatures;