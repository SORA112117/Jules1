import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DreamForm from "../components/DreamForm";
import { useLocalStorage } from "../hooks/useLocalStorage";

function EditDreamPage() {
  const { id } = useParams();
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const dreamToEdit = dreams.find((d) => d.id === id);

  const handleUpdateDream = (dreamData) => {
    const updatedDreams = dreams.map((dream) =>
      dream.id === id ? { ...dream, ...dreamData } : dream
    );
    setDreams(updatedDreams);
    navigate(`/dreams/${id}`); // Navigate to detail page after editing
  };

  if (!dreamToEdit) {
    return (
      <div>
        <h2>編集する夢が見つかりません</h2>
        <button onClick={() => navigate("/")}>ホームに戻る</button>
      </div>
    );
  }

  return (
    <div>
      <h1>夢を編集</h1>
      <DreamForm onSubmit={handleUpdateDream} initialData={dreamToEdit} />
    </div>
  );
}

export default EditDreamPage;
