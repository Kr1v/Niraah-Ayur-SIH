import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import AIChat from "./pages/AIChat";
import Auth from "./pages/Auth";
import AIInsights from "./pages/AIInsights";
import Foods from "./pages/Foods";
import Security from "./pages/Security";
import Personalized from "./pages/Personalized";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="niraah-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<Test />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/ai-insights" element={<AIInsights />} />
            <Route path="/foods" element={<Foods />} />
            <Route path="/security" element={<Security />} />
            <Route path="/personalized" element={<Personalized />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
