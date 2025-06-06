import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip"; // For tags
import Stack from "@mui/material/Stack"; // For spacing tags

function DreamItem({ dream }) {
  if (!dream) {
    return null; // Or some placeholder
  }

  return (
    <Card sx={{ mb: 2 }}> {/* Add margin bottom for spacing between items */}
      <CardActionArea component={RouterLink} to={`/dreams/${dream.id}`}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {dream.title || "無題の夢"}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            日付: {dream.date ? new Date(dream.date).toLocaleDateString() : "日付不明"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            タイプ: {dream.dreamType || "タイプ未設定"}
          </Typography>
          {dream.tags && dream.tags.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              {dream.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" />
              ))}
            </Stack>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DreamItem;
