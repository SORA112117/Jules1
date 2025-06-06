import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import BookIcon from "@mui/icons-material/Book"; // For title
import ListAltIcon from "@mui/icons-material/ListAlt"; // For list page
import AddCommentIcon from "@mui/icons-material/AddComment"; // For new dream page

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={RouterLink} to="/" startIcon={<BookIcon />} sx={{ mr: 2}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: "none" }}>
            夢日記
          </Typography>
        </Button>

        <Box sx={{ flexGrow: 1 }} /> {/* This will push subsequent items to the right */}

        <Button color="inherit" component={RouterLink} to="/" startIcon={<ListAltIcon />}>
          一覧
        </Button>
        <Button color="inherit" component={RouterLink} to="/new" startIcon={<AddCommentIcon />}>
          新しい夢を記録
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
