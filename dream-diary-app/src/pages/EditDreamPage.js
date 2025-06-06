import React from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import DreamForm from "../components/DreamForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"; // Optional
import Paper from "@mui/material/Paper"; // For not found message
import Button from "@mui/material/Button"; // For not found message
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // For not found message

function EditDreamPage() {
  const { id } = useParams();
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const dreamToEdit = dreams.find((d) => d.id === id);

  const handleUpdateDream = (dreamData) => {
    const updatedDreams = dreams.map((dream) =>
      dream.id === id ? { ...dream, ...dreamData, id: dream.id } : dream // Ensure ID is preserved
    );
    setDreams(updatedDreams);
    navigate(`/dreams/${id}`); // Navigate to detail page after editing
  };

  if (!dreamToEdit) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5">編集する夢が見つかりません</Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          component={RouterLink}
          to="/"
          sx={{ mt: 2 }}
        >
          ホームに戻る
        </Button>
      </Paper>
    );
  }

  return (
    <Box sx={{ p: {xs: 1, sm: 2} }}> {/* Optional padding */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
        夢を編集
      </Typography>
      <DreamForm onSubmit={handleUpdateDream} initialData={dreamToEdit} />
    </Box>
  );
}

export default EditDreamPage;
