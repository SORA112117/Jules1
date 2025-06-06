import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import DreamItem from "../components/DreamItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // For layout, if needed. Stack might also be an option.
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // Example Icon

function HomePage() {
  const [dreams] = useLocalStorage("dreams", []);

  // Sort dreams by date in descending order (newest first)
  const sortedDreams = dreams.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Box> {/* Using Box as a general container for this page's content */}
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", mb: 3 }}>
        夢の一覧
      </Typography>

      {sortedDreams && sortedDreams.length > 0 ? (
        <Grid container spacing={2}> {/* Using Grid for responsive layout of dream items */}
          {sortedDreams.map((dream) => (
            <Grid item xs={12} sm={6} md={4} key={dream.id}> {/* Responsive item sizing */}
              <DreamItem dream={dream} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: "center", mt: 4, p: 3, backgroundColor: "grey.100", borderRadius: 1 }}>
          <Typography variant="subtitle1" gutterBottom>
            まだ夢は記録されていません。
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/new"
            startIcon={<AddCircleOutlineIcon />}
          >
            最初の夢を記録しましょう！
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default HomePage;
