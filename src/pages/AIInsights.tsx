import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Brain, TrendingUp, Target, Zap, BarChart3, Sparkles, Leaf, Users, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIInsights = () => {
  const navigate = useNavigate();
  const [selectedInsight, setSelectedInsight] = useState<string | null>(null);

  const insights = [
    {
      id: "dosha-analysis",
      title: "Dosha Analysis",
      description: "AI-powered analysis of your body constitution",
      icon: Brain,
      color: "vibrant-teal",
      features: ["Vata Analysis", "Pitta Analysis", "Kapha Analysis", "Balance Recommendations"],
      stats: { accuracy: "98%", users: "5.2K", satisfaction: "4.9/5" }
    },
    {
      id: "diet-recommendations",
      title: "Smart Diet Plans",
      description: "Personalized nutrition based on your dosha",
      icon: Leaf,
      color: "soft-coral",
      features: ["Seasonal Foods", "Time-based Eating", "Food Combinations", "Digestive Health"],
      stats: { accuracy: "96%", users: "8.1K", satisfaction: "4.8/5" }
    },
    {
      id: "health-trends",
      title: "Health Trends",
      description: "Track your wellness journey with AI insights",
      icon: TrendingUp,
      color: "sage-green",
      features: ["Progress Tracking", "Pattern Recognition", "Predictive Analytics", "Goal Setting"],
      stats: { accuracy: "94%", users: "3.7K", satisfaction: "4.7/5" }
    },
    {
      id: "lifestyle-optimization",
      title: "Lifestyle Optimization",
      description: "AI-guided daily routines for optimal health",
      icon: Target,
      color: "lavender",
      features: ["Sleep Patterns", "Exercise Routines", "Stress Management", "Meditation Guidance"],
      stats: { accuracy: "92%", users: "6.3K", satisfaction: "4.6/5" }
    }
  ];

  const recentInsights = [
    {
      type: "Dosha Analysis",
      result: "Vata-Pitta dominant",
      confidence: 94,
      timestamp: "2 hours ago",
      color: "vibrant-teal"
    },
    {
      type: "Diet Recommendation",
      result: "Warm, grounding foods",
      confidence: 89,
      timestamp: "1 day ago",
      color: "soft-coral"
    },
    {
      type: "Health Trend",
      result: "Energy levels improving",
      confidence: 91,
      timestamp: "3 days ago",
      color: "sage-green"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-vibrant-teal/20 to-transparent rounded-blob animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-soft-coral/20 to-transparent animate-morph"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-lavender/20 to-transparent rounded-organic animate-float"></div>

        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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

      {/* Header */}
      <div className="relative z-20 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:scale-105 transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-vibrant-teal rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-space font-bold">AI Insights</h1>
                <p className="text-sm text-muted-foreground">Intelligent Ayurvedic analysis</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto p-4 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Active Users", value: "12.5K", icon: Users, color: "vibrant-teal" },
            { label: "Insights Generated", value: "45.2K", icon: BarChart3, color: "soft-coral" },
            { label: "Accuracy Rate", value: "96%", icon: Target, color: "sage-green" },
            { label: "Satisfaction", value: "4.8/5", icon: Sparkles, color: "lavender" },
          ].map((stat, index) => (
            <Card key={index} className="glass dark:glass-dark border-0 rounded-2xl p-4 text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 bg-${stat.color}/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-float`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}`} />
              </div>
              <div className="text-2xl font-space font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((insight) => (
            <Card
              key={insight.id}
              className={`glass dark:glass-dark border-0 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer ${
                selectedInsight === insight.id ? 'ring-2 ring-vibrant-teal/50' : ''
              }`}
              onClick={() => setSelectedInsight(selectedInsight === insight.id ? null : insight.id)}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-${insight.color}/20 rounded-2xl flex items-center justify-center group-hover:animate-float`}>
                    <insight.icon className={`w-8 h-8 text-${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-space font-bold mb-2">{insight.title}</h3>
                    <p className="text-muted-foreground mb-4">{insight.description}</p>
                    
                    <div className="flex gap-2 mb-4">
                      <Badge variant="secondary" className="bg-vibrant-teal/20 text-vibrant-teal">
                        {insight.stats.accuracy} Accuracy
                      </Badge>
                      <Badge variant="secondary" className="bg-soft-coral/20 text-soft-coral">
                        {insight.stats.users} Users
                      </Badge>
                    </div>

                    {selectedInsight === insight.id && (
                      <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                        <h4 className="font-space font-semibold">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {insight.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Zap className="w-3 h-3 text-vibrant-teal" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Insights */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-vibrant-teal" />
              Recent Insights
            </h3>
            <div className="space-y-4">
              {recentInsights.map((insight, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-vibrant-teal/5 to-soft-coral/5 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 bg-${insight.color}/20 rounded-full flex items-center justify-center`}>
                      <Brain className={`w-5 h-5 text-${insight.color}`} />
                    </div>
                    <div>
                      <div className="font-space font-semibold">{insight.type}</div>
                      <div className="text-sm text-muted-foreground">{insight.result}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{insight.confidence}% confidence</div>
                    <div className="text-xs text-muted-foreground">{insight.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;


