import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  status?: "sending" | "sent" | "error";
  metadata?: any;
}

export interface AIChatConfig {
  apiEndpoint?: string;
  apiKey?: string; // not needed for Ollama, but keeping for compatibility
  model?: string;
  systemPrompt?: string; // not used in Ollama directly, but we’ll keep it in case you want to prepend it
  maxTokens?: number; // not used in Ollama
  temperature?: number; // not used in Ollama
  onMessage?: (message: Message) => void;
  onError?: (error: Error) => void;
  customHeaders?: Record<string, string>;
  enableTyping?: boolean;
  enableRetry?: boolean;
  placeholder?: string;
  welcomeMessage?: string;
  errorMessage?: string;
}

interface AIChatInterfaceProps {
  config?: AIChatConfig;
  className?: string;
  onSendMessage?: (message: string) => Promise<string>;
}

const AIChatInterface = ({
  config = {},
  className = "",
  onSendMessage,
}: AIChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text:
        config.welcomeMessage ||
        "Namaste! I'm your AI Ayurvedic assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isUser: true,
      timestamp: new Date(),
      status: "sending",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setError(null);

    try {
      let aiResponse: string;

      if (onSendMessage) {
        // Use custom message handler
        aiResponse = await onSendMessage(messageText);
      } else if (config.apiEndpoint) {
        // Use API endpoint (Ollama now)
        aiResponse = await callAPI(messageText);
      } else {
        // Fallback to mock response
        aiResponse = await mockResponse(messageText);
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
        status: "sent",
      };

      setMessages((prev) => [...prev, aiMessage]);

      if (config.onMessage) {
        config.onMessage(aiMessage);
      }
    } catch (err) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text:
          config.errorMessage ||
          "I apologize, but I'm having trouble processing your request. Please try again.",
        isUser: false,
        timestamp: new Date(),
        status: "error",
      };

      setMessages((prev) => [...prev, errorMessage]);
      setError(err instanceof Error ? err.message : "An error occurred");

      if (config.onError) {
        config.onError(err instanceof Error ? err : new Error("Unknown error"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Updated for Ollama
  const callAPI = async (message: string): Promise<string> => {
    const response = await fetch(
      config.apiEndpoint || "http://localhost:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(config.customHeaders || {}),
        },
        body: JSON.stringify({
          model: config.model || "llama2",
          prompt: config.systemPrompt
            ? `${config.systemPrompt}\n\n${message}`
            : message,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Ollama request failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.response || "No response received";
  };

  const mockResponse = async (message: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    const responses = [
      "Based on Ayurvedic principles, I'd recommend considering your current dosha balance. Would you like me to help you identify your dominant dosha first?",
      "That's an excellent question about Ayurvedic nutrition. Let me provide you with some personalized guidance based on traditional wisdom.",
      "I understand you're interested in improving your health through Ayurveda. Here are some recommendations tailored to your needs.",
      "Your question touches on an important aspect of holistic wellness. Let me share some insights that might help you on your journey.",
      "I'm here to help you understand how Ayurvedic principles can support your health goals. What specific area would you like to explore?",
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    sendMessage(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const retryLastMessage = () => {
    const lastUserMessage = messages.filter((m) => m.isUser).pop();
    if (lastUserMessage) {
      setMessages((prev) => prev.filter((m) => m.id !== lastUserMessage.id));
      sendMessage(lastUserMessage.text);
    }
  };

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start gap-3 max-w-[80%] ${
                message.isUser ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.isUser
                    ? "bg-gradient-to-br from-sunset-orange to-warm-coral"
                    : "bg-gradient-to-br from-vibrant-teal to-soft-coral"
                }`}
              >
                {message.isUser ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  message.isUser
                    ? "bg-gradient-to-br from-sunset-orange/20 to-warm-coral/20 text-foreground"
                    : "bg-gradient-to-br from-vibrant-teal/10 to-soft-coral/10 text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xs text-muted-foreground">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                  {message.status === "error" && config.enableRetry && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={retryLastMessage}
                      className="h-6 px-2 text-xs"
                    >
                      <RefreshCw className="w-3 h-3 mr-1" />
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start gap-3 max-w-[80%]">
              <div className="w-8 h-8 bg-gradient-to-br from-vibrant-teal to-soft-coral rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-gradient-to-br from-vibrant-teal/10 to-soft-coral/10">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm text-muted-foreground">
                    AI is thinking...
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Error Display */}
      {error && (
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <AlertCircle className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-600">{error}</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setError(null)}
              className="ml-auto h-6 px-2"
            >
              ×
            </Button>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-border/50">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                config.placeholder ||
                "Ask me about your dosha, diet, or any Ayurvedic guidance..."
              }
              disabled={isLoading}
              className="pr-12 glass dark:glass-dark border-0 rounded-2xl focus:ring-2 focus:ring-vibrant-teal/50"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Sparkles className="w-4 h-4 text-vibrant-teal animate-glow" />
            </div>
          </div>
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="px-6 rounded-2xl bg-gradient-to-r from-vibrant-teal to-soft-coral hover:from-vibrant-teal/90 hover:to-soft-coral/90 transition-all duration-300"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChatInterface;


