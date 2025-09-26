import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Library from "./pages/Library";
import ArticleDetail from "./pages/ArticleDetail";
import Layout from "./components/Layout";
import React from "react";

const App = () => (
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
);

export default App;