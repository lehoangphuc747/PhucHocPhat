import React from "react";
import Index from "./pages/Index";

// Tạm thời loại bỏ React Router và tất cả các provider để cô lập lỗi "React.Children.only".

const App = () => (
  <React.Fragment>
    <Index />
  </React.Fragment>
);

export default App;