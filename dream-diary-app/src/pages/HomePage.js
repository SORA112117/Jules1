import React from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import DreamItem from "../components/DreamItem";

function HomePage() {
  const [dreams] = useLocalStorage("dreams", []);

  return (
    <div>
      <h1>夢の一覧</h1>
      {dreams && dreams.length > 0 ? (
        dreams.map((dream) => <DreamItem key={dream.id} dream={dream} />)
      ) : (
        <p className="no-items-message">まだ夢は記録されていません。 <Link to="/new">最初の夢を記録しましょう！</Link></p>
      )}
    </div>
  );
}

export default HomePage;
