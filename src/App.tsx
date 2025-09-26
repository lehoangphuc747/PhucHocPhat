import { Toaster } from "@/components/ui/toaster";
import { SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";
import ArticleDetail from "./pages/ArticleDetail";
import Layout from "./components/Layout";
import React from "react"; // Import React để sử dụng React.Fragment (nếu cần ở nơi khác)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Global Toasters được đặt ở đây, bên ngoài TooltipProvider và BrowserRouter */}
    <Toaster />
    <SonnerToaster />
    <TooltipProvider>
      {/* BrowserRouter là phần tử con duy nhất của TooltipProvider */}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:id" element={<ArticleDetail />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;