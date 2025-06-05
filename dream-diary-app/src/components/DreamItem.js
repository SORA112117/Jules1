import React from "react";
import { Link } from "react-router-dom";

function DreamItem({ dream }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "10px", marginBottom: "10px" }}>
      <h3>
        <Link to={`/dreams/${dream.id}`}>{dream.title}</Link>
      </h3>
      <p>日付: {dream.date}</p>
      {dream.tags && dream.tags.length > 0 && (
        <p>タグ: {dream.tags.join(", ")}</p>
      )}
    </div>
  );
}

export default DreamItem;
