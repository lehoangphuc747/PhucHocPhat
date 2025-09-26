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
import React from "react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <React.Fragment> {/* Bọc tất cả các component con trong một Fragment */}
      <Toaster />
      <SonnerToaster />
      <TooltipProvider>
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
    </React.Fragment>
  </QueryClientProvider>
);

export default App;