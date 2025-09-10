import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Mail, Lock, User, Leaf, Sparkles, Brain, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/ai-chat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-vibrant-teal/5 to-soft-coral/5 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
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

      {/* Header */}
      <div className="relative z-20 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
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
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-space font-bold">Niraah Ayurveda</h1>
                <p className="text-sm text-muted-foreground">Your healing journey begins here</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-120px)] p-4">
        <div className="w-full max-w-md">
          {/* Welcome Card */}
          <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden mb-6">
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-vibrant-teal to-soft-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white animate-glow" />
              </div>
              <h2 className="text-2xl font-space font-bold mb-2">
                Welcome to Your Healing Journey
              </h2>
              <p className="text-muted-foreground">
                Join thousands who have discovered personalized Ayurvedic wellness
              </p>
            </div>
          </Card>

          {/* Auth Form */}
          <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
            <Tabs value={isLogin ? "login" : "signup"} onValueChange={(value) => setIsLogin(value === "login")}>
              <TabsList className="grid w-full grid-cols-2 rounded-none bg-transparent p-0">
                <TabsTrigger 
                  value="login" 
                  className="rounded-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-teal/20 data-[state=active]:to-soft-coral/20 data-[state=active]:text-foreground"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup"
                  className="rounded-none data-[state=active]:bg-gradient-to-r data-[state=active]:from-vibrant-teal/20 data-[state=active]:to-soft-coral/20 data-[state=active]:text-foreground"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-vibrant-teal to-soft-coral hover:from-vibrant-teal/90 hover:to-soft-coral/90 transition-all duration-300 rounded-2xl font-space"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a password"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm Password</label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="pl-10 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-vibrant-teal to-soft-coral hover:from-vibrant-teal/90 hover:to-soft-coral/90 transition-all duration-300 rounded-2xl font-space"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Features */}
            <div className="p-8 pt-0">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: "AI Insights", color: "vibrant-teal" },
                  { icon: Leaf, label: "8K+ Foods", color: "soft-coral" },
                  { icon: Shield, label: "Secure", color: "sage-green" },
                  { icon: Sparkles, label: "Personalized", color: "lavender" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass dark:glass-dark p-3 rounded-2xl group hover:scale-105 transition-all duration-300 text-center"
                  >
                    <div
                      className={`w-8 h-8 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:animate-float`}
                    >
                      <item.icon className={`w-4 h-4 text-${item.color}`} />
                    </div>
                    <span className="text-xs font-space font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
