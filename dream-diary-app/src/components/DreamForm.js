import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save"; // Icon for save/update
import PublishIcon from "@mui/icons-material/Publish"; // Alternative for new record

function DreamForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState("");
  const [dreamType, setDreamType] = useState("普通の夢");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setTitle(initialData.title || "");
      setDate(initialData.date ? new Date(initialData.date).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10));
      setContent(initialData.content || "");
      setDreamType(initialData.dreamType || "普通の夢");
      setTags(initialData.tags ? initialData.tags.join(", ") : "");
    } else {
      setTitle("");
      setDate(new Date().toISOString().slice(0, 10));
      setContent("");
      setDreamType("普通の夢");
      setTags("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      date,
      content,
      dreamType,
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
    });
  };

  const isEditing = initialData && initialData.id;

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Stack spacing={2}>
        <TextField
          label="タイトル"
          variant="outlined"
          fullWidth
          required
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="日付"
          type="date"
          variant="outlined"
          fullWidth
          required
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="内容"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel id="dreamType-label">夢のタイプ</InputLabel>
          <Select
            labelId="dreamType-label"
            id="dreamType"
            value={dreamType}
            onChange={(e) => setDreamType(e.target.value)}
            label="夢のタイプ"
          >
            <MenuItem value="普通の夢">普通の夢</MenuItem>
            <MenuItem value="明晰夢">明晰夢</MenuItem>
            <MenuItem value="悪夢">悪夢</MenuItem>
            <MenuItem value="その他">その他</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="タグ (カンマ区切り)"
          variant="outlined"
          fullWidth
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          helperText="例: 空, 飛行, 不安"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          startIcon={isEditing ? <SaveIcon /> : <PublishIcon />}
        >
          {isEditing ? "夢を更新" : "夢を記録する"}
        </Button>
      </Stack>
    </Box>
  );
}

export default DreamForm;
