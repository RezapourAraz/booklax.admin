import { Route, Routes } from "react-router-dom";
// Mui
import { Box } from "@mui/material";

// Components
import MainLayouts from "./layouts/Main.layouts";
import MainSidebar from "./components/sidebars/Main.sidebars";
import Blogs from "./pages/Blogs";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <MainLayouts sidebar={<MainSidebar />}>
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Box>
    </MainLayouts>
  );
}

export default App;
