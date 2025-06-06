import React from "react";
import { useParams, Link as RouterLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


function DreamDetailPage() {
  const { id } = useParams();
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const dream = dreams.find((d) => d.id === id);

  const handleDelete = () => {
    if (dream && window.confirm(`「${dream.title}」を本当に削除しますか？`)) {
      const updatedDreams = dreams.filter(d => d.id !== id);
      setDreams(updatedDreams);
      navigate("/");
    }
  };

  if (!dream) {
    return (
      <Paper sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5">夢が見つかりません</Typography>
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
    <Paper sx={{ p: { xs: 2, sm: 3, md: 4 } }}> {/* Responsive padding */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: "bold" }}>
        {dream.title}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" color="text.secondary">
          日付: {dream.date ? new Date(dream.date).toLocaleDateString() : "日付不明"}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          タイプ: {dream.dreamType || "タイプ未設定"}
        </Typography>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ my: 2 }}>
        <Typography variant="h6" gutterBottom component="h2">
          内容
        </Typography>
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap", p: 2, backgroundColor: "grey.50", borderRadius: 1, border: "1px solid", borderColor: "grey.200" }}>
          {dream.content}
        </Typography>
      </Box>

      {dream.tags && dream.tags.length > 0 && (
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" gutterBottom component="h2">
            タグ
          </Typography>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {dream.tags.map((tag, index) => (
              <Chip key={index} label={tag} />
            ))}
          </Stack>
        </Box>
      )}

      <Divider sx={{ my: 3 }} />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="flex-start" sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          component={RouterLink}
          to={`/dreams/${id}/edit`}
        >
          編集
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
        >
          削除
        </Button>
        <Button
          variant="text"
          startIcon={<ArrowBackIcon />}
          component={RouterLink}
          to="/"
          sx={{ ml: { sm: "auto" } }} // Push to right on sm screens and up
        >
          一覧へ戻る
        </Button>
      </Stack>
    </Paper>
  );
}

export default DreamDetailPage;
