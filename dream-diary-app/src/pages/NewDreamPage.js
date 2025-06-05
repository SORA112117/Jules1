import React from "react";
import { useNavigate } from "react-router-dom";
import DreamForm from "../components/DreamForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

function NewDreamPage() {
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const handleSaveDream = (dreamData) => {
    const newDream = { ...dreamData, id: uuidv4() };
    setDreams([...dreams, newDream]);
    navigate("/"); // Navigate to home page after saving
  };

  return (
    <div>
      <h1>新しい夢を記録</h1>
      <DreamForm onSubmit={handleSaveDream} />
    </div>
  );
}

export default NewDreamPage;
