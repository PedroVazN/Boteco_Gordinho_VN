
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Import framer-motion
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        {/* Font imports */}
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet" />
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
