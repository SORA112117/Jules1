import React, { useState } from "react";

function DreamForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [date, setDate] = useState(initialData.date || new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState(initialData.content || "");
  const [dreamType, setDreamType] = useState(initialData.dreamType || "普通の夢");
  const [tags, setTags] = useState(initialData.tags || ""); // Comma-separated string for simplicity

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      date,
      content,
      dreamType,
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag !== ""),
    });
    // Optionally clear form if not editing
    if (!initialData.id) {
        setTitle("");
        setDate(new Date().toISOString().slice(0, 10));
        setContent("");
        setDreamType("普通の夢");
        setTags("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">タイトル:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">日付:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">内容:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dreamType">夢のタイプ:</label>
        <select id="dreamType" value={dreamType} onChange={(e) => setDreamType(e.target.value)}>
          <option value="普通の夢">普通の夢</option>
          <option value="明晰夢">明晰夢</option>
          <option value="悪夢">悪夢</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div>
        <label htmlFor="tags">タグ (カンマ区切り):</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button type="submit">{initialData.id ? "更新" : "記録する"}</button>
    </form>
  );
}

export default DreamForm;
