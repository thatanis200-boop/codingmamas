import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen"; // Pastikan Anda sudah membuat file LoadingScreen.tsx sebelumnya

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Menampilkan loading screen selama 2 detik saat web pertama kali dibuka
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            // 1. Tampilkan Loading Screen terlebih dahulu
            <LoadingScreen key="loading" />
          ) : (
            // 2. Setelah loading selesai, render Router dan seluruh isi Portofolio Anda dengan animasi fade-in halus
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>
        
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;