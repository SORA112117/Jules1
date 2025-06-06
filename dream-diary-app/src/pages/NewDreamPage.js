import React from "react";
import { useNavigate } from "react-router-dom";
import DreamForm from "../components/DreamForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Optional: for additional layout control

function NewDreamPage() {
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const handleSaveDream = (dreamData) => {
    const newDream = { ...dreamData, id: uuidv4() };
    setDreams([...dreams, newDream]);
    navigate("/"); // Navigate to home page after saving
  };

  return (
    <Box sx={{ p: {xs: 1, sm: 2} }}> {/* Optional padding around the form area */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
        新しい夢を記録
      </Typography>
      <DreamForm onSubmit={handleSaveDream} />
    </Box>
  );
}

export default NewDreamPage;
