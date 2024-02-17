import { Route, Routes, useNavigate } from "react-router-dom";
// Mui
import { Box } from "@mui/material";

// Components
import MainLayouts from "./layouts/Main.layouts";
import MainSidebar from "./components/sidebars/Main.sidebars";
import Blogs from "./pages/blogs/Blogs";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";
import { useAppSelector } from "./hooks/reduxHooks";
import Login from "./pages/auth/Login";

function App() {
  // hooks
  const navigate = useNavigate();
  // selector
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user]);

  if (!user) {
    return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    );
  } else {
    return (
      <MainLayouts sidebar={<MainSidebar />}>
        <Box sx={{ p: 2 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs/*" element={<Blogs />} />
          </Routes>
        </Box>
      </MainLayouts>
    );
  }
}

export default App;
