import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Sparkles, Target, TrendingUp, Calendar, Heart, Zap, Star, CheckCircle, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Personalized = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const personalGoals = [
    {
      id: "weight-management",
      title: "Weight Management",
      description: "Maintain healthy weight through Ayurvedic principles",
      icon: Target,
      color: "vibrant-teal",
      progress: 75,
      target: "Lose 5kg in 3 months",
      current: "Lost 3.2kg",
      timeline: "2 months remaining"
    },
    {
      id: "digestive-health",
      title: "Digestive Health",
      description: "Improve digestion and gut health",
      icon: Heart,
      color: "soft-coral",
      progress: 60,
      target: "Reduce bloating by 80%",
      current: "50% improvement",
      timeline: "1 month remaining"
    },
    {
      id: "energy-boost",
      title: "Energy Boost",
      description: "Increase daily energy levels naturally",
      icon: Zap,
      color: "sage-green",
      progress: 85,
      target: "Sustained energy for 12 hours",
      current: "10 hours achieved",
      timeline: "2 weeks remaining"
    },
    {
      id: "stress-relief",
      title: "Stress Relief",
      description: "Manage stress through meditation and herbs",
      icon: Sparkles,
      color: "lavender",
      progress: 40,
      target: "Daily meditation practice",
      current: "3 days per week",
      timeline: "6 weeks remaining"
    }
  ];

  const personalizedRecommendations = [
    {
      category: "Diet",
      title: "Morning Routine",
      description: "Start your day with warm water and ginger",
      priority: "high",
      time: "6:00 AM",
      duration: "15 minutes",
      icon: Calendar,
      color: "vibrant-teal"
    },
    {
      category: "Exercise",
      title: "Yoga Practice",
      description: "Sun salutations for Vata dosha balance",
      priority: "medium",
      time: "7:00 AM",
      duration: "30 minutes",
      icon: Target,
      color: "soft-coral"
    },
    {
      category: "Herbs",
      title: "Herbal Tea",
      description: "Tulsi and Ashwagandha blend for energy",
      priority: "high",
      time: "3:00 PM",
      duration: "10 minutes",
      icon: Heart,
      color: "sage-green"
    },
    {
      category: "Meditation",
      title: "Evening Meditation",
      description: "Pranayama breathing exercises",
      priority: "medium",
      time: "8:00 PM",
      duration: "20 minutes",
      icon: Sparkles,
      color: "lavender"
    }
  ];

  const healthMetrics = [
    {
      metric: "Sleep Quality",
      value: 8.5,
      unit: "/10",
      trend: "up",
      change: "+0.3",
      icon: Clock,
      color: "vibrant-teal"
    },
    {
      metric: "Energy Level",
      value: 7.2,
      unit: "/10",
      trend: "up",
      change: "+1.1",
      icon: Zap,
      color: "soft-coral"
    },
    {
      metric: "Mood Score",
      value: 8.8,
      unit: "/10",
      trend: "up",
      change: "+0.5",
      icon: Heart,
      color: "sage-green"
    },
    {
      metric: "Stress Level",
      value: 3.1,
      unit: "/10",
      trend: "down",
      change: "-0.8",
      icon: Target,
      color: "lavender"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "vibrant-teal";
      case "medium": return "soft-coral";
      case "low": return "sage-green";
      default: return "lavender";
    }
  };

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
              <div className="w-10 h-10 bg-lavender rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-space font-bold">Personalized Journey</h1>
                <p className="text-sm text-muted-foreground">Your unique path to wellness</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto p-4 space-y-8">
        {/* Health Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {healthMetrics.map((metric, index) => (
            <Card key={index} className="glass dark:glass-dark border-0 rounded-2xl p-4 text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 bg-${metric.color}/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-float`}>
                <metric.icon className={`w-6 h-6 text-${metric.color}`} />
              </div>
              <div className="text-2xl font-space font-bold text-foreground">
                {metric.value}{metric.unit}
              </div>
              <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
              <div className={`text-xs flex items-center justify-center gap-1 ${
                metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                <TrendingUp className={`w-3 h-3 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                {metric.change}
              </div>
            </Card>
          ))}
        </div>

        {/* Personal Goals */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6">Your Health Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalGoals.map((goal) => (
                <Card
                  key={goal.id}
                  className={`glass dark:glass-dark border-0 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer ${
                    selectedGoal === goal.id ? 'ring-2 ring-vibrant-teal/50' : ''
                  }`}
                  onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-${goal.color}/20 rounded-xl flex items-center justify-center group-hover:animate-float`}>
                        <goal.icon className={`w-6 h-6 text-${goal.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-space font-bold mb-1">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{goal.description}</p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{goal.progress}%</span>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                          
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>{goal.current}</span>
                            <span>{goal.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Personalized Recommendations */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6">Today's Recommendations</h3>
            <div className="space-y-4">
              {personalizedRecommendations.map((recommendation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-vibrant-teal/5 to-soft-coral/5 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-${recommendation.color}/20 rounded-xl flex items-center justify-center group-hover:animate-float`}>
                      <recommendation.icon className={`w-6 h-6 text-${recommendation.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-space font-semibold">{recommendation.title}</h4>
                        <Badge variant="secondary" className={`bg-${getPriorityColor(recommendation.priority)}/20 text-${getPriorityColor(recommendation.priority)} text-xs`}>
                          {recommendation.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{recommendation.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {recommendation.time}
                        </span>
                        <span>{recommendation.duration}</span>
                        <span className="capitalize">{recommendation.category}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-xl">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Complete
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Achievement Badges */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6">Recent Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "7-Day Streak", icon: Star, color: "vibrant-teal", earned: true },
                { title: "Meditation Master", icon: Sparkles, color: "soft-coral", earned: true },
                { title: "Healthy Eater", icon: Heart, color: "sage-green", earned: true },
                { title: "Early Riser", icon: Clock, color: "lavender", earned: false },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-2xl text-center group hover:scale-105 transition-all duration-300 ${
                    achievement.earned 
                      ? 'bg-gradient-to-br from-vibrant-teal/20 to-soft-coral/20' 
                      : 'bg-muted/20'
                  }`}
                >
                  <div className={`w-12 h-12 bg-${achievement.color}/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-float ${
                    !achievement.earned ? 'opacity-50' : ''
                  }`}>
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}`} />
                  </div>
                  <div className={`text-sm font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {achievement.title}
                  </div>
                  {achievement.earned && (
                    <div className="text-xs text-green-500 mt-1">✓ Earned</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Personalized;


