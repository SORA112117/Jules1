import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

function DreamDetailPage() {
  const { id } = useParams();
  const [dreams, setDreams] = useLocalStorage("dreams", []);
  const navigate = useNavigate();

  const dream = dreams.find((d) => d.id === id);

  const handleDelete = () => {
    if (window.confirm(`「${dream.title}」を本当に削除しますか？`)) {
      const updatedDreams = dreams.filter(d => d.id !== id);
      setDreams(updatedDreams);
      navigate("/");
    }
  };

  if (!dream) {
    return (
      <div>
        <h2>夢が見つかりません</h2>
        <Link to="/">ホームに戻る</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{dream.title}</h1>
      <p><strong>日付:</strong> {dream.date}</p>
      <p><strong>タイプ:</strong> {dream.dreamType}</p>
      <div>
        <strong>内容:</strong>
        <div className="dream-content-box">
          {dream.content}
        </div>
      </div>
      {dream.tags && dream.tags.length > 0 && (
        <p><strong>タグ:</strong> {dream.tags.join(", ")}</p>
      )}
      <div className="dream-actions">
        <Link to={`/dreams/${id}/edit`} style={{ marginRight: "10px" }}>編集</Link>
        <button onClick={handleDelete} type="button">削除</button>
        <br />
        <br />
        <Link to="/">一覧へ戻る</Link>
      </div>
    </div>
  );
}

export default DreamDetailPage;
