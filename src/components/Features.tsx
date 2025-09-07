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
  Globe
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Diet Planning",
    description: "Intelligent algorithms that combine Ayurvedic principles with modern nutrition to create personalized diet plans.",
    highlights: ["6 Rasa Integration", "Dosha Analysis", "Prakriti Assessment"],
    color: "from-healing-green to-warm-orange"
  },
  {
    icon: Database,
    title: "Comprehensive Food Database",
    description: "Access to 8,000+ foods from Indian, multicultural, and international cuisines with complete nutritional profiles.",
    highlights: ["Hot/Cold Properties", "Digestibility Index", "Seasonal Recommendations"],
    color: "from-warm-orange to-golden-wisdom"
  },
  {
    icon: Users,
    title: "Patient Management System",
    description: "Complete practice management with patient records, appointment scheduling, and progress tracking.",
    highlights: ["Digital Records", "Progress Tracking", "Appointment Calendar"],
    color: "from-golden-wisdom to-calm-blue"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Detailed insights into patient progress, dietary compliance, and treatment outcomes.",
    highlights: ["Progress Reports", "Compliance Tracking", "Outcome Analysis"],
    color: "from-calm-blue to-healing-green"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description: "Enterprise-grade security ensuring patient data protection and healthcare compliance.",
    highlights: ["End-to-End Encryption", "Audit Logs", "Compliance Reports"],
    color: "from-earth-brown to-healing-green"
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Access",
    description: "Seamless experience across web and mobile platforms for practitioners and patients.",
    highlights: ["Web Dashboard", "Mobile App", "Offline Sync"],
    color: "from-healing-green to-warm-orange"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-healing-green mb-4">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Platform Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-healing-green to-warm-orange bg-clip-text text-transparent">
              Modern Ayurvedic Practice
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive tools that seamlessly integrate traditional Ayurvedic wisdom 
            with cutting-edge technology for superior patient care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-elevation transition-all duration-300 border-border/50">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-healing-green transition-colors">
                  {feature.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, highlightIndex) => (
                    <Badge 
                      key={highlightIndex} 
                      variant="secondary" 
                      className="text-xs bg-accent/20 text-earth-brown hover:bg-accent/30"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-border shadow-soft">
            <Zap className="w-4 h-4 text-golden-wisdom" />
            <span className="text-sm font-medium text-foreground">
              Powered by Microsoft Azure Cloud
            </span>
            <Globe className="w-4 h-4 text-healing-green" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;