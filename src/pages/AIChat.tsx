import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import AIChatInterface, { AIChatConfig } from "@/components/AIChatInterface";
import { ArrowLeft, Brain, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIChat = () => {
  const navigate = useNavigate();

  // Configure the AI chat with API settings
  const chatConfig: AIChatConfig = {
    // Uncomment and configure these for real API integration
    // apiEndpoint: "https://api.openai.com/v1/chat/completions",
    // apiKey: "your-api-key-here",
    // model: "gpt-3.5-turbo",
    
    systemPrompt: "You are a knowledgeable Ayurvedic health assistant. Provide helpful, accurate information about doshas, nutrition, herbs, and holistic wellness practices. Always be encouraging and supportive in your responses.",
    maxTokens: 1000,
    temperature: 0.7,
    enableTyping: true,
    enableRetry: true,
    placeholder: "Ask me about your dosha, diet, or any Ayurvedic guidance...",
    welcomeMessage: "Namaste! I'm your AI Ayurvedic assistant. I can help you understand your dosha, suggest personalized diets, and guide you on your healing journey. How can I assist you today?",
    errorMessage: "I apologize, but I'm having trouble processing your request. Please try again.",
    
    // Custom message handler for API integration
    onMessage: (message) => {
      console.log("New message received:", message);
    },
    
    onError: (error) => {
      console.error("Chat error:", error);
    }
  };

  // Custom message handler function
  const handleSendMessage = async (message: string): Promise<string> => {
    // This is where you would integrate with your actual API
    // For now, we'll use a mock response
    
    // Example API integration:
    // const response = await fetch('/api/chat', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message, context: 'ayurvedic' })
    // });
    // const data = await response.json();
    // return data.response;
    
    // Mock response for demonstration
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      "Based on Ayurvedic principles, I'd recommend considering your current dosha balance. Would you like me to help you identify your dominant dosha first?",
      "That's an excellent question about Ayurvedic nutrition. Let me provide you with some personalized guidance based on traditional wisdom.",
      "I understand you're interested in improving your health through Ayurveda. Here are some recommendations tailored to your needs.",
      "Your question touches on an important aspect of holistic wellness. Let me share some insights that might help you on your journey.",
      "I'm here to help you understand how Ayurvedic principles can support your health goals. What specific area would you like to explore?",
      "According to Ayurvedic texts, the key to good health lies in maintaining balance. Let me help you understand how to apply this to your daily life.",
      "That's a great question about natural healing. Ayurveda offers many time-tested solutions for common health concerns.",
      "I'd be happy to help you with that. Ayurvedic wisdom has been refined over thousands of years and offers practical solutions for modern life."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
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
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-space font-bold">AI Ayurvedic Assistant</h1>
                <p className="text-sm text-muted-foreground">Your personalized healing guide</p>
              </div>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Chat Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 pb-20">
        <Card className="glass dark:glass-dark border-0 rounded-3xl overflow-hidden h-[calc(100vh-200px)]">
          <AIChatInterface 
            config={chatConfig}
            onSendMessage={handleSendMessage}
            className="h-full"
          />
        </Card>
      </div>

      {/* Floating AI Status */}
      <div className="fixed bottom-6 right-6 z-30">
        <div className="glass dark:glass-dark p-3 rounded-2xl flex items-center gap-2 animate-flow">
          <div className="w-3 h-3 bg-soft-coral rounded-full animate-pulse"></div>
          <span className="text-sm font-space font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
