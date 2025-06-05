import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

function DreamDetailPage() {
  const { id } = useParams();
  const [dreams, setDreams] = useLocalStorage("dreams", []); // Also get setDreams for potential delete later
  const navigate = useNavigate();

  const dream = dreams.find((d) => d.id === id);

  if (!dream) {
    return (
      <div>
        <h2>夢が見つかりません</h2>
        <Link to="/">ホームに戻る</Link>
      </div>
    );
  }

  // Placeholder for delete function
  const handleDelete = () => {
    // Delete logic will be added in a later step
    // For now, just log or navigate
    console.log("Delete dream:", id);
    // const updatedDreams = dreams.filter(d => d.id !== id);
    // setDreams(updatedDreams);
    // navigate("/");
    alert("削除機能は後ほど実装されます。");
  };

  return (
    <div>
      <h1>{dream.title}</h1>
      <p><strong>日付:</strong> {dream.date}</p>
      <p><strong>タイプ:</strong> {dream.dreamType}</p>
      <div>
        <strong>内容:</strong>
        <div style={{ whiteSpace: "pre-wrap", border: "1px solid #ccc", padding: "10px", marginTop: "5px" }}>
          {dream.content}
        </div>
      </div>
      {dream.tags && dream.tags.length > 0 && (
        <p><strong>タグ:</strong> {dream.tags.join(", ")}</p>
      )}
      <div style={{ marginTop: "20px" }}>
        <Link to={`/dreams/${id}/edit`} style={{ marginRight: "10px" }}>編集</Link>
        {/* Delete button will call handleDelete */}
        <button onClick={handleDelete}>削除</button>
        <br />
        <br />
        <Link to="/">一覧へ戻る</Link>
      </div>
    </div>
  );
}

export default DreamDetailPage;
