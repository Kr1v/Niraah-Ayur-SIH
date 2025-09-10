import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, Shield, Lock, Eye, EyeOff, Key, AlertTriangle, CheckCircle, Smartphone, Laptop, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Security = () => {
  const navigate = useNavigate();
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricLogin: true,
    dataEncryption: true,
    sessionTimeout: true,
    privacyMode: false,
    locationTracking: false,
  });

  const securityFeatures = [
    {
      id: "encryption",
      title: "End-to-End Encryption",
      description: "All your health data is encrypted using AES-256 encryption",
      icon: Lock,
      color: "vibrant-teal",
      status: "active",
      details: ["AES-256 Encryption", "Zero-Knowledge Architecture", "Regular Security Audits"]
    },
    {
      id: "authentication",
      title: "Multi-Factor Authentication",
      description: "Secure login with multiple verification methods",
      icon: Key,
      color: "soft-coral",
      status: "active",
      details: ["SMS Verification", "Email Confirmation", "Biometric Authentication"]
    },
    {
      id: "privacy",
      title: "Privacy Protection",
      description: "Your personal health information stays private",
      icon: Eye,
      color: "sage-green",
      status: "active",
      details: ["Data Anonymization", "No Third-Party Sharing", "GDPR Compliant"]
    },
    {
      id: "monitoring",
      title: "Security Monitoring",
      description: "24/7 monitoring for suspicious activities",
      icon: Shield,
      color: "lavender",
      status: "active",
      details: ["Real-time Alerts", "Anomaly Detection", "Incident Response"]
    }
  ];

  const recentActivity = [
    {
      action: "Login from new device",
      device: "iPhone 15 Pro",
      location: "New York, NY",
      time: "2 minutes ago",
      status: "verified",
      icon: Smartphone
    },
    {
      action: "Password changed",
      device: "MacBook Pro",
      location: "San Francisco, CA",
      time: "1 hour ago",
      status: "verified",
      icon: Laptop
    },
    {
      action: "Two-factor authentication enabled",
      device: "iPhone 15 Pro",
      location: "New York, NY",
      time: "2 days ago",
      status: "verified",
      icon: Key
    },
    {
      action: "Suspicious login attempt",
      device: "Unknown",
      location: "Moscow, Russia",
      time: "3 days ago",
      status: "blocked",
      icon: AlertTriangle
    }
  ];

  const securityScore = 95;

  const handleSettingChange = (setting: string, value: boolean) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: value
    }));
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
              <div className="w-10 h-10 bg-sage-green rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-space font-bold">Security & Privacy</h1>
                <p className="text-sm text-muted-foreground">Your data protection is our priority</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto p-4 space-y-8">
        {/* Security Score */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-space font-bold">Security Score</h2>
                <p className="text-muted-foreground">Based on your current security settings</p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-space font-bold text-vibrant-teal">{securityScore}</div>
                <div className="text-sm text-muted-foreground">out of 100</div>
              </div>
            </div>
            
            <div className="w-full bg-muted/20 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-vibrant-teal to-soft-coral h-3 rounded-full transition-all duration-500"
                style={{ width: `${securityScore}%` }}
              ></div>
            </div>
            
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-green-600 font-medium">Excellent security configuration</span>
            </div>
          </div>
        </Card>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature) => (
            <Card key={feature.id} className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center group-hover:animate-float`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-space font-bold">{feature.title}</h3>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                        {feature.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.details.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Security Settings */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6">Security Settings</h3>
            <div className="space-y-6">
              {Object.entries(securitySettings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {key === 'twoFactorAuth' && 'Add an extra layer of security to your account'}
                      {key === 'biometricLogin' && 'Use fingerprint or face recognition to sign in'}
                      {key === 'dataEncryption' && 'Encrypt all your health data locally'}
                      {key === 'sessionTimeout' && 'Automatically sign out after 30 minutes of inactivity'}
                      {key === 'privacyMode' && 'Hide sensitive information from screenshots'}
                      {key === 'locationTracking' && 'Allow location-based health recommendations'}
                    </div>
                  </div>
                  <Switch
                    checked={value}
                    onCheckedChange={(checked) => handleSettingChange(key, checked)}
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-bold mb-6">Recent Security Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-vibrant-teal/5 to-soft-coral/5 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.status === 'verified' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      <activity.icon className={`w-5 h-5 ${
                        activity.status === 'verified' ? 'text-green-500' : 'text-red-500'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium">{activity.action}</div>
                      <div className="text-sm text-muted-foreground">{activity.device} • {activity.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={activity.status === 'verified' ? 'default' : 'destructive'}>
                      {activity.status}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{activity.time}</div>
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

export default Security;


